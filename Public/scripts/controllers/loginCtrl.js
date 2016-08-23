angular.module("app").controller("loginCtrl", function($scope, mainService) {
  console.log('hit');
    $scope.signUp = function(newUser) {
        console.log(newUser);
        alert("Signed up!");
        mainService.signUp(newUser).then(function(results) {
            $scope.newUser = '';
        });
    };
    $scope.login = function(user) {
        mainService.login(user)
            .then(function(response) {
                // $scope.userData = response.data;
            });
    };
});
