var __ = require('underscore');
var o = {};

for (var i = 0 ; i < 100000; i++) {
	o[i.toString() * 100] = i;
};
	o['aaa'] = {to:1, from:2};
	o['bbb'] = {to:1, from:3};


var the_underscore = function(obj){
	var result = 0;
	__.each(obj, function(arg1){
		result += arg1;
	});
	return result;
};

var the_normal = function(obj){
	var result = 0;
	var keys = Object.keys(obj);
	for (var i = 0 ; i < keys.length ; i++) {
		result += obj[keys[i]];
	};
	return result;
};

console.log(__.findKey(o, {from : 3}));

console.time('function1');
the_underscore(o);
console.timeEnd('function1');

console.time('function2');
the_normal(o);
console.timeEnd('function2');



var a = 'aaa';
var ls = [1,2,3,4,5];

__.each(ls,function(item){
	console.log(a,ls);
});


