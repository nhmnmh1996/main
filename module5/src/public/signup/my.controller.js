(function () {
  'use strict';

  angular.module('public')
  .controller('MyController',MyController);

MyController.$inject=['MenuService','ApiPath']
  function MyController(MenuService,ApiPath) {
    var $ctrl=this;
    $ctrl.users=MenuService.getMy();
    //$ctrl.short=MenuService.getShort();
    $ctrl.basePath = ApiPath;

    //console.log($ctrl.users);
  }
})();
