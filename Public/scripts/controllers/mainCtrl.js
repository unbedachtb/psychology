angular.module("app").controller("mainCtrl", function($scope, mainService){
  $scope.getAssessments = function() {
    mainService.getAssessments().then(function(results) {
      $scope.assessments = results;
    });
  };
  $scope.getAssessments();

  $scope.getQuestions = function () {
    mainService.getQuestions().then(function(results) {
      $scope.questions = results;
    });
  };
  $scope.getQuestions();


});
