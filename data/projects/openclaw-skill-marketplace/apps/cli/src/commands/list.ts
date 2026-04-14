import { Command } from 'commander';
import { requireConfig } from '../config.js';
import { OcmApiClient } from '../api.js';
import type { SkillListItem } from '@ocm/shared';

export function listCommand(): Command {
  return new Command('list')
    .description('List available skills in the registry')
    .option('--tag <tag>', 'Filter by tag')
    .option('--json', 'Output as JSON')
    .action(async (opts) => {
      const config = requireConfig();
      const client = new OcmApiClient(config);

      const query = opts.tag ? `/skills?tag=${encodeURIComponent(opts.tag)}` : '/skills';
      const res = await client.get<SkillListItem[]>(query);

      if (!res.ok) {
        console.error(`❌ ${res.error}`);
        process.exit(1);
      }

      if (opts.json) {
        console.log(JSON.stringify(res.data, null, 2));
        return;
      }

      if (res.data.length === 0) {
        console.log('No skills found in registry.');
        return;
      }

      // Table output
      const slugW = Math.max(4, ...res.data.map((s) => s.slug.length));
      const verW = Math.max(7, ...res.data.map((s) => (s.latestVersion ?? '-').length));
      const tagW = Math.max(4, ...res.data.map((s) => s.tags.join(',').length));

      const pad = (s: string, n: number) => s.padEnd(n, ' ');
      console.log(
        `${pad('SLUG', slugW)}  ${pad('VERSION', verW)}  ${pad('TAGS', tagW)}  UPDATED`
      );
      console.log('─'.repeat(slugW + verW + tagW + 28));

      for (const skill of res.data) {
        const updated = new Date(skill.updatedAt).toLocaleDateString('en-CA');
        console.log(
          `${pad(skill.slug, slugW)}  ${pad(skill.latestVersion ?? '-', verW)}  ${pad(skill.tags.join(','), tagW)}  ${updated}`
        );
      }
    });
}
