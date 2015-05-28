(function() {
    'use strict';
    angular
        .module('app')
        .controller('LoginController', LoginController);
    LoginController.$inject = ['$location'];
    function LoginController($location) {
    	var vm = this;
    	vm.login = login;

		function login() {
			var isValid = checkUser(vm.username, vm.password);
			if(isValid)
				$location.path('/dashboard');
			else
				alert('Invalid username or password');
		}
		function checkUser(username, password) {
			if(username == "nilesh" && password == "nilesh")
				return true;
			else
				return false;
		}
    }
})();