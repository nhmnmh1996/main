(function () {
  'use strict';

angular.module('MenuApp')
.config(DataConfig);


DataConfig.$inject=['$stateProvider','$urlRouterProvider'];
function DataConfig($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'main.list.html'
    })
    .state('mainList',{
      url:'/categories',
      templateUrl:'list.cate.html',
      controller:'MenuDataController as mainList',
      resolve:{
        cates:['MenuDataService',function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('itemList',{
      url:'/items',
      templateUrl:'list.items.html',
      controller:'ItemsController as itemdetail',
      resolve:{
        items:['$stateParams','MenuDataService',function ($stateParams,MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams)
          .then(function (item) {
            return item;
          });
        }]
      },
      params:{
        itemId:null
      }
    })
}
})();
