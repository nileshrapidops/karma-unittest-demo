var expect = require('chai').expect;
require('mocha');
function addition(a, b){
    return a + b;
}

describe('Meta Generated Test', function() {
    var tests = [
        {a:1, b:2, result: 3},
        {a:3, b:4, result: 7},
        {a:5, b:6, result: 11}
    ];

    tests.forEach(function(test) {
        it(test.a + ' + ' + test.b + ' = ' + test.result, function() {
            var result = addition(test.a, test.b);
            expect(result).to.equal(test.result);
        });
    });
});