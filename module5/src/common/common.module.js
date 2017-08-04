(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://nhm-nmh1996.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
