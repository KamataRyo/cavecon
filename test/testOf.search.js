var should = require('should');
var Graph = require('../js/graph.js').Graph;
var BFS = require('../js/search.js').BFS;
var q = '';

// |-------|
// |       v
// A<---   D<---
// |   |       |
// v   |       |
// B-->C-->E   I
//     |   |   ^
//     v   v   |
//     F<--G-->H

var structure = {
	"vertices": {
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
		"C->A" : {"from": "C", "to": "A"},
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

describe('unit test of search.js.', function(){
	q = 'directed wfs should be able to find the first loop.';
	it(q, function(){
		var bfs = new BFS({graph : gr, initial : 'A', terminal : 'D', directive : true});
		var result = bfs.search();
		result.path.should.equal(['A->B','B->C','C->E','E->G','G->H','H->I','I->D'].toString());
	});
});