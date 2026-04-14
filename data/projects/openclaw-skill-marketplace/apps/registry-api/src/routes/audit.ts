import type { FastifyInstance } from 'fastify';
import { authMiddleware, requireScope } from '../middleware/auth.js';
import { db } from '../db/client.js';

export async function auditRoutes(app: FastifyInstance) {
  /**
   * GET /v1/audit/publish  (admin only)
   */
  app.get(
    '/audit/publish',
    { preHandler: [authMiddleware, requireScope('skills:admin')] },
    async (request, reply) => {
      const { limit = '50', offset = '0' } = request.query as Record<string, string>;

      const result = await db.query(
        `SELECT al.id, al.actor_id, al.action, al.target_type, al.target_id,
                al.metadata, al.created_at,
                u.name AS actor_name
         FROM audit_logs al
         LEFT JOIN users u ON u.id = al.actor_id
         WHERE al.action = 'publish'
         ORDER BY al.created_at DESC
         LIMIT $1 OFFSET $2`,
        [parseInt(limit), parseInt(offset)]
      );

      return reply.send({ ok: true, data: result.rows });
    }
  );

  /**
   * GET /v1/audit  (admin only) — all actions
   */
  app.get(
    '/audit',
    { preHandler: [authMiddleware, requireScope('skills:admin')] },
    async (request, reply) => {
      const { limit = '100', offset = '0', action } = request.query as Record<string, string>;

      const params: unknown[] = [parseInt(limit), parseInt(offset)];
      let actionFilter = '';
      if (action) {
        actionFilter = 'AND al.action = $3';
        params.push(action);
      }

      const result = await db.query(
        `SELECT al.id, al.actor_id, al.action, al.target_type, al.target_id,
                al.metadata, al.created_at,
                u.name AS actor_name
         FROM audit_logs al
         LEFT JOIN users u ON u.id = al.actor_id
         WHERE 1=1 ${actionFilter}
         ORDER BY al.created_at DESC
         LIMIT $1 OFFSET $2`,
        params
      );

      return reply.send({ ok: true, data: result.rows });
    }
  );
}
