angular.module("app").service("mainService", function($http, $state) {
    // var user;
    // this.getUser = function() {
    //   return user;
    // };
    // this.getAssessments = function() {
    //     return $http({
    //         method: 'GET',
    //         url: '/assessments'
    //     }).then(function(results) {
    //         return results.data;
    //     });
    // };
    // this.getQuestions = function(id) {
    //     return $http({
    //         method: 'GET',
    //         url: '/questions/' + id
    //     }).then(function(results) {
    //         console.log(results);
    //         return results.data;
    //     });
    // };
    this.login = function(user) {
        return $http({
            method: 'POST',
            url: '/login',
            data: user
        }).then(function(response) {
          // if(response.data.length === 0) {
          //   alert("Username and/or password is wrong");
          // } else {
          user = response.data;
          // console.log("user: ", user);
          $state.go('home');
          // }
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
  this.postResults = function(scores) {

    var score = {
      result: 0
    };
    for (var val in scores) {
      score.result += parseInt(scores[val]);
    }
    // console.log(score);

    return $http({
      method: 'POST',
      url: '/results',
      data: score
    });
  };

  this.getUser = function() {
    return $http({
      method: 'GET',
      url: '/me',
    }).then(function(response) {
      return response;
    });
  };


});
