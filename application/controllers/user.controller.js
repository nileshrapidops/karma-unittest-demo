(function() {
    'use strict';
    angular
        .module('app')
        .controller('UserController', UserController);
    UserController.$inject = ['$location', 'userService'];
    function UserController($location, userService) {
    	var vm = this;	
    	vm.addNewUser = function(){
			var result = vm.validateAddUserForm(vm.username, vm.password, vm.confirmPassword, vm.age);
			if(result){
				var userObj = {
					"username": vm.username,
					"password": vm.password,
					"age": vm.age
				};
				userService.addUser(userObj)
				.then(function(data){
					alert('User added successfully.');
				}, function(err){
					alert('User could not be added.');
				});
			}
			else
				alert('Please refill the form.');
		}

		vm.validateAddUserForm = function(username, pwd, cpwd, age){
			var isValidForm = true;
			if(!username || username.trim() == "")
				isValidForm = false;
			if(!pwd || pwd.trim() == "")
				isValidForm = false;
			if(!cpwd || cpwd.trim() == "")
				isValidForm = false;
			if(pwd != cpwd)
				isValidForm = false;
			if(age <= 0 || !age)
				isValidForm = false;
			return isValidForm;
		};
    }
})();

/*MyAppControllers.controller('UserController', ['$scope', 'UserService', function($scope, UserService){
	$scope.addNewUser = function(){
		var result = $scope.validateAddUserForm($scope.username, $scope.password, $scope.confirmPassword, $scope.age);
		if(result){
			var userObj = {
				"username": $scope.username,
				"password": $scope.password,
				"age": $scope.age
			};
			UserService.addUser(userObj)
			.then(function(data){
				alert('User added successfully.');
			}, function(err){
				alert('User could not be added.');
			});
		}
		else
			alert('Please refill the form.');
	}

	$scope.validateAddUserForm = function(username, pwd, cpwd, age){
		var isValidForm = true;
		if(!username || username.trim() == "")
			isValidForm = false;
		if(!pwd || pwd.trim() == "")
			isValidForm = false;
		if(!cpwd || cpwd.trim() == "")
			isValidForm = false;
		if(pwd != cpwd)
			isValidForm = false;
		if(age <= 0 || !age)
			isValidForm = false;
		return isValidForm;
	};
}]);*/