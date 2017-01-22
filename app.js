(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name="";
  $scope.stateOfBeing = "";
  $scope.foodthatIeat = function () {
    var re = /\s*,\s*/;
    var totalNameValue = $scope.name.split(re).length;
      if(totalNameValue==1){
     $scope.stateOfBeing = "Eat something";
     }
     if(totalNameValue==3){
        $scope.stateOfBeing = "Enjoy!!";
      }
      if(totalNameValue>=4){
         $scope.stateOfBeing = "Too Much!!";
       }
  };
}

})();
