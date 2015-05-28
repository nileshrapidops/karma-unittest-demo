/* jshint -W117, -W030 */
describe('User Services', function () {
    var scope;
    var mocks = {};

    beforeEach(function () {
        module('app', function($provide) {
            specHelper.fakeRouteProvider($provide);
        });
        specHelper.injector(function($httpBackend, $rootScope, userService) {});            
        
        mocks.users = { 
            Data: mockData.getMockUsers()
        };
    });

    it('should be registered', function() {
        expect(userService).not.to.equal(null);
    });

    describe('getUsers function', function () {
        it('should exist', function () {
            expect(userService.getUsers).not.to.equal(null);
        });
        
        it('should return 5 Users', function () {
            $httpBackend.when('GET', '../data/users.json').respond(200, mocks.users);
            userService.getUsers().then(function(data) {
                expect(data.Data.length).to.equal(5);
            });
            $httpBackend.flush();
        });
    });
    describe('addUser function', function () {
        it('should exist', function () {
            expect(userService.addUser).not.to.equal(null);
        });
        
        it('should add user', function () {
            $httpBackend.expectPOST('/user', {
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
            $httpBackend.flush();
        });
    });

    specHelper.verifyNoOutstandingHttpRequests();
});