
describe("User Controller Test", function(){

    var controller, httpBackend;

    beforeEach(function(){
        module('app');
        /*
         * you can inject the dependancy using $injector.get() method or directly
         */
        inject(function($controller, $httpBackend){
            controller= $controller("UserController");
            httpBackend = $httpBackend;
        });
    });

    afterEach(function(){
        /*
         * verifyNoOutstandingExpectation() is used to verify that all the request defined via
         * "expect" api were made. If any one left than throws the exception
         *
         * verifyNoOutstandingRequest() is used to verify that no outstanding request need to be flushed.
         */
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should return "true" with valid user data', function(){
        var isValidData = controller.validateAddUserForm("nilesh", "nilesh", "nilesh", 25);
        expect(isValidData).to.be.true; // Asserts that the target is true.
    });

    it('should return "false" if username is blank', function(){
        var isValidData = controller.validateAddUserForm(undefined, "nilesh", "nilesh", 25);
        expect(isValidData).to.be.false;
    });

    it('should return "false" if username is invalid " "', function(){
        var isValidData = controller.validateAddUserForm(" ", "nilesh", "nilesh", 25);
        expect(isValidData).to.be.false;
    });

    it('should return "false" if password is blank', function(){
        var isValidData = controller.validateAddUserForm("nilesh", undefined, "nilesh", 25);
        expect(isValidData).to.be.false;
    });

    it('should return "false" if password is invalid " "', function(){
        var isValidData = controller.validateAddUserForm("nilesh", " ", "nilesh", 25);
        expect(isValidData).to.be.false;
    });

    it('should return "false" if confirm password is blank', function(){
        var isValidData = controller.validateAddUserForm("nilesh", "nilesh", undefined, 25);
        expect(isValidData).to.be.false;
    });

    it('should return "false" if confirm password is invalid " "', function(){
        var isValidData = controller.validateAddUserForm("nilesh", "nilesh", " ", 25);
        expect(isValidData).to.be.false;
    });

    it('should return "false" if confirm age is blank', function(){
        var isValidData = controller.validateAddUserForm("nilesh", "nilesh", "nilesh", undefined);
        expect(isValidData).to.be.false;
    });

    it('should return "false" if confirm age is invalid " "', function(){
        var isValidData = controller.validateAddUserForm("nilesh", "nilesh", "nilesh", " ");
        expect(isValidData).to.be.false;
    });
});