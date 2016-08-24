angular.module("app").controller("resultsCtrl", function($scope, mainService, $state){

  $scope.score = $state.params.score;

});
