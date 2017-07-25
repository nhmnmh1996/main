//version 1.0.1
(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buy=this;
    buy.item= ShoppingListCheckOffService.getItems();
    buy.buyitem=function (itemIndex,names,quantitys) {
      ShoppingListCheckOffService.buyitems(names,quantitys);
      ShoppingListCheckOffService.removeItem(itemIndex);
    };

  };
  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought=this;
    bought.item=ShoppingListCheckOffService.getbought();
  };
  function ShoppingListCheckOffService() {
    var service=this;
    var items=[
      {name:"cookies",quantity:10},
      {name:"juice",quantity:5},
      {name:"apple",quantity:8},
      {name:"banana",quantity:18},
      {name:"tomato",quantity:20}
    ];
    var boutghtItems=[];

    service.buyitems=function (names,quantitys) {
      var item={
        name:names,
        quantity:quantitys
      };
      boutghtItems.push(item);
    };
    service.getItems=function () {
      return items;
    };
    service.getbought=function () {
      return boutghtItems;
    };
    service.removeItem=function (itemIndex) {
      items.splice(itemIndex,1);
    };
  };

})();
