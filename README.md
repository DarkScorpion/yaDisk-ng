## yDisk-ng
Example of SPA web-application on Angular1+Webpack, with oath autorization in yandex. Simple view of files in you yandex disk.

Assembly of the frontend
```sh
# for develop
npm run watch
# for production
npm run deploy
```
Run server
```sh
# for develop
npm run pm2:dev
# for production
npm run pm2
```

Structure of config.js
```js
module.exports = {
  port: 8080,
  yaPassport: {
    clientId: '<you client id>',
    secret: '<you secret>',
    callbackUrl: 'http://localhost:8080/auth/yandex/callback',
  },
  session: {
    name: 'cat1',
    resave: false,
    secret: 'session cat',
    saveUninitialized: false,
  },
}

```