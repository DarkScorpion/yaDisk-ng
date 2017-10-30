## yDisk-ng
Example of SPA web-application on Angular1+Webpack, with oath autorization in yandex. Simple view of files in you yandex disk.

### Steps to deploy the application
* Create Yandex App with with access rights on Yandex Disk and Yandex Profile

* Install modules
  ```sh
  npm install
  ```

* Create the config.js as in the example below and fill it

* Create a frontend assembly
  ```sh
  # for develop
  npm run watch
  # for production
  npm run deploy
  ```

* Run server
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