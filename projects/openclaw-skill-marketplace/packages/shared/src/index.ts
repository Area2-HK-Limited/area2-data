// ============================================================
// @ocm/shared — Shared Types, Schemas & Constants
// Used by both registry-api and cli
// ============================================================

// ---- Skill ----

export interface Skill {
  id: string;
  slug: string;
  name: string;
  summary: string;
  ownerUserId: string;
  visibility: SkillVisibility;
  tags: string[];
  latestVersion: string | null;
  createdAt: string;
  updatedAt: string;
}

export type SkillVisibility = 'private' | 'restricted';

// ---- Skill Version ----

export interface SkillVersion {
  id: string;
  skillId: string;
  version: string;
  manifestJson: SkillManifest;
  changelog: string | null;
  bundlePath: string;
  bundleSha256: string;
  bundleSize: number;
  publishedBy: string;
  publishedAt: string;
}

// ---- Skill Manifest (embedded in bundle zip) ----

export interface SkillManifest {
  slug: string;
  name: string;
  version: string;
  summary: string;
  tags: string[];
  entry: string;
  files: ManifestFile[];
  bundleSha256: string;
  requires?: SkillRequires;
  homepage?: string;
  publishedAt: string;
}

export interface ManifestFile {
  path: string;
  sha256: string;
}

export interface SkillRequires {
  bins?: string[];
  env?: string[];
}

// ---- API Key ----

export interface ApiKey {
  id: string;
  userId: string;
  keyPrefix: string;
  scopes: ApiKeyScope[];
  label: string;
  expiresAt: string | null;
  lastUsedAt: string | null;
  revokedAt: string | null;
  createdAt: string;
}

export type ApiKeyScope = 'skills:read' | 'skills:publish' | 'skills:admin';

// ---- User / Auth ----

export interface User {
  id: string;
  name: string;
  email: string | null;
  role: UserRole;
  createdAt: string;
}

export type UserRole = 'owner' | 'admin' | 'member';

export interface WhoamiResponse {
  userId: string;
  name: string;
  role: UserRole;
  scopes: ApiKeyScope[];
  keyPrefix: string;
  label: string;
}

// ---- Audit Log ----

export interface AuditLog {
  id: string;
  actorId: string;
  action: AuditAction;
  targetType: AuditTargetType;
  targetId: string;
  metadata: Record<string, unknown>;
  createdAt: string;
}

export type AuditAction = 'publish' | 'install' | 'update' | 'delete' | 'revoke' | 'login';
export type AuditTargetType = 'skill' | 'api_key' | 'version';

// ---- Install Event ----

export interface InstallEvent {
  id: string;
  skillId: string;
  version: string;
  installedBy: string;
  machineLabel: string | null;
  installedAt: string;
}

// ---- API Response Types ----

export interface ApiSuccessResponse<T> {
  ok: true;
  data: T;
}

export interface ApiErrorResponse {
  ok: false;
  error: string;
  code?: string;
  details?: unknown;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

// ---- API Request / Response DTOs ----

export interface SkillListItem {
  slug: string;
  name: string;
  summary: string;
  latestVersion: string | null;
  tags: string[];
  updatedAt: string;
}

export interface SkillDetail extends SkillListItem {
  id: string;
  visibility: SkillVisibility;
  versions: string[];
  createdAt: string;
}

export interface PublishRequest {
  slug: string;
  version: string;
  changelog?: string;
  visibility?: SkillVisibility;
  // bundle is sent as multipart file
}

export interface PublishResponse {
  skillId: string;
  versionId: string;
  slug: string;
  version: string;
  bundleSha256: string;
}

export interface DownloadInfo {
  slug: string;
  version: string;
  downloadUrl: string;
  bundleSha256: string;
  bundleSize: number;
  expiresAt: string;
}

// ---- Lockfile (local CLI state) ----

export interface LockfileEntry {
  slug: string;
  version: string;
  installedAt: string;
  bundleSha256: string;
  target: InstallTarget;
  registryUrl: string;
}

export interface Lockfile {
  version: 1;
  registry: string;
  skills: Record<string, LockfileEntry>;
}

export type InstallTarget = 'workspace' | 'managed';

// ---- CLI Config (local) ----

export interface CliConfig {
  apiKey: string;
  registryUrl: string;
  defaultTarget?: InstallTarget;
  machineLabel?: string;
  workspacePath?: string;
}

// ---- Constants ----

export const API_VERSION = 'v1' as const;
export const DEFAULT_REGISTRY_URL = 'http://localhost:3000' as const;
export const OCM_KEY_PREFIX = 'ocm_' as const;
export const LOCKFILE_NAME = 'oc-market.lock.json' as const;
export const CONFIG_DIR = '.config/oc-market' as const;
export const CONFIG_FILE = 'config.json' as const;
