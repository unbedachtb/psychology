angular.module("app", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '../views/login.html',
            controller: 'loginCtrl'
        })
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            // controller: 'homeCtrl'
        })
        .state('takeassessment1', {
            url: '/takeassessment1',
            templateUrl: '../views/takeassessment.html',
            controller: 'assessmentsCtrl1'
        })
        .state('takeassessment2', {
            url: '/takeassessment2/',
            templateUrl: '../views/takeassessment2.html',
            controller: 'assessmentsCtrl2'
        })
        .state('results1', {
            url: '/results1/:score',
            templateUrl: '../views/results.html',
            controller: 'resultsCtrl'
        })
        .state('results2', {
            url: '/results2/:score',
            templateUrl: '../views/results2.html',
            controller: 'resultsCtrl'
        })
        .state('previousresults', {
            url: '/previousresults/:userid',
            templateUrl: '../views/previousresults.html',
            controller: 'resultsCtrl'
        });
    $urlRouterProvider
        .otherwise('/login');
});
