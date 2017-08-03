(function () {
  'use strict';
  angular.module('data')
  .component('listItems',{
    templateUrl:'items.template.html',
    controller: ItemCompController,
    bindings:{
      items:'<'
    }
  });
  ItemCompController.$inject=['$rootScope'];
  function ItemCompController($rootScope) {
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
