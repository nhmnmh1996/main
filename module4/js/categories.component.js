(function () {
  'use strict';
  angular.module('data')
  .component('listCategories',{
    templateUrl:'cate.template.html',
    controller: CateCompController,
    bindings:{
      cates:'<'
    }
  });
  CateCompController.$inject=['$rootScope'];
  function CateCompController($rootScope) {
    var $ctrl=this;

    $rootScope.$on('listCategories:processing',function (event,data) {
      console.log("Event:",event);
      console.log("Data:",data);
      // if(data.on){
      //   $ctrl.showSniper
      // }
    });
  };

})();
