
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
        expect(isValidUser).to.be.true; // Asserts that the target is true.
    });

    it('should return "false" if username and password are invalid (nilesh, ashish)', function(){
        var isValidUser = controller.checkUser("nilesh", "ashish");
        expect(isValidUser).to.be.false; // Asserts that the target is false.
    });
    it('should return "false" if username and password are blank', function(){
        var isValidUser = controller.checkUser();
        expect(isValidUser).to.be.false; // Asserts that the target is false.
    });
    it('should return "false" if username and password are invalid (null, null)', function(){
        var isValidUser = controller.checkUser(null, null);
        expect(isValidUser).to.be.false; // Asserts that the target is false.
    });
    it('should return "false" if username and password are invalid (" ", " ")', function(){
        var isValidUser = controller.checkUser(" ", " ");
        expect(isValidUser).to.be.false; // Asserts that the target is false.
    });
});