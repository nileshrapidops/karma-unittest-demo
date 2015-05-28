
describe("Dashboard Controller Test", function(){

    var controller;

    beforeEach(function(){
        module('app', function($provide) {
            specHelper.fakeRouteProvider($provide);
        });
        specHelper.injector(function($controller, $q, $rootScope, userService) {});
    });

    beforeEach(function () {
        stubbing();
        controller = $controller('DashboardController');
        $rootScope.$apply();    
    });

    it('should not have user before activation', function(){
        expect(controller.users).to.be.defined;
    });

    describe('After Activation', function(){
        it('should have mock users', function(){
            expect(controller.users).to.have.length.above(0);
        });
    });
});
function stubbing() {
    sinon.stub(userService, 'getUsers', function() {
        var deferred = $q.defer();
        deferred.resolve(mockData.getMockUsers());
        return deferred.promise;
    });
}