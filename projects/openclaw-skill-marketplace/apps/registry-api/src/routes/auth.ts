import type { FastifyInstance } from 'fastify';
import { authMiddleware } from '../middleware/auth.js';
import type { WhoamiResponse } from '@ocm/shared';

export async function authRoutes(app: FastifyInstance) {
  /**
   * GET /v1/me
   * Returns identity of the current API key holder.
   */
  app.get(
    '/me',
    { preHandler: authMiddleware },
    async (request, reply) => {
      const user = request.user!;
      const response: { ok: true; data: WhoamiResponse } = {
        ok: true,
        data: {
          userId: user.userId,
          name: user.name,
          role: user.role as any,
          scopes: user.scopes as any[],
          keyPrefix: user.keyPrefix,
          label: user.label,
        },
      };
      return reply.send(response);
    }
  );
}
