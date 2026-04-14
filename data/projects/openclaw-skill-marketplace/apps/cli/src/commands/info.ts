import { Command } from 'commander';
import { requireConfig } from '../config.js';
import { OcmApiClient } from '../api.js';
import type { SkillDetail } from '@ocm/shared';

export function infoCommand(): Command {
  return new Command('info')
    .description('Show details for a skill')
    .argument('<slug>', 'Skill slug')
    .option('--json', 'Output as JSON')
    .action(async (slug, opts) => {
      const config = requireConfig();
      const client = new OcmApiClient(config);
      const res = await client.get<SkillDetail>(`/skills/${slug}`);

      if (!res.ok) {
        console.error(`❌ ${res.error}`);
        process.exit(1);
      }

      if (opts.json) {
        console.log(JSON.stringify(res.data, null, 2));
        return;
      }

      const d = res.data;
      console.log(`Name:       ${d.name}`);
      console.log(`Slug:       ${d.slug}`);
      console.log(`Latest:     ${d.latestVersion ?? '(none)'}`);
      console.log(`Summary:    ${d.summary}`);
      console.log(`Tags:       ${d.tags.join(', ') || '-'}`);
      console.log(`Visibility: ${d.visibility}`);
      console.log(`Versions:   ${d.versions.join(', ') || '-'}`);
      console.log(`Updated:    ${new Date(d.updatedAt).toLocaleString()}`);
    });
}
