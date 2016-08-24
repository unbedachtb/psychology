angular.module("app").controller("assessmentsCtrl2", function($scope, mainService, $state){
  console.log('actrl2');
  $scope.postResults = function (newUser, scores) {
    mainService.postResults(scores).then(function(response) {
      console.log(response.data);
      $state.go('results2', {score: response.data.score});
    });
  };
});
