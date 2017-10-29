
module.exports = function($scope, $servApi, $location, $state) {

  $scope.uName = '???';
  var loginPath = '/login';
  if($location.path() != loginPath) {
    $servApi.getUserInfo()
      .then( (res) => {
        //console.log('Main controller: %o', res);
        if(res.data.error) {
          $state.go('login');
        } else {
          $scope.uName = res.data.display_name;
        }

      })
      .catch( (err) => {
        console.log('MainCtrl error: %s', err);
      } );

  }
}

