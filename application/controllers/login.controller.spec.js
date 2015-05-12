
describe("Login Controller Test", function(){

    var controller;

    beforeEach(function(){
        module('app');
        /*
         * you can inject the dependancy using $injector.get() method or directly
         */
        inject(function($controller){
            controller= $controller("LoginController");
        });
    });

    it('should return "true" if username and password are valid', function(){
        var isValidUser = controller.checkUser("nilesh", "nilesh");
        assert.ok(isValidUser, 'should pass');
    });

    it('should return "false" if username and password are invalid (nilesh, ashish)', function(){
        var isValidUser = controller.checkUser("nilesh", "ashish");
        assert.notOk(isValidUser, 'should fail');
    });
    it('should return "false" if username and password are blank', function(){
        var isValidUser = controller.checkUser();
        assert.notOk(isValidUser, 'should fail');
    });
    it('should return "false" if username and password are invalid (null, null)', function(){
        var isValidUser = controller.checkUser(null, null);
        assert.notOk(isValidUser, 'should fail');
    });
    it('should return "false" if username and password are invalid (" ", " ")', function(){
        var isValidUser = controller.checkUser(" ", " ");
        assert.notOk(isValidUser, 'should fail');
    });
});