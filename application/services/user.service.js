(function() {
    'use strict';
    angular
        .module('app')
        .factory('userService', userService);

    userService.$inject = ['$http', '$q'];
    function userService($http, $q) {
        var service = {
            getUsers: getUsers,
            addUser: addUser
        };
        return service;

        function getUsers() {
            var deferred=$q.defer();
            $http.get('../data/users.json').success(function(data){
                deferred.resolve(data);
            }).error(function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        };

        function addUser(userObj) {
            var deferred=$q.defer();
            $http.post('/user',userObj).success(function(data){
                deferred.resolve(data);
            }).error(function(data){
                deferred.reject(data);
            }); 
            return deferred.promise;    
        };
    }
})();