
describe("Routes Test", function(){

    beforeEach(function(){
        module('app');
        specHelper.injector(function($httpBackend, $location, $rootScope, $route) {});
    });

    it('should map / route to Login view template', function () {
        expect($route.routes['/'].templateUrl).
            to.equal('views/login.html');
    });

    it('should route / to the dashboard View', function () {
        $httpBackend.expectGET('views/login.html').respond(200);
        $location.path('/');
        $rootScope.$digest();
        expect($route.current.templateUrl).to.equal('views/login.html');
    });

    it('should route /dashboard to the Dashboard route', function () {
        $httpBackend.expectGET('views/dashboard.html').respond(200);
        $location.path('/dashboard');
        $rootScope.$digest();
        expect($route.current.templateUrl).to.equal('views/dashboard.html');
    });

    it('should route /add_user to the Add New User route', function () {
        $httpBackend.expectGET('views/add_user.html').respond(200);
        $location.path('/add_user');
        $rootScope.$digest();
        expect($route.current.templateUrl).to.equal('views/add_user.html');
    });
});