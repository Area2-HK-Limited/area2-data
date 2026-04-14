import type { FastifyRequest, FastifyReply } from 'fastify';
import { db } from '../db/client.js';
import { createHash } from 'crypto';

declare module 'fastify' {
  interface FastifyRequest {
    user?: {
      userId: string;
      name: string;
      role: string;
      scopes: string[];
      keyPrefix: string;
      label: string;
    };
  }
}

/**
 * Resolves `Authorization: Bearer <API_KEY>` → populates request.user
 * Used as a preHandler on protected routes.
 */
export async function authMiddleware(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return reply.status(401).send({ ok: false, error: 'Missing or invalid Authorization header' });
  }

  const rawKey = authHeader.slice(7).trim();
  if (!rawKey) {
    return reply.status(401).send({ ok: false, error: 'Empty API key' });
  }

  const keyHash = createHash('sha256').update(rawKey).digest('hex');

  const result = await db.query(
    `SELECT
       ak.id, ak.user_id, ak.scopes, ak.label, ak.key_prefix,
       ak.revoked_at, ak.expires_at,
       u.name, u.role
     FROM api_keys ak
     JOIN users u ON u.id = ak.user_id
     WHERE ak.key_hash = $1`,
    [keyHash]
  );

  if (result.rows.length === 0) {
    return reply.status(401).send({ ok: false, error: 'Invalid API key' });
  }

  const row = result.rows[0];

  if (row.revoked_at) {
    return reply.status(401).send({ ok: false, error: 'API key has been revoked' });
  }

  if (row.expires_at && new Date(row.expires_at) < new Date()) {
    return reply.status(401).send({ ok: false, error: 'API key has expired' });
  }

  // Update last_used_at (fire-and-forget)
  db.query('UPDATE api_keys SET last_used_at = NOW() WHERE id = $1', [row.id]).catch(() => {});

  request.user = {
    userId: row.user_id,
    name: row.name,
    role: row.role,
    scopes: row.scopes ?? [],
    keyPrefix: row.key_prefix,
    label: row.label,
  };
}

/**
 * Check that the authenticated user has the required scope.
 */
export function requireScope(scope: string) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    if (!request.user) {
      return reply.status(401).send({ ok: false, error: 'Unauthenticated' });
    }
    if (!request.user.scopes.includes(scope) && !request.user.scopes.includes('skills:admin')) {
      return reply.status(403).send({
        ok: false,
        error: `Insufficient scope. Required: ${scope}`,
      });
    }
  };
}
