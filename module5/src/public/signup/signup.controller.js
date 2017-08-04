(function () {
  'use strict';

  angular.module('common')
  .controller('SignUpController',SignUpController);

  //SignUpController.$inject=[];
  function SignUpController() {
    var signupCtrl=this;
    signupCtrl.users=[];
    signupCtrl.submit=function () {
      signupCtrl.completed=true;
      signupCtrl.users.push(reg.user);
    }

  }
})();
