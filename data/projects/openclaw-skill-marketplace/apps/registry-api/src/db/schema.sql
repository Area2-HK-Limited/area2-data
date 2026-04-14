-- ============================================================
-- OCM Registry — PostgreSQL Schema v1
-- Run: psql $DATABASE_URL -f schema.sql
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ── users ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  email       TEXT UNIQUE,
  role        TEXT NOT NULL DEFAULT 'member'
                CHECK (role IN ('owner', 'admin', 'member')),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── api_keys ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS api_keys (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  key_prefix    TEXT NOT NULL,          -- e.g. "ocm_a1b2c3d4"
  key_hash      TEXT NOT NULL UNIQUE,   -- SHA-256 of raw key
  scopes        JSONB NOT NULL DEFAULT '["skills:read"]',
  label         TEXT NOT NULL,          -- e.g. "mac-mini-office"
  expires_at    TIMESTAMPTZ,
  last_used_at  TIMESTAMPTZ,
  revoked_at    TIMESTAMPTZ,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_api_keys_hash ON api_keys(key_hash);
CREATE INDEX IF NOT EXISTS idx_api_keys_user ON api_keys(user_id);

-- ── skills ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS skills (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            TEXT NOT NULL UNIQUE,
  name            TEXT NOT NULL,
  summary         TEXT NOT NULL DEFAULT '',
  owner_user_id   UUID NOT NULL REFERENCES users(id),
  visibility      TEXT NOT NULL DEFAULT 'private'
                    CHECK (visibility IN ('private', 'restricted')),
  tags            JSONB NOT NULL DEFAULT '[]',
  latest_version  TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_skills_slug ON skills(slug);
CREATE INDEX IF NOT EXISTS idx_skills_tags ON skills USING GIN(tags);

-- ── skill_versions ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS skill_versions (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  skill_id      UUID NOT NULL REFERENCES skills(id) ON DELETE CASCADE,
  version       TEXT NOT NULL,
  manifest_json JSONB NOT NULL,
  changelog     TEXT,
  bundle_path   TEXT NOT NULL,          -- MinIO object key
  bundle_sha256 TEXT NOT NULL,
  bundle_size   BIGINT NOT NULL DEFAULT 0,
  signature     TEXT,                   -- Phase 2: Ed25519
  published_by  UUID NOT NULL REFERENCES users(id),
  published_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (skill_id, version)
);

CREATE INDEX IF NOT EXISTS idx_sv_skill_id ON skill_versions(skill_id);
CREATE INDEX IF NOT EXISTS idx_sv_version  ON skill_versions(skill_id, version);

-- ── skill_permissions ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS skill_permissions (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  skill_id       UUID NOT NULL REFERENCES skills(id) ON DELETE CASCADE,
  principal_type TEXT NOT NULL CHECK (principal_type IN ('user', 'machine')),
  principal_id   TEXT NOT NULL,
  can_read       BOOLEAN NOT NULL DEFAULT true,
  can_publish    BOOLEAN NOT NULL DEFAULT false,
  UNIQUE (skill_id, principal_type, principal_id)
);

-- ── install_events ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS install_events (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  skill_id      UUID NOT NULL REFERENCES skills(id),
  version       TEXT NOT NULL,
  installed_by  UUID NOT NULL REFERENCES users(id),
  machine_label TEXT,
  installed_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ie_skill_id ON install_events(skill_id);

-- ── audit_logs ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS audit_logs (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id    UUID REFERENCES users(id),
  action      TEXT NOT NULL
                CHECK (action IN ('publish','install','update','delete','revoke','login')),
  target_type TEXT NOT NULL
                CHECK (target_type IN ('skill','api_key','version')),
  target_id   TEXT NOT NULL,
  metadata    JSONB NOT NULL DEFAULT '{}',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_al_actor   ON audit_logs(actor_id);
CREATE INDEX IF NOT EXISTS idx_al_action  ON audit_logs(action);
CREATE INDEX IF NOT EXISTS idx_al_created ON audit_logs(created_at DESC);
