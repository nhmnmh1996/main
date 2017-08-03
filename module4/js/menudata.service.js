(function () {
  'use strict';
  angular.module('data')
  .service('MenuDataService',MenuDataService);

  MenuDataService.$inject=['$http','$q','$timeout'];
  function MenuDataService($http,$q,$timeout) {
    var service=this;
    //var categories=[];
    //var items=[];
    service.getAllCategories=function () {
      var deferred=$q.defer();
      var response=$http({
        method:'GET',
        url:'https://davids-restaurant.herokuapp.com/categories.json'
      }).then(function (result) {
        service.categories=[];
        var a=result.data;

        for(var i=0;i<a.length;i++)
        {
          var m={
            id:a[i].id,
            short_name:a[i].short_name,
            name:a[i].name
          };
          service.categories.push(m);
        }
      });
      $timeout(function () {
        deferred.resolve(service.categories);
      }, 1000);
      return deferred.promise;
    };
    service.getItemsForCategory=function (search) {
      var deferred=$q.defer();
      var res=$http({
        method:'GET',
        url:'https://davids-restaurant.herokuapp.com/menu_items.json',
        params:{
          short_name:search
        }
      }).then(function (result) {
        service.items=[];
        var b=result.data;
        for(var i=0;i<b.menu_items.length;i++)
        {
          if(b.menu_items[i].short_name.indexOf(search.itemId)>=0)
          {
            var m={
              id:b.menu_items[i].id,
              short_name:b.menu_items[i].short_name,
              name:b.menu_items[i].name,
              description:b.menu_items[i].description
            };
            service.items.push(m);
          }
        }
      });

      $timeout(function () {
        deferred.resolve(service.items);
      }, 1000);
      return deferred.promise;
    };
  }

})();
