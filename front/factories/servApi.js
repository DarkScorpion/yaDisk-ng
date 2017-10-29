
var apiUrl = '/api/v1';

module.exports = function($http) {
  return {

    getUserInfo: function() {
      return $http({
        method: 'GET',
        url: apiUrl + '/get-user',
      });
    },

    getDirInfo: function(path) {
      return $http({
        method: 'GET',
        url: apiUrl + '/get-dir-info',
        params: { path }
      });
    },

  }
}
