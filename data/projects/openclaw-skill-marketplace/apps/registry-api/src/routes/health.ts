import type { FastifyInstance } from 'fastify';
import type { ApiSuccessResponse } from '@ocm/shared';

export async function healthRoutes(app: FastifyInstance) {
  /**
   * GET /v1/health
   * Public — no auth required
   */
  app.get('/health', async (_req, reply) => {
    const response: ApiSuccessResponse<{ status: string; version: string; timestamp: string }> = {
      ok: true,
      data: {
        status: 'ok',
        version: process.env.npm_package_version ?? '0.1.0',
        timestamp: new Date().toISOString(),
      },
    };
    return reply.status(200).send(response);
  });
}
