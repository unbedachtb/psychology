angular.module("app", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '../views/login.html',
            controller: 'loginCtrl'
        })
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        })
        .state('takeassessment1', {
            url: '/takeassessment1',
            templateUrl: '../views/takeassessment.html',
            controller: 'assessmentsCtrl'
        })
        .state('takeassessment2', {
            url: '/takeassessment2/',
            templateUrl: '../views/takeassessment2.html',
            controller: 'assessmentsCtrl'
        })
        .state('results', {
            url: '/results',
            templateUrl: '../Views/results.html'
        });
    $urlRouterProvider
        .otherwise('/login');
});
