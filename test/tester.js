exports.whetherTheyHaveSameContent = function(expected, actual){
	var expectedJSONstring = JSON.stringify(expected);
	var actualJSONstring = JSON.stringify(actual);
	return (expectedJSONstring === actualJSONstring);
};

exports.whetherTheyAreSameObjects = function(expected, actual){
	return (expected === actual);
};