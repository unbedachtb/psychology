angular.module("app").controller("resultsCtrl", function($scope, mainService){
  $scope.postResults = function (newUser, scores) {
    mainService.postResults(scores).then(function(response) {
      $scope.scores = response.data;
    });
  };
  
});
