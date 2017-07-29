(function () {
  'use strict';
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',FoundItemsDirective)
  .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");

  function FoundItemsDirective() {
    var ddo={

      templateUrl:'loader/itemsloaderindicator.template.html',
      scope:{
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'Ctrl',
      bindToController: true
    };
    return ddo;
  };

NarrowItDownController.$inject=['MenuSearchService'];
 function NarrowItDownController(MenuSearchService) {
  var Ctrl=this;

  Ctrl.found=function (searchTerm) {

    var promise=MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      var foundItems=response.data;
      Ctrl.list=[];
      //var f=[];
      //console.log(foundItems.menu_items.length);
      for(var i=0;i<foundItems.menu_items.length;i++)
      {
        //console.log(foundItems.menu_items[i]);
        if(foundItems.menu_items[i].description.indexOf(searchTerm)>=0 && searchTerm !== "")
        {
          Ctrl.list.push(foundItems.menu_items[i]);
        }
      }
      //if(Ctrl.list.length===0){Ctrl.message="Nothing found";}else{Ctrl.message="";}
    })
    .catch(function (error) {
      console.log(error);
    });
};

  Ctrl.RemoveItem=function (itemIndex) {
    Ctrl.list.splice(itemIndex,1);
  };
};
MenuSearchService.$inject=['$http','ApiBasePath']
  function MenuSearchService($http,ApiBasePath) {
    var service=this;
    //var f=[];
    //var fa=[{id:1,name:"gg"},{id:2,name:"g2g"}];

    service.getMatchedMenuItems=function (searchTerm) {
      var response=$http({
        method: "GET",
        //url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
        url:(ApiBasePath + "/menu_items.json"),
        params: {
          description: searchTerm
        }
      })
      // .then(function (result) {
      //   var a=result.data;
      //   //var f=[];
      //   //console.log(a.menu_items.length);
      //
      //   for(var i=0;i<a.menu_items.length;i++)
      //   {
      //     if(a.menu_items[i].description.indexOf(searchTerm)>=0 && searchTerm !== "")
      //     {
      //       f.push(a.menu_items[i]);
      //     }
      //   }
      //   if(f.length===0){service.message="NOthing found";}else{service.message="";}
      // })
      // .catch(function (error) {
      //   console.log(error);
      // })
      return response;
    };

    // service.geti=function () {
    //   return f;
    // };
    // service.remove=function (itemIndex) {
    //   f.splice(itemIndex,1);
    // }
  };


})();
