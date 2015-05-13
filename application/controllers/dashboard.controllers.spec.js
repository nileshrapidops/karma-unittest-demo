
describe("Dashboard Controller Test", function(){

    var controller, httpBackend;

    beforeEach(function(){
        module('app');
        /*
         * you can inject the dependancy using $injector.get() method or directly
         */
        inject(function($controller, $httpBackend){
            controller = $controller("DashboardController");
            httpBackend = $httpBackend;
            httpBackend.when('GET', '../data/users.json').respond({
                "Data": [
                    { "username": "vimal", "password": "vimal", "age": 25 },
                    { "username": "nirav", "password": "nirav", "age": 26 }
                ]
            });
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

    it('should not have user before activation', function(){
        /*httpBackend.expectGET('/home').respond({
            "status": "Success"
        });*/
        expect(controller.users).to.be.undefined;
    });

    describe('After Activation', function(){
        beforeEach(function(){
            controller.init();
            httpBackend.flush();
        });

        it('should have users', function(){
            expect(controller.users).to.exist; // Asserts that the target is neither null nor undefined.
        });

        it('should have mock users', function(){
            expect(controller.users).to.have.length(2);
        });
    });
});