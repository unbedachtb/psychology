angular.module("app").controller("assessmentsCtrl1", function($scope, mainService, $state){
  console.log('actrl1');
  $scope.postResults = function (newUser, scores, num) {
    // console.log(newUser);
    mainService.postResults(newUser, scores, num).then(function(response) {
      // console.log(response.data);
      $state.go('results1', {score: response.data.score});
    });
  };

  $scope.getCurrentUser = function() {
    mainService.getCurrentUser()
    .then(function(response){
      // console.log('currentUser:', response);
      $scope.currentUser = response;
    });
  }();
});
