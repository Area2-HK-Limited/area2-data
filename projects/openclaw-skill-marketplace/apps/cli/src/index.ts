#!/usr/bin/env node
/**
 * oc-market — OpenClaw Private Skill Registry CLI
 * Usage: oc-market <command> [options]
 */
import { Command } from 'commander';
import { loginCommand } from './commands/login.js';
import { logoutCommand } from './commands/logout.js';
import { whoamiCommand } from './commands/whoami.js';
import { listCommand } from './commands/list.js';
import { infoCommand } from './commands/info.js';
import { installCommand } from './commands/install.js';
import { publishCommand } from './commands/publish.js';
import { updateCommand } from './commands/update.js';

const program = new Command();

program
  .name('oc-market')
  .description('OpenClaw Private Skill Registry CLI')
  .version('0.1.0');

program.addCommand(loginCommand());
program.addCommand(logoutCommand());
program.addCommand(whoamiCommand());
program.addCommand(listCommand());
program.addCommand(infoCommand());
program.addCommand(installCommand());
program.addCommand(publishCommand());
program.addCommand(updateCommand());

program.parseAsync(process.argv).catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
