import { Command } from 'commander';
import { requireConfig, loadLockfile, updateLockfileEntry } from '../config.js';
import { OcmApiClient } from '../api.js';
import type { DownloadInfo } from '@ocm/shared';
import { createHash } from 'crypto';
import { createWriteStream, mkdirSync, existsSync, readFileSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { homedir } from 'os';
import { pipeline } from 'stream/promises';
import { Readable } from 'stream';
import { execSync } from 'child_process';

export function installCommand(): Command {
  return new Command('install')
    .description('Download and install a skill to the local OpenClaw workspace')
    .argument('<slug>', 'Skill slug to install')
    .option('--version <ver>', 'Specific version (defaults to latest)')
    .option('--target <target>', 'Install target: workspace | managed', 'workspace')
    .option('--force', 'Overwrite even if local changes detected')
    .option('--json', 'Output result as JSON')
    .action(async (slug, opts) => {
      const config = requireConfig();
      const client = new OcmApiClient(config);

      // 1. Get download info (presigned URL + sha256)
      const query = opts.version
        ? `/skills/${slug}/download?version=${opts.version}`
        : `/skills/${slug}/download`;
      const res = await client.get<DownloadInfo>(query);

      if (!res.ok) {
        console.error(`❌ ${res.error}`);
        process.exit(1);
      }

      const info = res.data;

      // 2. Determine install path
      const installBase =
        opts.target === 'managed'
          ? join(homedir(), '.openclaw', 'skills')
          : config.workspacePath
            ? join(config.workspacePath, 'skills')
            : join(process.cwd(), 'skills');

      const skillDir = join(installBase, slug);

      // 3. Check for local modifications
      if (existsSync(skillDir) && !opts.force) {
        const lockfile = loadLockfile();
        const locked = lockfile.skills[slug];
        if (locked) {
          // Hash all files in the skill dir and compare
          const localHash = hashDirectory(skillDir);
          if (localHash !== locked.bundleSha256) {
            console.warn(`⚠️  Local changes detected in ${skillDir}`);
            console.warn('   Use --force to overwrite.');
            process.exit(1);
          }
        }
      }

      // 4. Download to temp
      const tmpZip = `/tmp/ocm-install-${slug}-${Date.now()}.zip`;
      if (!opts.json) console.log(`⬇  Downloading ${slug}@${info.version}…`);

      const dlRes = await fetch(info.downloadUrl);
      if (!dlRes.ok || !dlRes.body) {
        console.error(`❌ Download failed: ${dlRes.status}`);
        process.exit(1);
      }
      const chunks: Buffer[] = [];
      for await (const chunk of dlRes.body) {
        chunks.push(Buffer.from(chunk));
      }
      const zipBuf = Buffer.concat(chunks);

      // 5. Verify checksum
      const actualHash = createHash('sha256').update(zipBuf).digest('hex');
      if (actualHash !== info.bundleSha256) {
        console.error(`❌ Checksum mismatch! Expected: ${info.bundleSha256}, got: ${actualHash}`);
        process.exit(1);
      }

      // 6. Write zip and extract
      require('fs').writeFileSync(tmpZip, zipBuf);
      mkdirSync(installBase, { recursive: true });

      // Use unzip (available on most systems) — fall back to node if needed
      try {
        execSync(`unzip -o "${tmpZip}" -d "${installBase}"`, { stdio: 'pipe' });
      } catch {
        console.error('❌ Failed to extract zip. Ensure `unzip` is installed.');
        unlinkSync(tmpZip);
        process.exit(1);
      }
      unlinkSync(tmpZip);

      // 7. Update lockfile
      updateLockfileEntry(slug, {
        slug,
        version: info.version,
        installedAt: new Date().toISOString(),
        bundleSha256: info.bundleSha256,
        target: opts.target as 'workspace' | 'managed',
        registryUrl: config.registryUrl,
      });

      const result = {
        slug,
        version: info.version,
        installedTo: skillDir,
        sha256: info.bundleSha256,
      };

      if (opts.json) {
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.log(`✅ Installed ${slug}@${info.version} → ${skillDir}`);
        console.log('   Open a new OpenClaw session to activate the skill.');
      }
    });
}

/** Simple directory hash: concat all file sha256s sorted by path */
function hashDirectory(dir: string): string {
  const { readdirSync, statSync } = require('fs');
  const hash = createHash('sha256');

  function walk(d: string) {
    const entries = readdirSync(d).sort();
    for (const entry of entries) {
      const full = join(d, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
      } else {
        hash.update(entry);
        hash.update(readFileSync(full));
      }
    }
  }

  walk(dir);
  return hash.digest('hex');
}
