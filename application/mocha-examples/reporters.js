var expect = require('chai').expect;
require('mocha');

describe('Reporters Test', function() {
    before(function(){
        console.log("first describe block");
    });
    it('Should be passed', function() {
        expect("hello").to.equal("hello");
    });
    it('Should be failed', function() {
        expect("hello").to.equal("hi");
    });
    it('Should be slow', function(done) {
        this.timeout(5000);
        setTimeout(function(){
            expect("hello").to.equal("hello");
            done();
        }, 3000);
    });
    it.skip('Should be skipped', function() {
        expect("hello").to.equal("hello");
    });
    it('Should be pending');
});