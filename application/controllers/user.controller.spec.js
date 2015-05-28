
describe("User Controller Test", function(){

    var controller;

    beforeEach(function(){
        module('app', function($provide) {
            specHelper.fakeRouteProvider($provide);
        });
        controller = $controller('UserController');
    });
});