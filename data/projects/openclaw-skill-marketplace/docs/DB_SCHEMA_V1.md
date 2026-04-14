# DB Schema v1 — OCM Private Skill Registry

**Database:** PostgreSQL 16  
**Schema file:** `apps/registry-api/src/db/schema.sql`

---

## Tables

### `users`
Represents a person or service account who owns API keys.

| Column | Type | Notes |
|---|---|---|
| `id` | UUID PK | `gen_random_uuid()` |
| `name` | TEXT | Display name |
| `email` | TEXT UNIQUE | Optional |
| `role` | TEXT | `owner` \| `admin` \| `member` |
| `created_at` | TIMESTAMPTZ | Auto |

---

### `api_keys`
Each machine / OpenClaw instance has its own key.

| Column | Type | Notes |
|---|---|---|
| `id` | UUID PK | |
| `user_id` | UUID FK → users | |
| `key_prefix` | TEXT | First 12 chars (display only) |
| `key_hash` | TEXT UNIQUE | SHA-256 of raw key |
| `scopes` | JSONB | e.g. `["skills:read"]` |
| `label` | TEXT | e.g. `"vm-1-b03"` |
| `expires_at` | TIMESTAMPTZ | Nullable |
| `last_used_at` | TIMESTAMPTZ | Updated on each auth |
| `revoked_at` | TIMESTAMPTZ | Set on revoke |
| `created_at` | TIMESTAMPTZ | Auto |

**Note:** Raw API key is never stored. Only SHA-256 hash is kept.

---

### `skills`
One row per unique skill slug.

| Column | Type | Notes |
|---|---|---|
| `id` | UUID PK | |
| `slug` | TEXT UNIQUE | e.g. `qa-testing` |
| `name` | TEXT | Display name |
| `summary` | TEXT | One-line description |
| `owner_user_id` | UUID FK → users | |
| `visibility` | TEXT | `private` \| `restricted` |
| `tags` | JSONB | Array of strings, GIN indexed |
| `latest_version` | TEXT | Denormalized for fast list |
| `created_at` | TIMESTAMPTZ | Auto |
| `updated_at` | TIMESTAMPTZ | Auto-updated on publish |

---

### `skill_versions`
One row per (skill, semver) pair. Immutable after publish.

| Column | Type | Notes |
|---|---|---|
| `id` | UUID PK | |
| `skill_id` | UUID FK → skills | |
| `version` | TEXT | semver e.g. `1.4.2` |
| `manifest_json` | JSONB | Full SkillManifest |
| `changelog` | TEXT | Release notes |
| `bundle_path` | TEXT | MinIO object key |
| `bundle_sha256` | TEXT | SHA-256 of zip |
| `bundle_size` | BIGINT | Bytes |
| `signature` | TEXT | Phase 2: Ed25519 |
| `published_by` | UUID FK → users | |
| `published_at` | TIMESTAMPTZ | Auto |
| UNIQUE | (skill_id, version) | No duplicate versions |

---

### `skill_permissions`
Fine-grained allowlist for restricted skills.

| Column | Type | Notes |
|---|---|---|
| `id` | UUID PK | |
| `skill_id` | UUID FK → skills | |
| `principal_type` | TEXT | `user` \| `machine` |
| `principal_id` | TEXT | userId or machine label |
| `can_read` | BOOLEAN | Default true |
| `can_publish` | BOOLEAN | Default false |

---

### `install_events`
Tracks which skills were installed on which machines.

| Column | Type | Notes |
|---|---|---|
| `id` | UUID PK | |
| `skill_id` | UUID FK → skills | |
| `version` | TEXT | Version installed |
| `installed_by` | UUID FK → users | |
| `machine_label` | TEXT | Optional label |
| `installed_at` | TIMESTAMPTZ | Auto |

---

### `audit_logs`
Append-only log of all significant actions.

| Column | Type | Notes |
|---|---|---|
| `id` | UUID PK | |
| `actor_id` | UUID FK → users | Nullable (system actions) |
| `action` | TEXT | `publish` \| `install` \| `update` \| `delete` \| `revoke` \| `login` |
| `target_type` | TEXT | `skill` \| `api_key` \| `version` |
| `target_id` | TEXT | UUID or slug of target |
| `metadata` | JSONB | Action-specific details |
| `created_at` | TIMESTAMPTZ | Auto |

---

## Indexes

| Table | Column(s) | Type | Purpose |
|---|---|---|---|
| api_keys | key_hash | BTREE | Auth lookup (hot path) |
| api_keys | user_id | BTREE | Keys by user |
| skills | slug | BTREE | Skill lookup by slug |
| skills | tags | GIN | Tag filter queries |
| skill_versions | skill_id | BTREE | Versions by skill |
| skill_versions | (skill_id, version) | UNIQUE | Deduplicate |
| install_events | skill_id | BTREE | Install history |
| audit_logs | actor_id | BTREE | Audit by user |
| audit_logs | action | BTREE | Audit by action type |
| audit_logs | created_at DESC | BTREE | Chronological queries |

---

## Conventions

- All PKs are UUID, generated with `gen_random_uuid()` (requires `pgcrypto` extension)
- All timestamps are `TIMESTAMPTZ` (stored in UTC)
- JSONB columns use `::jsonb` cast on insert
- Schema is idempotent (`CREATE TABLE IF NOT EXISTS`)
- Run migrations: `npm run db:migrate --workspace=apps/registry-api`
