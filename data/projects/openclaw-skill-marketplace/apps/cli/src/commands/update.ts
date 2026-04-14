import { Command } from 'commander';
import { requireConfig, loadLockfile } from '../config.js';
import { OcmApiClient } from '../api.js';
import type { SkillDetail } from '@ocm/shared';

export function updateCommand(): Command {
  return new Command('update')
    .description('Update an installed skill to the latest version')
    .argument('[slug]', 'Skill slug (omit to check all installed skills)')
    .option('--all', 'Update all installed skills')
    .option('--dry-run', 'Check for updates without installing')
    .option('--json', 'Output as JSON')
    .action(async (slug, opts) => {
      const config = requireConfig();
      const client = new OcmApiClient(config);
      const lockfile = loadLockfile();

      const slugsToCheck: string[] = slug
        ? [slug]
        : opts.all
          ? Object.keys(lockfile.skills)
          : [];

      if (slugsToCheck.length === 0) {
        console.log('Specify a <slug> or use --all to update all installed skills.');
        process.exit(0);
      }

      const updates: Array<{ slug: string; current: string; latest: string; action: string }> = [];

      for (const s of slugsToCheck) {
        const res = await client.get<SkillDetail>(`/skills/${s}`);
        if (!res.ok) {
          console.warn(`⚠  ${s}: ${res.error}`);
          continue;
        }

        const locked = lockfile.skills[s];
        const current = locked?.version ?? '(not installed)';
        const latest = res.data.latestVersion ?? current;

        if (current === latest) {
          updates.push({ slug: s, current, latest, action: 'up-to-date' });
        } else {
          updates.push({ slug: s, current, latest, action: opts.dryRun ? 'pending' : 'updating' });
        }
      }

      if (opts.json) {
        console.log(JSON.stringify(updates, null, 2));
        return;
      }

      for (const u of updates) {
        if (u.action === 'up-to-date') {
          console.log(`✅ ${u.slug} — already at ${u.current}`);
        } else if (u.action === 'pending') {
          console.log(`🔼 ${u.slug} — ${u.current} → ${u.latest} (dry-run)`);
        } else {
          // Delegate to install command
          const { execSync } = await import('child_process');
          console.log(`⬇  Updating ${u.slug}: ${u.current} → ${u.latest}…`);
          try {
            execSync(
              `oc-market install ${u.slug} --version ${u.latest} --force`,
              { stdio: 'inherit' }
            );
          } catch {
            console.error(`❌ Failed to update ${u.slug}`);
          }
        }
      }
    });
}
