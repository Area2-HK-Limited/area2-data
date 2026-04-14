# OCM — OpenClaw 私有 Skill Registry

一個私有、內部使用嘅 Skill Registry，用嚟喺多個 OpenClaw 實例之間分享 Skills；適合同一部主機或者同一個內網環境使用。

**架構定位：** 一個 registry server（API + PostgreSQL + MinIO），供同一部 Docker 主機上嘅多個 OpenClaw containers 共用。

---

## 目前狀態

**狀態：** MVP scaffold 已建立、已 commit、已 push 去 GitHub。

- **Private repo：** <https://github.com/Area2-HK-Limited/openclaw-skill-marketplace>
- **目前階段：** scaffold / architecture baseline 已完成
- **重要：** 呢個 repo 已經可以進入 Docker 層部署工作，但**仲未喺目標 server 做完整 end-to-end smoke test**（`publish -> install -> OpenClaw new session`）

呢份 README 反映嘅係：
- **目前預期嘅部署模型**
- **目前已建立嘅 scaffold 結構**

唔代表成個 production flow 已經完全驗證完成。

---

## 快速概覽

```
OpenClaw Container A          OCM Registry（本服務）
  oc-market publish ─────────► Fastify API :3721
                                  ├── PostgreSQL（metadata）
OpenClaw Container B              └── MinIO（zip bundles）
  oc-market install ◄──────────
```

Skill 只需要發佈一次，就可以安裝到任何 OpenClaw 嘅 `skills/` 目錄。  
唔需要公開互聯網，只限內部使用。

---

## 專案結構

```
openclaw-skill-marketplace/
├── apps/
│   ├── registry-api/          # Fastify API server
│   │   ├── src/
│   │   │   ├── index.ts       # 入口
│   │   │   ├── routes/        # health, auth, skills, apiKeys, audit
│   │   │   ├── middleware/    # API key auth
│   │   │   ├── db/            # pg client, schema.sql, migrate, seed
│   │   │   └── storage/       # MinIO client
│   │   └── Dockerfile
│   └── cli/                   # oc-market CLI
│       └── src/
│           ├── index.ts       # Commander 入口
│           ├── api.ts         # HTTP client
│           ├── config.ts      # Config + lockfile
│           └── commands/      # login, logout, whoami, list, info,
│                              #   install, publish, update
├── packages/
│   └── shared/                # 共用 TypeScript types / constants
├── docs/
│   ├── API_SPEC_V1.md
│   ├── DB_SCHEMA_V1.md
│   └── MVP_TASKS.md
├── docker-compose.yml         # postgres + minio + api
├── .env.example
└── DEVELOPMENT_PLAN.md
```

---

## 部署方式（同主機 Docker）

### 前置需求
- Docker + Docker Compose v2（部署喺同 OpenClaw 一樣嘅主機上）
- Node.js 20+（只係俾 CLI 開發 / build 用，server 本身未必需要）

### 第 1 步 — 設定環境變數

```bash
cd /path/to/openclaw-skill-marketplace
cp .env.example .env
# 編輯 .env，最少要設定 POSTGRES_PASSWORD 同 MINIO_SECRET_KEY
nano .env
```

**`.env` 最少要改嘅值：**
```
POSTGRES_PASSWORD=<strong-password>
MINIO_SECRET_KEY=<strong-secret>
```

### 第 2 步 — 啟動服務

```bash
# -p ocm 會設定 compose project name，避免同 OpenClaw 衝突
docker compose -p ocm up -d
```

會啟動以下服務：

| Container | Host Port | 說明 |
|---|---|---|
| `ocm-api` | `127.0.0.1:3721` | Registry API |
| `ocm-postgres` | `127.0.0.1:5439` | PostgreSQL（可直接連） |
| `ocm-minio` | `127.0.0.1:9010` | MinIO API |
| `ocm-minio` | `127.0.0.1:9011` | MinIO Console UI |

預設全部 bind 喺 `127.0.0.1`，即係：  
**唔會直接暴露到公網。**

### 第 3 步 — 跑 Migration

```bash
docker compose -p ocm exec api node apps/registry-api/dist/db/migrate.js
```

或者喺 host 上（有 Node.js 情況下）：

```bash
DATABASE_URL=postgresql://ocm:<password>@127.0.0.1:5439/ocm \
  npm run db:migrate --workspace=apps/registry-api
```

### 第 4 步 — 建立第一個 Admin User 同 API Key

```bash
docker compose -p ocm exec api \
  node apps/registry-api/dist/db/seed.js
```

**輸出結果：** 會印出第一條 admin API key（只顯示一次，記得保存）

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔑 ADMIN API KEY（只會顯示一次，請自行保存）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ocm_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 第 5 步 — 驗證服務

```bash
curl http://127.0.0.1:3721/v1/health
# {"ok":true,"data":{"status":"ok",...}}
```

---

## OpenClaw Containers 點樣連去 Registry

由於所有服務都跑喺同一部 Docker host，上面嘅 OpenClaw containers 可以透過 **Docker bridge gateway IP** 去連 registry API。

### 方案 A — Docker Bridge IP（Linux Docker 推薦）

先搵你嘅 bridge IP：

```bash
docker network inspect bridge | grep Gateway
# "Gateway": "172.17.0.1"
```

之後喺每個 OpenClaw container 入面設定 CLI：

```bash
oc-market login \
  --api-key <KEY> \
  --registry http://172.17.0.1:3721 \
  --label vm-1-b03 \
  --workspace /home/openclaw/.openclaw/workspace
```

### 方案 B — Shared Docker Network

將 OpenClaw 同 OCM 接去同一個 Docker network：

```yaml
# 喺 OCM docker-compose.yml 入面，將 ocm-internal 改做 external:
networks:
  ocm-internal:
    external: true
    name: openclaw_default    # 對應 OpenClaw 個 network 名
```

之後喺 OpenClaw containers 入面：

```bash
oc-market login --registry http://ocm-api:3721 ...
```

### 方案 C — host.docker.internal（macOS / Docker Desktop）

```bash
oc-market login --registry http://host.docker.internal:3721 ...
```

---

## CLI 用法

### 安裝 CLI（dev mode）

```bash
cd apps/cli
npm install
npx tsx src/index.ts --help
```

### Login
```bash
oc-market login --api-key ocm_xxxxx --registry http://172.17.0.1:3721
```

### List Skills
```bash
oc-market list
oc-market list --tag qa
oc-market list --json      # 機器可讀格式
```

### Publish 一個 Skill
```bash
oc-market publish ./skills/qa-testing --version 1.0.0 --changelog "Initial release"
```

### Install 一個 Skill
```bash
# 預設安裝去 workspace skills/
oc-market install qa-testing

# 安裝去共享 ~/.openclaw/skills
oc-market install qa-testing --target managed

# 指定版本
oc-market install qa-testing --version 1.0.0
```

安裝完之後，請開一個新 OpenClaw session，skill 先會生效。

### Update Skills
```bash
oc-market update qa-testing
oc-market update --all --dry-run    # 先預覽更新
```

### 幫其他機器建立 API Keys
```bash
# 用 admin key 建一條 read-only key 俾另一部機
curl -X POST http://localhost:3721/v1/api-keys \
  -H "Authorization: Bearer <ADMIN_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"label":"vm-2-worker","scopes":["skills:read"]}'
```

---

## Skill Bundle 格式

每個發佈出去嘅 skill 會打成一個 ZIP，內容大概係：

```
my-skill/
  SKILL.md          ← 必須
  scripts/          ← 可選
  assets/           ← 可選
  references/       ← 可選
  manifest.json     ← 由 CLI 自動產生
```

`manifest.json` 係由 `oc-market publish` 自動生成，唔建議手寫。

---

## Port 參考

| 服務 | Internal Port | 預設 Host Bind | 可經 `.env` 修改 |
|---|---|---|---|
| Registry API | 3721 | `127.0.0.1:3721` | `API_PORT`, `API_HOST` |
| PostgreSQL | 5432 | `127.0.0.1:5439` | `POSTGRES_EXTERNAL_PORT` |
| MinIO API | 9000 | `127.0.0.1:9010` | `MINIO_API_PORT` |
| MinIO Console | 9001 | `127.0.0.1:9011` | `MINIO_CONSOLE_PORT` |

呢組 ports 係刻意避開常見衝突位（例如 5432、9000、3000）。

---

## 開發模式

```bash
# 安裝所有依賴
npm install

# 只起基礎設施
docker compose -p ocm up -d postgres minio

# 起 dev API server（hot reload）
DATABASE_URL=postgresql://ocm:password@127.0.0.1:5439/ocm \
MINIO_ENDPOINT=127.0.0.1 \
MINIO_PORT=9010 \
MINIO_ACCESS_KEY=minioadmin \
MINIO_SECRET_KEY=<secret> \
npm run dev:api

# 跑 CLI in dev
npm run dev:cli -- list
```

---

## 部署假設

### 已確認

1. **同機部署** — Registry 同所有目標 OpenClaw Docker containers 都喺同一部 server
2. **只供內部使用** — MVP 唔需要公開 domain
3. **獨立 compose project** — 同 OpenClaw 分開部署，避免 config / port 衝突
4. **預設 API bind = `127.0.0.1`** — 對同機私有用法最安全
5. **內部 API 暫時唔上 TLS** — 同機使用可以接受；日後擴大部署範圍先再加 reverse proxy

### 仍然屬於實作敏感位

1. **容器接駁方式** — bridge IP 定 shared external Docker network
2. **Bundle 下載方式** — 目前 scaffold 用 MinIO presigned URL；如果同機實測覺得 API proxy download 更穩，可以之後改

---

## 尚待決策事項（Eric）

| # | 問題 | 影響 | 目前預設 |
|---|---|---|---|
| 1 | CLI 名稱：`oc-market`、`ocm`，定其他？ | 影響 CLI bin / docs / examples 命名 | `oc-market` |
| 2 | 預設 install target：`workspace` 定 `managed`？ | 影響 skills 裝去 per-agent dir 定共享 `~/.openclaw/skills` | `workspace` |
| 3 | Storage：keep MinIO，定之後搬去 R2？ | 同機 MVP 用 MinIO 最簡單 | MinIO |
| 4 | 容器接法：bridge IP 定 shared Docker network？ | 影響 `--registry` 寫法同部署便利性 | Bridge IP 優先 |
| 5 | 保留 presigned URL download，定改做 API proxy download？ | 影響 MinIO 暴露假設同 CLI 複雜度 | 目前 scaffold 用 presigned URL |

---

## 下一步

完整 checklist 請睇 [`docs/MVP_TASKS.md`](docs/MVP_TASKS.md)。

### 立即可做嘅操作
1. `npm install` — 安裝 root / workspace 依賴
2. 編輯 `.env`（填 passwords / secrets）
3. `docker compose -p ocm up -d`
4. 跑 migrate + seed
5. 由 OpenClaw container 做 `oc-market login`
6. Publish 一個真實 skill，再驗證 install path

### 建議喺繼續開發前先做嘅驗證
1. 跑一次 end-to-end smoke test：`publish -> list -> info -> install`
2. 確認同機 OpenClaw container 可以穩定連到 registry
3. 確認 MinIO presigned URL flow 要唔要保留，定改做 API proxy download
4. smoke test 過咗先再擴充 API / CLI 功能
