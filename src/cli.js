#!/usr/bin/env node
'use strict';
import meow from 'meow';
import SaihuBot from 'saihubot/dist/core/saihubot';
import { skills } from 'saihubot/dist/skills/saihubot-diagnostics';
import { skills as searchSkills } from 'saihubot/dist/skills/saihubot-search';
import cliAdapter from './adapters/saihubot-adapter-cli';
import { addonSearch } from './addons/saihubot-addon-search-cli'
import { addonConfirm } from './addons/saihubot-addon-dialog-cli'

const cli = meow(`
	Usage
    $ sai

	Options
		--debug show debug messages

	Examples
    $ sai ping
	🤖: PONG
	$ sai npm saihubot
`, {
	flags: {
		debug: {
			type: 'boolean',
			alias: 'd'
		}
	}
});

const skill_sample = {
  name: 'today',
  help: 'today - show today selections',
  requirements: [],
  rule: /TODAY/i,
  action: function(robot, msg) {
    robot.addons.confirm('Here are samples', [
			{
				title: 'Weather',
				id: 'weather',
				rule: /WEATHER/i,
				action: () => robot.ask('g weather today'),
			},
			{
				title: 'Today in History',
				id: 'history',
				rule: /HISTORY/i,
				action: () => robot.ask('wolf today in history'),
			},
    ]);
  }
};

const bot = new SaihuBot({
	adapter: cliAdapter(cli),
    skills: [...skills, ...searchSkills, skill_sample],
	addons: [addonSearch, addonConfirm],
	bot: '🤖',
	debug: cli.flags && cli.flags.debug,
});

bot.ask(cli.input.join(' '));