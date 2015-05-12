
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
        assert.isUndefined(controller.users);
    });

    describe('After Activation', function(){
        beforeEach(function(){
            controller.init();
            httpBackend.flush();
        });

        it('should have users', function(){
            assert.isDefined(controller.users);
        });

        it('should have mock users', function(){
            assert.lengthOf(controller.users, 2);
        });
    });
});