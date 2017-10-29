
import angular from 'angular'
import uiRouter from 'angular-ui-router'

import router from './router.js'
import servApi from './factories/servApi.js'
import mainCtrl from './routes/mainCtrl/controller.js'

var app = angular.module('app', [ uiRouter ])
  .config(router)
  .factory('$servApi', servApi)
  .controller('mainCtrl', mainCtrl);
