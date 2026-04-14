/**
 * Run schema migrations against the configured DATABASE_URL.
 * Usage:  npx tsx src/db/migrate.ts
 *      or: npm run db:migrate (from registry-api workspace)
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';
import 'dotenv/config';

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function migrate() {
  const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();

  console.log('▶ Running OCM schema migration…');

  const sql = readFileSync(join(__dirname, 'schema.sql'), 'utf-8');
  await client.query(sql);

  console.log('✅ Migration complete');
  await client.end();
}

// Run directly
migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
