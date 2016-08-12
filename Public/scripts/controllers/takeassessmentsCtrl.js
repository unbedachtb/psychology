//Why does this controller not need a function? Why does this code need to be in homeCtrl as well?
angular.module("app").controller("assessmentsCtrl", function($scope, mainService, $stateParams){
  mainService.getQuestions($stateParams.id).then(function(results) {
    $scope.questions = results;
  });

});
