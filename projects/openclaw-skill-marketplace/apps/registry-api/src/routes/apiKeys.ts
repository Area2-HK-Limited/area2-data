import type { FastifyInstance } from 'fastify';
import { authMiddleware, requireScope } from '../middleware/auth.js';
import { db } from '../db/client.js';
import { createHash, randomBytes } from 'crypto';

export async function apiKeyRoutes(app: FastifyInstance) {
  /**
   * GET /v1/api-keys  (admin only)
   */
  app.get(
    '/api-keys',
    { preHandler: [authMiddleware, requireScope('skills:admin')] },
    async (_request, reply) => {
      const result = await db.query(
        `SELECT ak.id, ak.key_prefix, ak.scopes, ak.label,
                ak.expires_at, ak.last_used_at, ak.revoked_at, ak.created_at,
                u.name AS user_name
         FROM api_keys ak
         JOIN users u ON u.id = ak.user_id
         ORDER BY ak.created_at DESC`
      );
      return reply.send({ ok: true, data: result.rows });
    }
  );

  /**
   * POST /v1/api-keys  (admin only)
   * Body: { label, scopes, userId?, expiresAt? }
   */
  app.post(
    '/api-keys',
    { preHandler: [authMiddleware, requireScope('skills:admin')] },
    async (request, reply) => {
      const { label, scopes, userId, expiresAt } = request.body as {
        label: string;
        scopes: string[];
        userId?: string;
        expiresAt?: string;
      };

      if (!label || !scopes?.length) {
        return reply.status(400).send({ ok: false, error: 'label and scopes are required' });
      }

      const rawKey = `ocm_${randomBytes(24).toString('hex')}`;
      const keyHash = createHash('sha256').update(rawKey).digest('hex');
      const keyPrefix = rawKey.slice(0, 12); // "ocm_" + first 8 hex chars

      const targetUserId = userId ?? request.user!.userId;

      const result = await db.query(
        `INSERT INTO api_keys (user_id, key_prefix, key_hash, scopes, label, expires_at)
         VALUES ($1, $2, $3, $4::jsonb, $5, $6)
         RETURNING id, key_prefix, scopes, label, created_at`,
        [
          targetUserId,
          keyPrefix,
          keyHash,
          JSON.stringify(scopes),
          label,
          expiresAt ?? null,
        ]
      );

      // Return the full key ONCE — never stored in DB
      return reply.status(201).send({
        ok: true,
        data: {
          ...result.rows[0],
          apiKey: rawKey,
          warning: 'Store this key securely — it will NOT be shown again.',
        },
      });
    }
  );

  /**
   * POST /v1/api-keys/:id/revoke  (admin only)
   */
  app.post(
    '/api-keys/:id/revoke',
    { preHandler: [authMiddleware, requireScope('skills:admin')] },
    async (request, reply) => {
      const { id } = request.params as { id: string };

      const result = await db.query(
        `UPDATE api_keys SET revoked_at = NOW()
         WHERE id = $1 AND revoked_at IS NULL
         RETURNING id, key_prefix, label`,
        [id]
      );

      if (result.rows.length === 0) {
        return reply.status(404).send({
          ok: false,
          error: 'Key not found or already revoked',
        });
      }

      // Audit log
      await db.query(
        `INSERT INTO audit_logs (actor_id, action, target_type, target_id, metadata)
         VALUES ($1, 'revoke', 'api_key', $2, $3::jsonb)`,
        [
          request.user!.userId,
          id,
          JSON.stringify({ label: result.rows[0].label }),
        ]
      );

      return reply.send({ ok: true, data: result.rows[0] });
    }
  );
}
