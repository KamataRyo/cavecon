var should = require('should');
var cvMath = require('../js/cvMath.js');
var __ = require('underscore');
var q = '';

var digitToCheck = 4;// num of digit to check value approximately
var getDiff = function(expected, actual){
	var digit = Math.pow(10, digitToCheck);
	var result = Math.round((expected - actual) * digit) / digit;
	return result;
};


//testing variables
//-- group tests1 --
	var tests1_degree = 90;
	var tests1_radian = Math.PI * 0.5;
//-- group tests2 --
	var tests2_polar = {
		r: 2,
		dir: 45,
		til: 45
	};
	var tests2_angular = {
		x: 1,
		y: 1,
		z: Math.sqrt(2)
	};
	var tests2_result_a2p = cvMath.angularToPolar(tests2_angular);
	var tests2_result_p2a = cvMath.polarToAngular(tests2_polar);
//-- group tests3 --
	var tests3_polar1 = {
		  r: 5,
		dir: 45,
		til: 45
	};
	var tests3_polar2 = {
		  r: 5,
		dir: 135,
		til: 315
	};

	var tests3_addition_actual = cvMath.polarAdd(tests3_polar1, tests3_polar2);
	var tests3_addition_expected = {
		  r: 5,
		dir: 90,
		til: 0
	};
	var tests3_multiple_actual = [
		cvMath.polarMult(tests3_polar1,  2),
		cvMath.polarMult(tests3_polar1, -2)
	];
	var tests3_multiple_expected = [
		{
			  r: 10,
			dir: 45,
			til: 45
		}, {
			  r: 10,
			dir: 225,
			til: 315
		}
	];
	

//test definitions
//this module always treats float var.
var testcases = {
	//--group tests1--
	'test of degree -> radian' : {
		expected : cvMath.__degreeToRadian(tests1_degree),
		  actual : tests1_radian
	},
	'test of radian -> degree' : {
		expected : cvMath.__radianToDegree(tests1_radian),
		  actual : tests1_degree
	},
	//--group tests2--
	'test of (angular -> polar).r' : {
		expected : tests2_polar.r,
		  actual : tests2_result_a2p.r
	},
	'test of (angular -> polar).dir' : {
		expected : tests2_polar.dir,
		  actual : tests2_result_a2p.dir
	},
	'test of (angular -> polar).til' : {
		expected : tests2_polar.til,
		  actual : tests2_result_a2p.til
	},
	'test of (polar -> angular).x' : {
		expected : tests2_angular.x,
		  actual : tests2_result_p2a.x
	},
	'test of (polar -> angular).y' : {
		expected : tests2_angular.y,
		  actual : tests2_result_p2a.y
	},
	'test of (polar -> angular).z' : {
		expected : tests2_angular.z,
		  actual : tests2_result_p2a.z
	},
	//--group tests3--
	'test of polarAdd.r' : {
		expected : tests3_addition_expected.r,
		  actual : tests3_addition_actual.r
	},
	'test of polarAdd.dir' : {
		expected : tests3_addition_expected.dir,
		  actual : tests3_addition_actual.dir
	},
	'test of polarAdd.til' : {
		expected : tests3_addition_expected.til,
		  actual : tests3_addition_actual.til
	},
	'test of polarMult(positive).r' : {
		expected : tests3_multiple_expected[0].r,
		  actual : tests3_multiple_actual[0].r
	},
	'test of polarMult(positive).dir' : {
		expected : tests3_multiple_expected[0].dir,
		  actual : tests3_multiple_actual[0].dir
	},
	'test of polarMult(positive).til' : {
		expected : tests3_multiple_expected[0].til,
		  actual : tests3_multiple_actual[0].til
	},
	'test of polarMult(negative).r' : {
		expected : tests3_multiple_expected[1].r,
		  actual : tests3_multiple_actual[1].r
	},
	'test of polarMult(negative).dir' : {
		expected : tests3_multiple_expected[1].dir,
		  actual : tests3_multiple_actual[1].dir
	},
	'test of polarMult(negative).til' : {
		expected : tests3_multiple_expected[1].til,
		  actual : tests3_multiple_actual[1].til
	}
};


describe('test of cvMath.', function(){
	var testcase;
	__.each(testcases,function(testcase, q){
		it(q, function(){
			getDiff(testcase.expected,testcase.actual).should.equal(0);
		});
	});
});