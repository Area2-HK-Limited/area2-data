import { Command } from 'commander';
import { requireConfig } from '../config.js';
import { OcmApiClient } from '../api.js';
import type { PublishResponse, SkillManifest } from '@ocm/shared';
import { createHash } from 'crypto';
import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  createReadStream,
} from 'fs';
import { join, relative } from 'path';
import { execSync } from 'child_process';

export function publishCommand(): Command {
  return new Command('publish')
    .description('Pack and publish a skill to the registry')
    .argument('<path>', 'Path to the skill directory')
    .requiredOption('--version <semver>', 'Version to publish (semver, e.g. 1.0.0)')
    .option('--slug <slug>', 'Override slug (defaults to directory name)')
    .option('--changelog <text>', 'Release notes for this version')
    .option('--visibility <v>', 'private | restricted', 'private')
    .option('--json', 'Output result as JSON')
    .action(async (skillPath, opts) => {
      const config = requireConfig();

      const absPath = skillPath.startsWith('/')
        ? skillPath
        : join(process.cwd(), skillPath);

      // Validate
      if (!existsSync(absPath)) {
        console.error(`❌ Path not found: ${absPath}`);
        process.exit(1);
      }
      const skillMdPath = join(absPath, 'SKILL.md');
      if (!existsSync(skillMdPath)) {
        console.error(`❌ No SKILL.md found in ${absPath}`);
        process.exit(1);
      }

      const slug = opts.slug ?? absPath.split('/').pop()!;
      const version = opts.version;

      if (!opts.json) console.log(`📦 Packing ${slug}@${version}…`);

      // Collect files & build manifest
      const files: { path: string; sha256: string }[] = [];

      function walk(dir: string) {
        for (const entry of readdirSync(dir).sort()) {
          const full = join(dir, entry);
          const rel = relative(absPath, full);
          if (statSync(full).isDirectory()) {
            walk(full);
          } else {
            const content = readFileSync(full);
            files.push({
              path: rel,
              sha256: createHash('sha256').update(content).digest('hex'),
            });
          }
        }
      }
      walk(absPath);

      // Read summary from SKILL.md (first non-header line)
      const skillMdContent = readFileSync(skillMdPath, 'utf-8');
      const summaryLine = skillMdContent
        .split('\n')
        .find((l) => l.trim() && !l.startsWith('#'));
      const summary = summaryLine?.trim() ?? '';

      // Read tags from SKILL.md if present (look for `Tags:` line)
      const tagsMatch = skillMdContent.match(/tags?:\s*(.+)/i);
      const tags = tagsMatch
        ? tagsMatch[1].split(',').map((t) => t.trim()).filter(Boolean)
        : [];

      // Build manifest
      const manifest: Omit<SkillManifest, 'bundleSha256'> & { bundleSha256?: string } = {
        slug,
        name: slug,
        version,
        summary,
        tags,
        entry: 'SKILL.md',
        files,
        publishedAt: new Date().toISOString(),
      };

      // Create zip bundle
      const tmpZip = `/tmp/ocm-publish-${slug}-${version}.zip`;
      try {
        execSync(`cd "${absPath}" && zip -r "${tmpZip}" . -x "*.DS_Store"`, {
          stdio: 'pipe',
        });
      } catch (err) {
        console.error('❌ Failed to create zip. Ensure `zip` is installed.');
        process.exit(1);
      }

      const zipBuf = readFileSync(tmpZip);
      const bundleSha256 = createHash('sha256').update(zipBuf).digest('hex');
      manifest.bundleSha256 = bundleSha256;

      // Build FormData
      const form = new FormData();
      form.append('manifest', JSON.stringify(manifest));
      form.append('changelog', opts.changelog ?? '');
      form.append('visibility', opts.visibility);
      form.append(
        'bundle',
        new Blob([zipBuf], { type: 'application/zip' }),
        `${slug}-${version}.zip`
      );

      if (!opts.json) console.log(`⬆  Uploading ${slug}-${version}.zip (${zipBuf.length} bytes)…`);

      const client = new OcmApiClient(config);
      const res = await client.postMultipart<PublishResponse>('/skills/publish', form);

      // Clean up tmp
      try { require('fs').unlinkSync(tmpZip); } catch {}

      if (!res.ok) {
        console.error(`❌ Publish failed: ${res.error}`);
        process.exit(1);
      }

      if (opts.json) {
        console.log(JSON.stringify(res.data, null, 2));
      } else {
        console.log(`✅ Published ${slug}@${version}`);
        console.log(`   SHA-256: ${res.data.bundleSha256}`);
      }
    });
}
