
describe("Routes & Services Test", function(){

    var route, userService, httpBackend;

    describe('Services Test', function(){
        beforeEach(function(){
            module('app');
            /*
             * you can inject the dependancy using $injector.get() method or directly
             */
            inject(function($httpBackend, _userService_){
                userService = _userService_;
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

        it('should verify the response of "UserService" services', function(){
            userService.getUsers()
            .then(function(userData){
                expect(userData.Data).to.have.length(2);
            }, function(err){});
            /*
             * flush() method flushes the request that was sent to $http service.
             * doing this allows the then() method call to be executed when the promise is resolved in the success() callback
             */
            httpBackend.flush();
        });

        it('should add new user', function(){
            httpBackend.expectPOST('/user', {
                "username": "nilesh",
                "password": "nilesh",
                "age": 25
            }).respond({
                "Status": "success",
                "Data": {}
            });

            var userObj = {
                "username": "nilesh",
                "password": "nilesh",
                "age": 25
            };
            userService.addUser(userObj)
            .then(function(data){
                expect(data.Status).to.equal('success');
            }, function(err){});
            /*
             * flush() method flushes the request that was sent to $http service.
             * doing this allows the then() method call to be executed when the promise is resolved in the success() callback
             */
            httpBackend.flush();
        });
    });

    describe('Routes Test', function(){
        beforeEach(function(){
            module('app');
            /*
             * you can inject the dependancy using $injector.get() method or directly
             */
            inject(function($route){
                route = $route;
            });
        });

        it('Should Load The Login Page On Successful Load Of "/"', function() {
            expect(route.routes['/'].controller).to.equal('LoginController123');
        });

        it('Should Load The Dashboard Page On Successful Load Of "/dashboard"', function() {
            expect(route.routes['/dashboard'].controller).to.equal('DashboardController');
        });

        it('Should Load The Add User Page On Successful Load Of "/add_user"', function() {
            expect(route.routes['/add_user'].controller).to.equal('UserController');
        });
    });
});