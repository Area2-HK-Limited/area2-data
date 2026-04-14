/**
 * Seed script: creates the first owner user + admin API key.
 * Usage:  npx tsx src/db/seed.ts
 *
 * Outputs the generated API key to stdout — copy it to your .env / CLI config.
 */
import pg from 'pg';
import { createHash, randomBytes } from 'crypto';
import 'dotenv/config';

async function seed() {
  const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();

  const ownerName = process.env.SEED_OWNER_NAME ?? 'Eric';
  const ownerEmail = process.env.SEED_OWNER_EMAIL ?? 'admin@internal';

  // Upsert owner user
  const userRes = await client.query(
    `INSERT INTO users (name, email, role)
     VALUES ($1, $2, 'owner')
     ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name
     RETURNING id`,
    [ownerName, ownerEmail]
  );
  const userId = userRes.rows[0].id;
  console.log(`✅ Owner user: ${ownerName} (${userId})`);

  // Generate admin API key
  const rawKey = `ocm_${randomBytes(24).toString('hex')}`;
  const keyHash = createHash('sha256').update(rawKey).digest('hex');
  const keyPrefix = rawKey.slice(0, 12);

  await client.query(
    `INSERT INTO api_keys (user_id, key_prefix, key_hash, scopes, label)
     VALUES ($1, $2, $3, $4::jsonb, $5)`,
    [
      userId,
      keyPrefix,
      keyHash,
      JSON.stringify(['skills:read', 'skills:publish', 'skills:admin']),
      'admin-initial',
    ]
  );

  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🔑 ADMIN API KEY (save this — shown only once)');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(rawKey);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');
  console.log('Run:  oc-market login --api-key <KEY> --registry http://<HOST>:3721');

  await client.end();
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
