/*
 * This file is used for all mock call for Users API
 */
var userMock = (function() {
    var service = {
        injectMockData: injectMockData
    };
    return service;
    
    function injectMockData() {
        // success response
        $httpBackend
        .when('GET', '../data/users.json')
        .respond(200, getMockUsers());
        // success response
        $httpBackend.whenPOST('/user', {
            "username": "nilesh",
            "password": "nilesh",
            "age": 25
        }).respond({
            "Status": "success",
            "Data": {}
        });
    }

    function getMockUsers() {
        return {
            "Status": "success",
            "Data" : [
                {
                    "username" : "nilesh",
                    "password" : "nilesh",
                    "age" : 25
                },{
                    "username" : "ashish",
                    "password" : "ashish",
                    "age" : 28
                },{
                    "username" : "swapnil",
                    "password" : "swapnil",
                    "age" : 29
                },{
                    "username" : "chintan",
                    "password" : "chintan",
                    "age" : 35
                },{
                    "username" : "hardik",
                    "password" : "hardik",
                    "age" : 30
                }
            ] 
        }
    }
    function getErrorMock() {
        return {
            "Status": "failure",
            "Error" : {
                "Message": "Cannot GET /data/users.json"
            }
        }   
    }
})();
