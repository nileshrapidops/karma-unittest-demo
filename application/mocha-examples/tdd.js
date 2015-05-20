var expect = require('chai').expect;
require('mocha');
/*function addition(a, b) {
	var result;
	if(a && b) {
		result = a + b;
	}
	return result;
}*/
suite('Addition Method Test', function(){
  	suiteSetup(function(){
  		// it runs before all test scenarios
  	});
  	setup(function(){
  		// it runs before each test scenario
  	});
  	teardown(function(){
  		// it runs after each test scenario
  	});
  	suiteTeardown(function(){
  		// it runs after all test scenarios
  	});
	test('Should add two numbers', function(){
  		var result = addition(10, 20);
  		expect(result).to.equal(30);
	});
	test('Should gives undefined', function(){
  		var result = addition(10);
  		expect(result).to.be.undefined;
	});
	test('Should gives undefined', function(){
  		var result = addition(10, null);
  		expect(result).to.be.undefined;
	});
	test('Should gives undefined', function(){
  		var result = addition(null, 20);
  		expect(result).to.be.undefined;
	});
	test('Should gives undefined', function(){
  		var result = addition();
  		expect(result).to.be.undefined;
	});
	test('Should gives undefined', function(){
  		var result = addition(null, null);
  		expect(result).to.be.undefined;
	});
	test('Should gives undefined', function(){
  		var result = addition("", "sdgfdfg");
  		expect(result).to.be.undefined;
	});
});