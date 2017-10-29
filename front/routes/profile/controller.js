
module.exports = function($scope, $servApi) {
  
  $scope.userInfo = '';

  updUserInfo();

  function updUserInfo() {
    $servApi.getUserInfo()
      .then( (res) => {
        $scope.userInfo = res.data;
      })
      .catch( (err) => {
        console.log('MainCtrl error: %s', err);
      });
  }
}
