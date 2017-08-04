(function () {
  'use strict';

  angular.module('common')
  .controller('SignUpController',SignUpController);

  SignUpController.$inject=['$rootScope'];
  function SignUpController($rootScope) {
    var $signupCtrl=this;
    $signupCtrl.users=[];
    $signupCtrl.submit=function () {
      $signupCtrl.completed=true;
      $signupCtrl.users.push($signupCtrl.user);
    }

  }
})();
