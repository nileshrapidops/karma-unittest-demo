
describe("Dashboard Controller Test", function(){

    var controller;

    beforeEach(function(){
        module('app');
        specHelper.injector(function($controller, $q, $rootScope, $httpBackend, userService) {});
    });

    beforeEach(function () {
        // stubbing();
        controller = $controller('DashboardController');
        // $rootScope.$apply();
    });

    describe('After Activation Without Data', function(){
        beforeEach(function () {
            userMock.injectBlankMockData();
            $httpBackend.flush();
        });
        it('should have blank mock users', function(){
            expect(controller.users).to.have.length(0);
        });
    });
    describe('After Activation With Data', function(){
        beforeEach(function () {
            userMock.injectMockData();
            $httpBackend.flush();
        });
        it('should have mock users', function(){
            expect(controller.users).to.have.length.above(0);
        });
    });
    specHelper.verifyNoOutstandingHttpRequests();
});

/*function stubbing() {
    sinon.stub(userService, 'getUsers', function() {
        var deferred = $q.defer();
        deferred.resolve(mockData.getMockUsers());
        return deferred.promise;
    });
}*/