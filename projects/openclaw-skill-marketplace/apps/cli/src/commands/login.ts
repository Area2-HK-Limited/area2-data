import { Command } from 'commander';
import { saveConfig, loadConfig } from '../config.js';
import { OcmApiClient } from '../api.js';
import type { WhoamiResponse } from '@ocm/shared';
import { DEFAULT_REGISTRY_URL } from '@ocm/shared';

export function loginCommand(): Command {
  return new Command('login')
    .description('Authenticate with the OCM registry using an API key')
    .requiredOption('--api-key <key>', 'API key (e.g. ocm_xxxxxxxx)')
    .option('--registry <url>', 'Registry URL', DEFAULT_REGISTRY_URL)
    .option('--label <label>', 'Label for this machine (e.g. vm-1-b03)')
    .option('--workspace <path>', 'Path to OpenClaw workspace skills/ directory')
    .action(async (opts) => {
      const config = {
        apiKey: opts.apiKey,
        registryUrl: opts.registry,
        machineLabel: opts.label,
        workspacePath: opts.workspace,
      };

      // Verify by calling /v1/me
      const client = new OcmApiClient(config);
      const res = await client.get<WhoamiResponse>('/me');

      if (!res.ok) {
        console.error(`❌ Login failed: ${res.error}`);
        process.exit(1);
      }

      saveConfig(config);
      console.log(`✅ Logged in as ${res.data.name} (${res.data.role})`);
      console.log(`   Registry: ${opts.registry}`);
      console.log(`   Scopes:   ${res.data.scopes.join(', ')}`);
    });
}
