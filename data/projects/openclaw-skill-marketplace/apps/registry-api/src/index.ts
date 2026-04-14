import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import multipart from '@fastify/multipart';
import 'dotenv/config';

import { healthRoutes } from './routes/health.js';
import { authRoutes } from './routes/auth.js';
import { skillRoutes } from './routes/skills.js';
import { apiKeyRoutes } from './routes/apiKeys.js';
import { auditRoutes } from './routes/audit.js';
import { authMiddleware } from './middleware/auth.js';
import { ensureBucket } from './storage/minio.js';

const PORT = parseInt(process.env.PORT ?? '3721', 10);
const HOST = process.env.HOST ?? '0.0.0.0';

async function build() {
  const app = Fastify({
    logger: {
      transport:
        process.env.NODE_ENV !== 'production'
          ? { target: 'pino-pretty', options: { colorize: true } }
          : undefined,
    },
  });

  // ── Security / CORS ──────────────────────────────────────────
  await app.register(helmet, { global: true });
  await app.register(cors, {
    origin: process.env.CORS_ORIGIN ?? false,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  });

  // ── Rate limiting ─────────────────────────────────────────────
  await app.register(rateLimit, {
    max: 200,
    timeWindow: '1 minute',
  });

  // ── File uploads (multipart) ───────────────────────────────────
  await app.register(multipart, {
    limits: {
      fileSize: parseInt(process.env.MAX_BUNDLE_SIZE_MB ?? '50', 10) * 1024 * 1024,
    },
  });

  // ── Auth decorator (populates request.user) ───────────────────
  app.decorate('authenticate', authMiddleware);

  // ── Routes ────────────────────────────────────────────────────
  await app.register(healthRoutes, { prefix: '/v1' });
  await app.register(authRoutes, { prefix: '/v1' });
  await app.register(skillRoutes, { prefix: '/v1' });
  await app.register(apiKeyRoutes, { prefix: '/v1' });
  await app.register(auditRoutes, { prefix: '/v1' });

  return app;
}

async function start() {
  try {
    await ensureBucket();
    const app = await build();
    await app.listen({ port: PORT, host: HOST });
    console.log(`🚀 OCM Registry API listening on ${HOST}:${PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
