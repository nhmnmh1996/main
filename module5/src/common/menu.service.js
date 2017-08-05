(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  var my=[];
  //var short=[];
  service.postMy=function (name,phone,email,dish) {
    $http.get(ApiPath + '/menu_items.json',dish).then(function (response) {
      var a=response.data;
      for(var i=0;i<a.menu_items.length;i++){
        if(a.menu_items[i].short_name===dish){
          var b={
            username:name,
            phone:phone,
            email:email,
            dish:dish,
            name:a.menu_items[i].name,
            description:a.menu_items[i].description
          };
          my.push(b);
        }
      }
    });

  }
  service.getMy=function () {
    return my;
  }
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.getMenu = function () {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      return response.data;
    });
  };



  // service.getMenuShortName = function (short_name) {
  //   var config = {};
  //   if (short_name) {
  //     config.params = {'short_name': short_name};
  //   }
  //
  //   return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
  //     var a=response.data;
  //     for(var i=0;i<a.items.menu_items.length;i++){
  //       if(a.items.menu_items[i].short_name===short_name){
  //         short.push(a.items.menu_items[i]);
  //       }
  //     }
  //   });
  // };
  // service.getShort=function () {
  //   return short;
  // }


}



})();
