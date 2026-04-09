import * as Minio from 'minio';

if (!process.env.MINIO_ENDPOINT) {
  throw new Error('MINIO_ENDPOINT environment variable is required');
}

export const storage = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT,
  port: parseInt(process.env.MINIO_PORT ?? '9000', 10),
  useSSL: process.env.MINIO_USE_SSL === 'true',
  accessKey: process.env.MINIO_ACCESS_KEY ?? 'minioadmin',
  secretKey: process.env.MINIO_SECRET_KEY ?? 'minioadmin',
});

const BUCKET = process.env.MINIO_BUCKET ?? 'ocm-skills';

/**
 * Ensure the bucket exists on startup — call once at app init.
 */
export async function ensureBucket() {
  const exists = await storage.bucketExists(BUCKET);
  if (!exists) {
    await storage.makeBucket(BUCKET, 'us-east-1');
    console.log(`✅ Created MinIO bucket: ${BUCKET}`);
  }
}
