/*jshint maxlen:120 */
/*jshint -W079 */
var mockData = (function() {
    return {
        getMockUsers: getMockUsers
    };

    function getMockUsers() {
        return [
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
})();
