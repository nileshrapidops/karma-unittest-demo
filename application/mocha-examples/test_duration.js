/*
	Test duration example
*/
var expect = require('chai').expect;
require('mocha');
describe('Story Name', function() {
	this.timeout(3000);
    it('should have task', function(done){
    	setTimeout(function(){
    		expect('nilesh').to.equal('nilesh');
    		done();
    	}, 2000);
    });
});