(function() {
    'use strict';
    angular
        .module('app')
        .controller('UserController', UserController);
    UserController.$inject = ['$location', 'userService'];
    function UserController($location, userService) {
    	var vm = this;
    	vm.addNewUser = addNewUser;

		function addNewUser() {
			var result = validateAddUserForm(vm.username, vm.password, vm.confirmPassword, vm.age);
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
    }
    function validateAddUserForm(username, pwd, cpwd, age) {
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
    }
})();