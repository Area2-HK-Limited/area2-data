# MVP Tasks — OCM Private Skill Registry

Phase 1 開發任務清單（基於 DEVELOPMENT_PLAN.md Phase 1–3）

---

## ✅ Phase 0 — Scaffold（已完成）

- [x] Monorepo structure (npm workspaces)
- [x] `packages/shared` — TypeScript types & constants
- [x] `apps/registry-api` — Fastify API scaffold
- [x] `apps/cli` — Commander CLI scaffold
- [x] `docker-compose.yml` — postgres + minio + api
- [x] `.env.example`
- [x] `apps/registry-api/Dockerfile`
- [x] `docs/API_SPEC_V1.md`
- [x] `docs/DB_SCHEMA_V1.md`
- [x] `apps/registry-api/src/db/schema.sql`
- [x] `apps/registry-api/src/db/migrate.ts`
- [x] `apps/registry-api/src/db/seed.ts`

---

## 🔲 Phase 1 — Backend Complete & Testable

### 1.1 Dev Environment
- [ ] `npm install` — install all deps
- [ ] `docker compose -p ocm up -d postgres minio` — start infra
- [ ] `npm run db:migrate` — apply schema
- [ ] `npm run db:seed` — create owner + first admin key
- [ ] `npm run dev:api` — start API in dev mode
- [ ] Verify `GET /v1/health` returns 200

### 1.2 Auth & Key Management
- [ ] Test `POST /v1/api-keys` — create read-only key
- [ ] Test `GET /v1/me` with new key
- [ ] Test `POST /v1/api-keys/:id/revoke`
- [ ] Verify revoked key returns 401

### 1.3 Skill Publish
- [ ] Test `POST /v1/skills/publish` with real skill zip
- [ ] Verify file appears in MinIO bucket
- [ ] Verify skill appears in `GET /v1/skills`
- [ ] Verify version appears in `GET /v1/skills/:slug/versions`

### 1.4 Download
- [ ] Test `GET /v1/skills/:slug/download`
- [ ] Verify presigned URL works and file downloads correctly
- [ ] Verify SHA-256 matches

---

## 🔲 Phase 2 — CLI End-to-End

### 2.1 Build CLI
- [ ] `npm run build --workspace=apps/cli`
- [ ] `npm link` or `npx tsx apps/cli/src/index.ts` for dev

### 2.2 Login & Auth
- [ ] `oc-market login --api-key <KEY> --registry http://localhost:3721`
- [ ] `oc-market whoami` — verify identity shown

### 2.3 List & Info
- [ ] `oc-market list` — shows table
- [ ] `oc-market list --json` — machine-parseable
- [ ] `oc-market info <slug>` — shows detail
- [ ] `oc-market info <slug> --json`

### 2.4 Publish
- [ ] `oc-market publish ./path/to/skill --version 1.0.0`
- [ ] Verify skill appears in `oc-market list`

### 2.5 Install
- [ ] `oc-market install <slug> --workspace /path/to/workspace`
- [ ] Verify skill appears in `skills/` directory
- [ ] Verify SHA-256 validated
- [ ] Open new OpenClaw session, confirm skill available

### 2.6 Update
- [ ] Publish version 1.0.1
- [ ] `oc-market update <slug>` — installs new version
- [ ] Verify lockfile updated

---

## 🔲 Phase 3 — Security & Hardening

- [ ] lockfile: detect local modifications, warn before overwrite
- [ ] install_events table: log each install
- [ ] Audit log: verify publish/revoke events appear in `GET /v1/audit`
- [ ] Rate limiting: test 200 req/min limit
- [ ] Bundle size limit: test rejection of oversized zip
- [ ] Verify `POSTGRES_PASSWORD` / `MINIO_SECRET_KEY` not hardcoded anywhere

---

## 🔲 Phase 4 — Multi-Machine Deployment

- [ ] Deploy to Tencent Lighthouse Docker host:
  - `scp .env docker-compose.yml` to server
  - `docker compose -p ocm up -d`
  - `docker compose -p ocm exec api npm run db:migrate`
  - `docker compose -p ocm exec api npm run db:seed`
- [ ] From another OpenClaw container, test `oc-market login --registry http://172.17.0.1:3721`
- [ ] Publish a skill from container A, install in container B
- [ ] Full flow: publish → list → info → install → new session → skill works

---

## 🔲 Phase 5 (Future / Optional)

- [ ] Web Admin UI (Nuxt)
- [ ] Ed25519 bundle signature
- [ ] `skill_permissions` allowlist enforcement
- [ ] `oc-market verify <slug>` — post-install checksum check
- [ ] `oc-market remove <slug>` — uninstall and update lockfile
- [ ] Tag search in API + CLI
- [ ] Rollback to previous version
- [ ] Install statistics dashboard

---

## Acceptance Criteria (MVP Done When)

1. ✅ `oc-market login` succeeds with valid key
2. ✅ `oc-market publish ./my-skill --version 1.0.0` uploads to registry
3. ✅ Another machine can `oc-market list` and see the skill
4. ✅ `oc-market install my-skill` downloads, verifies sha256, extracts to `skills/`
5. ✅ New OpenClaw session picks up the installed skill
6. ✅ `oc-market update my-skill` installs newer version
7. ✅ Revoked API key returns 401 on next request
8. ✅ publish/install/revoke events appear in audit log
