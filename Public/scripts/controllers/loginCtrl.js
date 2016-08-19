angular.module("app").controller("loginCtrl", function($scope, mainService){
  console.log('working');
  $scope.login = function(user) {
    mainService.login(user).then(function(results) {
      $scope.user = '';
      $scope.results = results;
    });
  };
  $scope.signUp = function(newUser) {
    console.log(newUser);
    alert("Signed up!");
    mainService.signUp(newUser).then(function(results) {
      $scope.newUser = '';
    });//THIS SITE SHOULD NOT BE SHIPPED BECAUSE OF THE INSECURE LOGIN METHOD I USED!!
  };
});
