angular.module("app").controller("resultsCtrl", function($scope, mainService, $state){

  $scope.score = $state.params.score;

  $scope.getCurrentUser = function() {
    mainService.getCurrentUser()
    .then(function(response){
      // console.log('currentUser:', response);
      $scope.currentUser = response;
    });
  }();

  $scope.getResultsByUser = function(id) {
    console.log("id", id);
    mainService.getResultsByUser(id)
    .then(function(response){
      console.log('pizza:', response[2].id);
      for(var i = 0; i < response.length; i++) {
        $scope.test = response[i];
      }

    });
  }();
});
