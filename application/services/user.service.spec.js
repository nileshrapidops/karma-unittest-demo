/* jshint -W117, -W030 */
describe('User Services', function () {

    beforeEach(function () {
        module('app');
        specHelper.injector(function($httpBackend, $rootScope, userService) {});            
        userMock.injectMockData();
    });

    it('should be registered', function() {
        expect(userService).not.to.equal(null);
    });

    describe('getUsers function', function () {
        it('should exist', function () {
            expect(userService.getUsers).not.to.equal(null);
        });
        
        it('should return 5 Users', function () {
            userService.getUsers().then(function(data) {
                expect(data.length).to.equal(5);
            });
            $httpBackend.flush();
        });
    });
    describe('addUser function', function () {
        it('should exist', function () {
            expect(userService.addUser).not.to.equal(null);
        });
        
        it('should add user', function () {
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