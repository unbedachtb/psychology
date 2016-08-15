angular.module("app", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '../views/login.html',
        })
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        })
        .state('takeassessment', {
            url: '/takeassessment/:id/:name',
            templateUrl: '../views/takeassessment.html',
            controller: 'assessmentsCtrl'
        })
        .state('results', {
            url: '/results',
            templateUrl: '../Views/results.html'
        });
    $urlRouterProvider
        .otherwise('/login');
});
