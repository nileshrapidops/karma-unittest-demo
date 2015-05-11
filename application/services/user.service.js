(function() {
    'use strict';
    angular
        .module('app')
        .factory('userService', userService);

    userService.$inject = ['$http', '$q'];
    function userService($http, $q) {
        var returnObj = {};
        returnObj.getUsers = function(){
            var deferred=$q.defer();
            $http.get('../data/users.json').success(function(data){
                deferred.resolve(data);
            }).error(function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        };

        returnObj.addUser = function(userObj){
            var deferred=$q.defer();
            $http.post('/user',userObj).success(function(data){
                deferred.resolve(data);
            }).error(function(data){
                deferred.reject(data);
            }); 
            return deferred.promise;    
        };
        return returnObj;
    }
})();