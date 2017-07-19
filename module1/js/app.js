(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope) {
    $scope.name="";
    $scope.color="";
    $scope.Check=function () {
      var splittr=$scope.name.split(',');
      var color="";
      if($scope.name==""){
        $scope.message="Please enter data first";
        $scope.color="red";
      }
      else if (splittr.length<=3) {
        $scope.message="Enjoy!";
        $scope.color="green";
      }
      else {
        $scope.message="Too much!";
        $scope.color="green";
      }
    };
  }

})();
