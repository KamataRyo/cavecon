var should = require('should');
var Graph = require('../js/graph.js').Graph;
var WFS = require('../js/search.js').WFS;
var q = '';

// A----->D<---
// |  |       |
// v  v       |
// B->C-->E   I
//    |   |   ^
//    v   v   |
//    F<--G-->H

var structure = {
	"nodes": {
		"A": {},
		"B": {},
		"C": {},
		"D": {},
		"E": {},
		"F": {},
		"G": {},
		"H": {},
		"I": {}
		},
	"edges": {
		"A->B" : {"from": "A", "to": "B"},
		"B->C" : {"from": "A", "to": "C"},
		"A->C" : {"from": "A", "to": "C"},
		"A->D" : {"from": "A", "to": "D"},
		"C->E" : {"from": "C", "to": "E"},
		"C->F" : {"from": "C", "to": "F"},
		"E->G" : {"from": "E", "to": "G"},
		"G->F" : {"from": "G", "to": "F"},
		"G->H" : {"from": "G", "to": "H"},
		"H->I" : {"from": "H", "to": "I"},
		"I->D" : {"from": "I", "to": "D"}
	}
};
var gr = new Graph(structure);
var wfs = new WFS({graph : gr, from : 'A'});


describe('unit test of search.js.', function(){
	q = 'directed wfs should be able to find loop.';
	it(q, function(){
		var result = wfs.search();
		result.loops.length.should.equal(1);
	});
});