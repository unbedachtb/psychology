angular.module("app").controller("assessmentsCtrl", function($scope, mainService, $stateParams){
  mainService.getQuestions($stateParams.id).then(function(results) {
    $scope.questions = results;
  });
});
