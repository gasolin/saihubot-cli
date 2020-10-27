# Saihubot-cli [![NPM version][npm-image]][npm-url]
:robot: Frontend Framework to build :speech_balloon: message/chat bots ops in the :globe_with_meridians: **Command Line**, no server required.

[![](https://github.com/gasolin/saihubot/workflows/lint/badge.svg)](https://github.com/gasolin/saihubot/actions?query=workflow%3Alint)

The Saihubot-cli project is derived from https://github.com/gasolin/saihubot , and can share most of skills between them.

# Try it

Install via `npm install saihu`

Then you can use `saihu` command to perform some skills

```sh
$ saihu today
- weather
- history

$ saihu google [something]
$ saihu g [something] // shortcut
$ saihu tr [word] // shortcut of googletranslate
```

# Customize

You can download the source and modify to customize your cli bot.

More skills can be found in https://github.com/gasolin/saihubot/tree/gh-pages/src/skills

## Install

```sh
$ git clone https://github.com/gasolin/saihubot-cli
$ npm install
```

## CLI

```
$ saihu --help

  Usage
    $ sai

  Options
    --name  Your name

  Examples
    $ saihubot-cli --name=Jane
    Hello, Jane
```

```
npm start ping -- --debug
```

```
npx babel-node --presets @babel/preset-env cli.js --debug ping
```


## Install globally

```sh
$ git clone https://github.com/gasolin/saihubot-cli
$ npm install && npm run build && npm install -g
$ cd ~ // cli bot can run from anywhere
$ saihu ping
PONG
$ saihu github saihubot
```

## Reference

> This readme is automatically generated by [create-ink-app](https://github.com/vadimdemedes/create-ink-app)
