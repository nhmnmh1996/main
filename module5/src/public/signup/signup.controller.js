(function () {
  'use strict';

  angular.module('public')
  .controller('SignUpController',SignUpController);

  SignUpController.$inject=['Items','MenuService'];
  function SignUpController(Items,MenuService) {
    var $ctrl=this;
    $ctrl.items=Items;
    //$ctrl.f=false;
    $ctrl.submit=function () {

      var fag=0;
      for(var i=0;i<$ctrl.items.menu_items.length;i++){
        if($ctrl.items.menu_items[i].short_name===$ctrl.user.dish){
          fag++;
        }
      }
      if(fag >= 1){
        $ctrl.f=false;
        $ctrl.completed=true;
        var username=$ctrl.user.username;
        var phone=$ctrl.user.phone;
        var email=$ctrl.user.email;
        var dish=$ctrl.user.dish;
        MenuService.postMy(username,phone,email,dish);
        //MenuService.getMenuShortName(dish);
      }
      else{
        $ctrl.f=true;
      }
    };
    //console.log($ctrl.items);
  };
})();
