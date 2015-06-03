(function() {
    'use strict';
    angular
        .module('app')
        .controller('DashboardController', DashboardController);
    DashboardController.$inject = ['$location', 'userService'];
    function DashboardController($location, userService) {
    	var vm = this;
    	vm.users = [];
		vm.goTo = goTo;
		activate();

        function activate() {
            getUsers();
        }
        function getUsers() {
            userService.getUsers().then(function(userData) {
                vm.users = userData;
            }, function(err){
                console.log(err);
                console.log("err");
            });
        }
        function goTo(path) {
        	if(path)
        		$location.path(path);
        }
    }
})();