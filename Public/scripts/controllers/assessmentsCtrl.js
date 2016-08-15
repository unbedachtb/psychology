//Why does this controller not need a function? Why does this code need to be in homeCtrl as well?
angular.module("app").controller("assessmentsCtrl", function($scope, mainService, $stateParams){
  mainService.getQuestions($stateParams.id).then(function(results) {
    console.log($stateParams.name);
    $scope.assessmentDescription = results[0].description;
    console.log(results);
    $scope.questions = results;
  });
$scope.assessmentName = $stateParams.name;
});
