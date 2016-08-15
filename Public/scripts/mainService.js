angular.module("app").service("mainService", function($http){
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
});
