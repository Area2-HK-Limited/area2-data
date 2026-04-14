import type { FastifyInstance } from 'fastify';
import { authMiddleware, requireScope } from '../middleware/auth.js';
import { db } from '../db/client.js';
import { storage } from '../storage/minio.js';
import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';
import { createWriteStream, createReadStream, unlinkSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { randomUUID } from 'crypto';
import type {
  SkillListItem,
  SkillDetail,
  PublishResponse,
  DownloadInfo,
} from '@ocm/shared';

export async function skillRoutes(app: FastifyInstance) {

  // ── GET /v1/skills ──────────────────────────────────────────────
  app.get(
    '/skills',
    { preHandler: [authMiddleware, requireScope('skills:read')] },
    async (request, reply) => {
      const { tag, q, limit = '50', offset = '0' } = request.query as Record<string, string>;

      let sql = `
        SELECT slug, name, summary, latest_version, tags, updated_at
        FROM skills
        WHERE visibility IN ('private','restricted')
        ORDER BY updated_at DESC
        LIMIT $1 OFFSET $2
      `;
      const params: unknown[] = [parseInt(limit), parseInt(offset)];

      // Simple tag filter
      if (tag) {
        sql = `
          SELECT slug, name, summary, latest_version, tags, updated_at
          FROM skills
          WHERE visibility IN ('private','restricted')
            AND tags @> $3::jsonb
          ORDER BY updated_at DESC
          LIMIT $1 OFFSET $2
        `;
        params.push(JSON.stringify([tag]));
      }

      const result = await db.query(sql, params);
      const skills: SkillListItem[] = result.rows.map((r) => ({
        slug: r.slug,
        name: r.name,
        summary: r.summary,
        latestVersion: r.latest_version,
        tags: r.tags ?? [],
        updatedAt: r.updated_at,
      }));

      return reply.send({ ok: true, data: skills });
    }
  );

  // ── GET /v1/skills/:slug ────────────────────────────────────────
  app.get(
    '/skills/:slug',
    { preHandler: [authMiddleware, requireScope('skills:read')] },
    async (request, reply) => {
      const { slug } = request.params as { slug: string };

      const skillRes = await db.query(
        `SELECT id, slug, name, summary, latest_version, tags, visibility, created_at, updated_at
         FROM skills WHERE slug = $1`,
        [slug]
      );
      if (skillRes.rows.length === 0) {
        return reply.status(404).send({ ok: false, error: 'Skill not found' });
      }
      const s = skillRes.rows[0];

      const versionsRes = await db.query(
        `SELECT version FROM skill_versions WHERE skill_id = $1 ORDER BY published_at DESC`,
        [s.id]
      );

      const detail: SkillDetail = {
        id: s.id,
        slug: s.slug,
        name: s.name,
        summary: s.summary,
        latestVersion: s.latest_version,
        tags: s.tags ?? [],
        visibility: s.visibility,
        versions: versionsRes.rows.map((v) => v.version),
        updatedAt: s.updated_at,
        createdAt: s.created_at,
      };

      return reply.send({ ok: true, data: detail });
    }
  );

  // ── GET /v1/skills/:slug/versions ──────────────────────────────
  app.get(
    '/skills/:slug/versions',
    { preHandler: [authMiddleware, requireScope('skills:read')] },
    async (request, reply) => {
      const { slug } = request.params as { slug: string };
      const skill = await db.query('SELECT id FROM skills WHERE slug = $1', [slug]);
      if (skill.rows.length === 0) {
        return reply.status(404).send({ ok: false, error: 'Skill not found' });
      }

      const versions = await db.query(
        `SELECT version, changelog, bundle_sha256, bundle_size, published_at
         FROM skill_versions WHERE skill_id = $1 ORDER BY published_at DESC`,
        [skill.rows[0].id]
      );

      return reply.send({ ok: true, data: versions.rows });
    }
  );

  // ── GET /v1/skills/:slug/download ──────────────────────────────
  app.get(
    '/skills/:slug/download',
    { preHandler: [authMiddleware, requireScope('skills:read')] },
    async (request, reply) => {
      const { slug } = request.params as { slug: string };
      const { version } = request.query as { version?: string };

      const skill = await db.query('SELECT id FROM skills WHERE slug = $1', [slug]);
      if (skill.rows.length === 0) {
        return reply.status(404).send({ ok: false, error: 'Skill not found' });
      }

      const versionFilter = version
        ? 'AND version = $2'
        : 'ORDER BY published_at DESC LIMIT 1';
      const params: unknown[] = [skill.rows[0].id];
      if (version) params.push(version);

      const versionRes = await db.query(
        `SELECT id, version, bundle_path, bundle_sha256, bundle_size
         FROM skill_versions
         WHERE skill_id = $1 ${versionFilter}`,
        params
      );

      if (versionRes.rows.length === 0) {
        return reply.status(404).send({ ok: false, error: 'Version not found' });
      }

      const v = versionRes.rows[0];

      // Generate a presigned download URL (1 hour TTL) from MinIO
      const downloadUrl = await storage.presignedGetObject(
        process.env.MINIO_BUCKET ?? 'ocm-skills',
        v.bundle_path,
        3600
      );

      const info: DownloadInfo = {
        slug,
        version: v.version,
        downloadUrl,
        bundleSha256: v.bundle_sha256,
        bundleSize: v.bundle_size,
        expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
      };

      return reply.send({ ok: true, data: info });
    }
  );

  // ── POST /v1/skills/publish ─────────────────────────────────────
  app.post(
    '/skills/publish',
    { preHandler: [authMiddleware, requireScope('skills:publish')] },
    async (request, reply) => {
      const user = request.user!;
      const parts = request.parts();

      let manifest: Record<string, unknown> | null = null;
      let changelog = '';
      let visibility = 'private';
      let bundleTmpPath: string | null = null;
      let bundleSize = 0;
      let bundleSha256 = '';

      for await (const part of parts) {
        if (part.type === 'field') {
          if (part.fieldname === 'manifest') {
            try {
              manifest = JSON.parse(part.value as string);
            } catch {
              return reply.status(400).send({ ok: false, error: 'Invalid manifest JSON' });
            }
          } else if (part.fieldname === 'changelog') {
            changelog = part.value as string;
          } else if (part.fieldname === 'visibility') {
            visibility = part.value as string;
          }
        } else if (part.type === 'file' && part.fieldname === 'bundle') {
          // Stream to temp file, compute sha256 on the fly
          const tmpPath = join(tmpdir(), `ocm-bundle-${randomUUID()}.zip`);
          bundleTmpPath = tmpPath;
          const hash = createHash('sha256');
          let size = 0;
          const chunks: Buffer[] = [];

          for await (const chunk of part.file) {
            hash.update(chunk);
            size += chunk.length;
            chunks.push(chunk);
          }

          bundleSha256 = hash.digest('hex');
          bundleSize = size;

          // Write to tmp
          const { writeFileSync } = await import('fs');
          writeFileSync(tmpPath, Buffer.concat(chunks));
        }
      }

      if (!manifest) {
        return reply.status(400).send({ ok: false, error: 'Missing manifest field' });
      }
      if (!bundleTmpPath) {
        return reply.status(400).send({ ok: false, error: 'Missing bundle file' });
      }

      const slug = String(manifest.slug);
      const version = String(manifest.version);

      if (!slug || !version) {
        return reply.status(400).send({ ok: false, error: 'manifest.slug and manifest.version are required' });
      }

      // Check version doesn't already exist
      const existing = await db.query(
        `SELECT sv.id FROM skill_versions sv
         JOIN skills s ON s.id = sv.skill_id
         WHERE s.slug = $1 AND sv.version = $2`,
        [slug, version]
      );
      if (existing.rows.length > 0) {
        unlinkSync(bundleTmpPath);
        return reply.status(409).send({
          ok: false,
          error: `Version ${version} already exists for ${slug}. Bump the version number.`,
        });
      }

      // Upsert skill record
      const bundlePath = `skills/${slug}/${version}/${slug}-${version}.zip`;

      const skillRes = await db.query(
        `INSERT INTO skills (slug, name, summary, owner_user_id, visibility, tags, latest_version)
         VALUES ($1, $2, $3, $4, $5, $6::jsonb, $7)
         ON CONFLICT (slug) DO UPDATE
           SET name = EXCLUDED.name,
               summary = EXCLUDED.summary,
               visibility = EXCLUDED.visibility,
               tags = EXCLUDED.tags,
               latest_version = EXCLUDED.latest_version,
               updated_at = NOW()
         RETURNING id`,
        [
          slug,
          manifest.name ?? slug,
          manifest.summary ?? '',
          user.userId,
          visibility,
          JSON.stringify(manifest.tags ?? []),
          version,
        ]
      );
      const skillId = skillRes.rows[0].id;

      // Upload to MinIO
      const bucket = process.env.MINIO_BUCKET ?? 'ocm-skills';
      const { readFileSync } = await import('fs');
      const bundleBuffer = readFileSync(bundleTmpPath);

      await storage.putObject(bucket, bundlePath, bundleBuffer, bundleSize, {
        'Content-Type': 'application/zip',
        'x-ocm-sha256': bundleSha256,
      });
      unlinkSync(bundleTmpPath);

      // Insert version record
      const versionRes = await db.query(
        `INSERT INTO skill_versions
           (skill_id, version, manifest_json, changelog, bundle_path, bundle_sha256, bundle_size, published_by)
         VALUES ($1, $2, $3::jsonb, $4, $5, $6, $7, $8)
         RETURNING id`,
        [
          skillId,
          version,
          JSON.stringify(manifest),
          changelog,
          bundlePath,
          bundleSha256,
          bundleSize,
          user.userId,
        ]
      );

      // Write audit log
      await db.query(
        `INSERT INTO audit_logs (actor_id, action, target_type, target_id, metadata)
         VALUES ($1, 'publish', 'skill', $2, $3::jsonb)`,
        [user.userId, skillId, JSON.stringify({ slug, version, bundleSha256 })]
      );

      const response: { ok: true; data: PublishResponse } = {
        ok: true,
        data: {
          skillId,
          versionId: versionRes.rows[0].id,
          slug,
          version,
          bundleSha256,
        },
      };

      return reply.status(201).send(response);
    }
  );
}
