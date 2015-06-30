var should = require('should');
var cvMath = require('../js/cvMath.js');
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
		 expections : [cvMath.__degreeToRadian(tests1_degree)],
		actualities : [tests1_radian]
	},
	'test of radian -> degree' : {
		 expections : [cvMath.__radianToDegree(tests1_radian)],
		actualities : [tests1_degree]
	},
	//--group tests2--
	'test of (angular -> polar).r' : {
		 expections : [tests2_polar.r],
		actualities : [tests2_result_a2p.r]
	},
	'test of (angular -> polar).dir' : {
		 expections : [tests2_polar.dir],
		actualities : [tests2_result_a2p.dir]
	},
	'test of (angular -> polar).til' : {
		 expections : [tests2_polar.til],
		actualities : [tests2_result_a2p.til]
	},
	'test of (polar -> angular).x' : {
		 expections : [tests2_angular.x],
		actualities : [tests2_result_p2a.x]
	},
	'test of (polar -> angular).y' : {
		 expections : [tests2_angular.y],
		actualities : [tests2_result_p2a.y]
	},
	'test of (polar -> angular).z' : {
		 expections : [tests2_angular.z],
		actualities : [tests2_result_p2a.z]
	},
	//--group tests3--
	'test of polarAdd.r' : {
		 expections : [tests3_addition_expected.r],
		actualities : [tests3_addition_actual.r]
	},
	'test of polarAdd.dir' : {
		 expections : [tests3_addition_expected.dir],
		actualities : [tests3_addition_actual.dir]
	},
	'test of polarAdd.til' : {
		 expections : [tests3_addition_expected.til],
		actualities : [tests3_addition_actual.til]
	},
	'test of polarMult.r' : {
		 expections : [tests3_multiple_expected.r],
		actualities : [tests3_multiple_actual.r]
	},
	'test of polarMult.dir' : {
		 expections : [tests3_multiple_expected.dir],
		actualities : [tests3_multiple_actual.dir]
	},
	'test of polarMult.til' : {
		 expections : [tests3_multiple_expected.til],
		actualities : [tests3_multiple_actual.til]
	}
};


describe('test of cvMath.', function(){
	var qs = Object.keys(testcases);
	var q, expections, actualities;
	var expected, actual;
	for (var i = qs.length - 1; i >= 0; i--) {
		q = qs[i];
		expections = testcases[q].expections;
		actualities = testcases[q].actualities;
		for (var j = expections.length - 1; j >= 0; j--) {
			expected = expections[j];
			actual = actualities[j];
			it(q, function(){
				getDiff(expected,actual).should.equal(0);
			});
		};
	};
});