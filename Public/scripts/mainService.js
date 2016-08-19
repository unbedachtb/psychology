angular.module("app").service("mainService", function($http, $state) {
    var user;
    this.getUser = function() {
      return user;
    };
    this.getAssessments = function() {
        return $http({
            method: 'GET',
            url: '/assessments'
        }).then(function(results) {
            return results.data;
        });
    };
    this.getQuestions = function(id) {
        return $http({
            method: 'GET',
            url: '/questions/' + id
        }).then(function(results) {
            console.log(results);
            return results.data;
        });
    };
    this.login = function(user) {
        return $http({
            method: 'POST',
            url: '/login',
            data: user
        }).then(function(results) {
          console.log(results);
          if(results.data.length === 0) {
            alert("Username and/or password is wrong");
          } else {
          user = results;
          $state.go('home');
          }
      //THIS SITE SHOULD NOT BE SHIPPED BECAUSE OF THE INSECURE LOGIN METHOD I USED!!
    });
  };
    this.signUp = function(newUser) {
        return $http({
            method: 'POST',
            url: '/user',
            data: newUser
        }).then(function(results) {
          $state.go('home');
        return results.data;

    });
  };
});
