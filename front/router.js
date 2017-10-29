
var uiRouter = function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('disk', {
      url: '/disk',
      templateUrl: getView('disk'),
      controller: getController('disk')
    })
    .state('login', {
      url: '/login',
      templateUrl: getView('login'),
      controller: getController('login')
    })
    .state('profile', {
      url: '/profile',
      templateUrl: getView('profile'),
      controller: getController('profile')
    })
    .state('settings', {
      url: '/settings',
      templateUrl: getView('settings'),
      controller: getController('settings')
    })

  //$urlRouterProvider.otherwise('/lenta');
}

function getView(name) {
  return require('./routes/' + name + '/view.html');
}

function getController(name) {
  return require('./routes/' + name + '/controller.js');
}

module.exports = uiRouter;
