# API Spec v1 — OCM Private Skill Registry

**Base URL:** `http://<HOST>:3721/v1`  
**Auth:** All endpoints (except `/health`) require `Authorization: Bearer <API_KEY>`

---

## Authentication

### `GET /v1/health`
Public. No auth required.

**Response 200:**
```json
{
  "ok": true,
  "data": { "status": "ok", "version": "0.1.0", "timestamp": "2026-03-16T10:00:00Z" }
}
```

---

### `GET /v1/me`
Returns identity of the current API key.

**Response 200:**
```json
{
  "ok": true,
  "data": {
    "userId": "uuid",
    "name": "Eric",
    "role": "owner",
    "scopes": ["skills:read", "skills:publish", "skills:admin"],
    "keyPrefix": "ocm_a1b2c3d4",
    "label": "admin-initial"
  }
}
```

---

## Skills

### `GET /v1/skills`
List all visible skills. Scope: `skills:read`

**Query params:**
| Param | Type | Description |
|---|---|---|
| `tag` | string | Filter by tag |
| `limit` | number | Max results (default 50) |
| `offset` | number | Pagination offset |

**Response 200:**
```json
{
  "ok": true,
  "data": [
    {
      "slug": "qa-testing",
      "name": "qa-testing",
      "summary": "網站 QA 測試 skill",
      "latestVersion": "1.4.2",
      "tags": ["qa", "tester"],
      "updatedAt": "2026-03-15T14:00:00Z"
    }
  ]
}
```

---

### `GET /v1/skills/:slug`
Get skill details + version list. Scope: `skills:read`

**Response 200:**
```json
{
  "ok": true,
  "data": {
    "id": "uuid",
    "slug": "qa-testing",
    "name": "qa-testing",
    "summary": "...",
    "latestVersion": "1.4.2",
    "tags": ["qa"],
    "visibility": "private",
    "versions": ["1.4.2", "1.4.1", "1.0.0"],
    "updatedAt": "...",
    "createdAt": "..."
  }
}
```

---

### `GET /v1/skills/:slug/versions`
List all versions for a skill. Scope: `skills:read`

---

### `GET /v1/skills/:slug/download`
Get presigned download URL for a skill bundle. Scope: `skills:read`

**Query params:**
| Param | Type | Description |
|---|---|---|
| `version` | string | Specific version (defaults to latest) |

**Response 200:**
```json
{
  "ok": true,
  "data": {
    "slug": "qa-testing",
    "version": "1.4.2",
    "downloadUrl": "http://minio:9000/ocm-skills/skills/qa-testing/1.4.2/qa-testing-1.4.2.zip?X-Amz-...",
    "bundleSha256": "abc123...",
    "bundleSize": 12345,
    "expiresAt": "2026-03-16T11:00:00Z"
  }
}
```

---

### `POST /v1/skills/publish`
Publish a new skill or new version. Scope: `skills:publish`

**Request:** `multipart/form-data`
| Field | Type | Required | Description |
|---|---|---|---|
| `bundle` | file | ✓ | ZIP containing skill directory |
| `manifest` | string (JSON) | ✓ | SkillManifest JSON |
| `changelog` | string | | Release notes |
| `visibility` | string | | `private` \| `restricted` (default: private) |

**Response 201:**
```json
{
  "ok": true,
  "data": {
    "skillId": "uuid",
    "versionId": "uuid",
    "slug": "qa-testing",
    "version": "1.4.2",
    "bundleSha256": "abc123..."
  }
}
```

**Error 409:** Version already exists — bump version number.

---

## API Keys (Admin)

### `GET /v1/api-keys`
List all API keys. Scope: `skills:admin`

### `POST /v1/api-keys`
Create a new API key. Scope: `skills:admin`

**Body:**
```json
{
  "label": "vm-1-b03",
  "scopes": ["skills:read"],
  "userId": "uuid (optional, defaults to current user)",
  "expiresAt": "2027-01-01T00:00:00Z (optional)"
}
```

**Response 201:**
```json
{
  "ok": true,
  "data": {
    "id": "uuid",
    "apiKey": "ocm_a1b2c3d4e5f6...",
    "keyPrefix": "ocm_a1b2c3d4",
    "scopes": ["skills:read"],
    "label": "vm-1-b03",
    "warning": "Store this key securely — it will NOT be shown again."
  }
}
```

### `POST /v1/api-keys/:id/revoke`
Revoke an API key immediately. Scope: `skills:admin`

---

## Audit Logs (Admin)

### `GET /v1/audit`
All audit log entries. Scope: `skills:admin`

**Query params:** `action`, `limit`, `offset`

### `GET /v1/audit/publish`
Publish-action audit log. Scope: `skills:admin`

---

## Error Format

All errors follow:
```json
{
  "ok": false,
  "error": "Human-readable message",
  "code": "OPTIONAL_ERROR_CODE"
}
```

| HTTP Status | Meaning |
|---|---|
| 400 | Bad request / validation error |
| 401 | Missing or invalid API key |
| 403 | Insufficient scope |
| 404 | Resource not found |
| 409 | Conflict (e.g. version already exists) |
| 429 | Rate limit exceeded |
| 500 | Internal server error |

---

## Scopes

| Scope | Description |
|---|---|
| `skills:read` | List, view, download skills |
| `skills:publish` | Publish new skills/versions (implies read) |
| `skills:admin` | Manage API keys, view audit logs (implies all) |
