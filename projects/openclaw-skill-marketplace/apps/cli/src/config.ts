/**
 * CLI config & lockfile management.
 * Config stored at: ~/.config/oc-market/config.json
 * Lockfile stored at: <workspace>/oc-market.lock.json
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';
import type { CliConfig, Lockfile, LockfileEntry } from '@ocm/shared';
import { CONFIG_DIR, CONFIG_FILE, LOCKFILE_NAME, DEFAULT_REGISTRY_URL } from '@ocm/shared';

// ── Config ─────────────────────────────────────────────────────

const configDir = join(homedir(), CONFIG_DIR);
const configPath = join(configDir, CONFIG_FILE);

export function loadConfig(): CliConfig | null {
  if (!existsSync(configPath)) return null;
  try {
    return JSON.parse(readFileSync(configPath, 'utf-8')) as CliConfig;
  } catch {
    return null;
  }
}

export function saveConfig(config: CliConfig): void {
  mkdirSync(configDir, { recursive: true });
  writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8');
}

export function clearConfig(): void {
  if (existsSync(configPath)) {
    writeFileSync(configPath, '{}', 'utf-8');
  }
}

export function requireConfig(): CliConfig {
  const config = loadConfig();
  if (!config?.apiKey || !config?.registryUrl) {
    console.error('❌ Not logged in. Run: oc-market login --api-key <KEY> --registry <URL>');
    process.exit(1);
  }
  return config;
}

// ── Lockfile ────────────────────────────────────────────────────

export function getLockfilePath(): string {
  const cfg = loadConfig();
  const workspacePath = cfg?.workspacePath ?? process.cwd();
  return join(workspacePath, LOCKFILE_NAME);
}

export function loadLockfile(): Lockfile {
  const path = getLockfilePath();
  if (!existsSync(path)) {
    return {
      version: 1,
      registry: loadConfig()?.registryUrl ?? DEFAULT_REGISTRY_URL,
      skills: {},
    };
  }
  try {
    return JSON.parse(readFileSync(path, 'utf-8')) as Lockfile;
  } catch {
    return { version: 1, registry: '', skills: {} };
  }
}

export function saveLockfile(lockfile: Lockfile): void {
  writeFileSync(getLockfilePath(), JSON.stringify(lockfile, null, 2), 'utf-8');
}

export function updateLockfileEntry(slug: string, entry: LockfileEntry): void {
  const lockfile = loadLockfile();
  lockfile.skills[slug] = entry;
  saveLockfile(lockfile);
}
