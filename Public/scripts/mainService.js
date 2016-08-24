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
  this.postResults = function(newUser, scores, num) {

    var score = {
      result: 0,
      newUser: newUser,
      date: new Date(),
      num: num
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

  this.getCurrentUser = function(){
    return $http({
      method: "GET",
      url: "/currentUser"
    }).then(function(response){
      console.log('mainService user', response);
      return response.data;
    });
  };
  this.getResultsByUser = function(id) {
    console.log(id);
    return $http({
      method: "GET",
      url: "/results",
      data: id
    }).then(function(response) {
      console.log(response);
      return response.data;
    });
  };

});
