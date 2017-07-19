//version 1.0.0
(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope','$filter'];
  function LunchCheckController($scope) {
    $scope.name="";
    $scope.color="";
    $scope.message="";
    $scope.Check=function () {
      $scope.message=stringsplit($scope.name);
    };
    function stringsplit(str){
      var splittr=str.split(',');
      var number=0;
      var mes="";
      for(var i=0;i<splittr.length;i++){
        if(splittr[i].trim()){
          number++;
        }
      }
      if(number==0){
        mes="Please enter data first";
        $scope.color="red";
      }
      else if (number<=3) {
        mes="Enjoy!";
        $scope.color="green";
      }
      else if(number>=4){
        mes="Too much!";
        $scope.color="green";
      }
      return mes;
    }
  }

})();

