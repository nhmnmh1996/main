(function () {
  'use strict';

  angular.module('common')
  .controller('SignUpController',SignUpController);

  SignUpController.$inject=['$rootScope'];
  function SignUpController($rootScope) {
    var $ctrl=this;
    $ctrl.users=[];
    $ctrl.submit=function () {
      $ctrl.completed=true;
      $ctrl.users.push($ctrl.user);
    }

  }
})();
