(function() {
    'use strict';
    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .when('/dashboard', {
                templateUrl: "views/dashboard.html",
                controller: "DashboardController",
                controllerAs: 'vm'
            })
            .when('/add_user', {
                templateUrl: "views/add_user.html",
                controller: "UserController",
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();