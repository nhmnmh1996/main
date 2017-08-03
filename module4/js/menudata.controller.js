(function () {
  'use strict';
  angular.module('data')
  .controller('MenuDataController',MenuDataController)
  .controller('ItemsController',ItemsController);

  MenuDataController.$inject=['MenuDataService','cates'];//,'$stateParams'
  function MenuDataController(MenuDataService,cates) {//,$stateParams
    var mainList=this;
    //var item=items[$stateParams.itemId];
    mainList.cates=cates;

  };
  ItemsController.$inject=['MenuDataService','items'];//,'$stateParams'
  function ItemsController(MenuDataService,items) {//,$stateParams
    var itemdetail=this;

    itemdetail.item=items;

  };

})();
