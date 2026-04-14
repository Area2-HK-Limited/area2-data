import { Command } from 'commander';
import { requireConfig } from '../config.js';
import { OcmApiClient } from '../api.js';
import type { WhoamiResponse } from '@ocm/shared';

export function whoamiCommand(): Command {
  return new Command('whoami')
    .description('Show current API key identity')
    .option('--json', 'Output as JSON')
    .action(async (opts) => {
      const config = requireConfig();
      const client = new OcmApiClient(config);
      const res = await client.get<WhoamiResponse>('/me');

      if (!res.ok) {
        console.error(`❌ ${res.error}`);
        process.exit(1);
      }

      if (opts.json) {
        console.log(JSON.stringify(res.data, null, 2));
        return;
      }

      const d = res.data;
      console.log(`User:     ${d.name}`);
      console.log(`Role:     ${d.role}`);
      console.log(`Scopes:   ${d.scopes.join(', ')}`);
      console.log(`KeyLabel: ${d.label}`);
      console.log(`Registry: ${config.registryUrl}`);
    });
}
