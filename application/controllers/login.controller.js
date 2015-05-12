(function() {
    'use strict';
    angular
        .module('app')
        .controller('LoginController', LoginController);
    LoginController.$inject = ['$location'];
    function LoginController($location) {
    	var vm = this;
    	vm.login = function(){
			var loginResult = vm.checkUser(vm.username, vm.password);
			if(loginResult)
				$location.path('/dashboard');
			else
				alert('Invalid username or password');
		}
		// this function checks that user is valid or not
		vm.checkUser = function(username, password){
			if(username == "nilesh" && password == "nilesh")
				return true;
			else
				return false;	
		}
    }
})();