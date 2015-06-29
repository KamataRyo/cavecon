
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
	result.x = polar.r * Math.cos(degreeToRadian(polar.til)) * Math.cos((Math.PI * 0.5) - degreeToRadian(polar.dir));	
	result.y = polar.r * Math.cos(degreeToRadian(polar.til)) * Math.sin((Math.PI * 0.5) - degreeToRadian(polar.dir));
	result.z = polar.r * Math.sin(degreeToRadian(polar.til));	
	return result;
};


exports.polarAdd = function(polar1, polar2){
	var angular1 = polarToAngular(polar1);
	var angular2 = polarToAngular(polar2);
	var angularAddition = {
		x : angular1.x + angular2.x ,
		y : angular1.y + angular2.y ,
		z : angular1.z + angular2.z
	};
	var result = angularToPolar(angularAddition);
	console.log(angular1, angular2,result);
	return result;
};

exports.__degreeToRadian = degreeToRadian;
exports.__radianToDegree = radianToDegree;
exports.angularToPolar = angularToPolar;
exports.polarToAngular = polarToAngular;