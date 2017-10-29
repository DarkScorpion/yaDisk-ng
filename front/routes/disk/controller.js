
import './style.styl'

module.exports = function($scope, $servApi) {
  
  $scope.dirInfo = '';
  $scope.itemInfo = '';

  updDirInfo('/');

  $scope.itemClick = function(index) {
    var item = $scope.dirInfo._embedded.items[index];
    if(item.type === 'dir') {
      $scope.itemInfo = '';
      updDirInfo(item.path);
    } else {
      showItemInfo(item);
    }
  }

  $scope.backPath = function() {
    updDirInfo('/');
  }

  function showItemInfo(item) {
    console.log('Show item info: %o', item);
    $scope.itemInfo = item;
  }

  function updDirInfo(path) {
    $servApi.getDirInfo(path).then( (result) => {
      console.log('Dir info: %o', result)
      $scope.dirInfo = result.data;
    })
    .catch( (err) => {
      console.warn(err);
    });
  }

}
