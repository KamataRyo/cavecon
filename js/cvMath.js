
var degreeToRadian = function(degree){
	return Math.PI * degree / 180;
};

var radianToDegree = function(radian){
	return radian * 180 / Math.PI;
};

var angularToPolar = function(angular){
	var result = {};
	var projected_r = Math.sqrt(
		Math.pow(angular.x, 2) +
		Math.pow(angular.y, 2)
	);
	result.r = Math.sqrt(
		Math.pow(angular.x, 2) +
		Math.pow(angular.y, 2) +
		Math.pow(angular.z, 2)
	);
	result.til = radianToDegree(Math.asin(angular.z / result.r));
	result.dir = radianToDegree((Math.PI * 0.5) - Math.asin(angular.y / projected_r));
	return result;
};

var polarToAngular = function(polar){
	var result = {};
	result.x = polar.r * Math.cos(degreeToRadian(polar.til)) * Math.cos(degreeToRadian(polar.dir));	
	result.y = polar.r * Math.cos(degreeToRadian(polar.til)) * Math.sin((Math.PI * 0.5) - degreeToRadian(polar.dir));
	result.z = polar.r * Math.sin(degreeToRadian(polar.til));	
	return result;
};


exports.weightAdd = function(e1, e2){
	var w1, w2, r1, r2;
	var x,y,z;
	var result = {};

	w1 = e1.weight;
	w2 = e2.weight;
	r1 = e1.residuals;
	r2 = e2.residuals;
};

exports.__degreeToRadian = degreeToRadian;
exports.__radianToDegree = radianToDegree;
exports.angularToPolar = angularToPolar;
exports.polarToAngular = polarToAngular;