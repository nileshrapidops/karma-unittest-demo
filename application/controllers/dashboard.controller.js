(function() {
    'use strict';
    angular
        .module('app')
        .controller('DashboardController', DashboardController);
    DashboardController.$inject = ['$location', 'userService'];
    function DashboardController($location, userService) {
    	var vm = this;	
    	vm.init = function(){
			userService.getUsers()
			.then(function(userData){
				vm.users = userData.Data;
			}, function(err){
				console.log(err);
			});
		};
		vm.goTo = function(path){
			if(path)
				$location.path(path);
		}
    }
})();