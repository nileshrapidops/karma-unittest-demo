
describe("Login Controller Test", function(){

    var controller;

    beforeEach(function(){
        module('app', function($provide) {
            specHelper.fakeRouteProvider($provide);
        });
        specHelper.injector(function($controller, $q, $rootScope, userService) {});
    });
    beforeEach(function () {
        controller = $controller('LoginController');
    });
});