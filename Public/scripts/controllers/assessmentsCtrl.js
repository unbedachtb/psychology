angular.module("app").controller("assessmentsCtrl1", function($scope, mainService, $state){
  console.log('actrl1');
  $scope.postResults = function (newUser, scores) {
    mainService.postResults(scores).then(function(response) {
      console.log(response.data);
      $state.go('results1', {score: response.data.score});
    });
  };
});
