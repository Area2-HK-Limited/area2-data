import { Command } from 'commander';
import { clearConfig } from '../config.js';

export function logoutCommand(): Command {
  return new Command('logout')
    .description('Remove saved API key and registry config')
    .action(() => {
      clearConfig();
      console.log('✅ Logged out. Config cleared.');
    });
}
