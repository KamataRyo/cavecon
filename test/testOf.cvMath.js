var should = require('should');
var cvMath = require('../js/cvMath.js');
var q = '';
var digitToCheck = 4;// num of digit to check value approximately

var getDiff = function(expected, actual){
	var digit = Math.pow(10, digitToCheck);
	var result = Math.round((expected - actual) * digit) / digit;
	return result;
};

describe('test of cvMath.', function(){

//Degree <--> radian=========================
	var degree = 90;
	var radian = Math.PI * 0.5;

	q = 'test of degree -> Radian';
	it(q, function(){
		cvMath.__degreeToRadian(degree).should.equal(radian);
	});

	q = 'test of degree <- Radian';
	it(q, function(){
		cvMath.__radianToDegree(radian).should.equal(degree);
	});
//===========================================

//angular <--> polar=========================
	var polar = {
		r: 2,
		dir: 45,
		til: 45
	};
	var angular = {
		x: 1,
		y: 1,
		z: Math.sqrt(2)
	};
	var result_a2p = cvMath.angularToPolar(angular);
	var result_p2a = cvMath.polarToAngular(polar);
	q = 'test of angular -> polar.r';
	it(q, function(){
		var expected = polar.r;
		var actual = result_a2p.r;
		getDiff(expected, actual).should.equal(0);
	});
	q = 'test of angular -> polar.dir';
	it(q, function(){
		var expected = polar.dir;
		var actual = result_a2p.dir;
		getDiff(expected, actual).should.equal(0);
	});
	q = 'test of angular -> polar.til';
	it(q, function(){
		var expected = polar.til;
		var actual = result_a2p.til;
		getDiff(expected, actual).should.equal(0);
	});

	q = 'test of angular.x <- polar';
	it(q, function(){
		var expected = angular.x;
		var actual = result_p2a.x;
		getDiff(expected, actual).should.equal(0);
	});
	q = 'test of angular.y <- polar';
	it(q, function(){
		var expected = angular.y;
		var actual = result_p2a.y;
		getDiff(expected, actual).should.equal(0);
	});
	q = 'test of angular.z <- polar';
	it(q, function(){
		var expected = angular.z;
		var actual = result_p2a.z;
		getDiff(expected, actual).should.equal(0);
	});

//weight calculation=================================
	var polar1 = {
		r: 5,
		dir: 45,
		til: 45
	};
	var polar2 = {
		r: 5,
		dir: 135,
		til: 315
	};
	var result_actual = cvMath.polarAdd(polar1, polar2);
	var result_expected = {
		r: 5,
		dir: 90,
		til: 0
	};

	q = 'test of polarAdd.r method';
	it(q, function(){
		var expected = result_expected.r;
		var actual = result_actual.r;
		getDiff(expected, actual).should.equal(0);
	});

	q = 'test of polarAdd.dir method';
	it(q, function(){
		var expected = result_expected.dir;
		var actual = result_actual.dir;
		getDiff(expected, actual).should.equal(0);
	});

	q = 'test of polarAdd.til method';
	it(q, function(){
		var expected = result_expected.til;
		var actual = result_actual.til;
		getDiff(expected, actual).should.equal(0);
	});
});