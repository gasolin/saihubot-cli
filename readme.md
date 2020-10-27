# saihubot-cli

https://github.com/gasolin/saihubot


## Install

```sh
$ git clone https://github.com/gasolin/saihubot-cli
$ npm install
```

## CLI

```
$ sai --help

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
$ sai ping
PONG
$ sai github saihubot
```

## Reference

> This readme is automatically generated by [create-ink-app](https://github.com/vadimdemedes/create-ink-app)