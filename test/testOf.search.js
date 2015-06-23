var should = require('should');
var Graph = require('../js/graph.js').Graph;
var BFS = require('../js/search.js').BFS;
var q = '';

// |-------|
// |       v
// A----   D<---
// |   |       |
// v   v       |
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
		"B->C" : {"from": "B", "to": "C"},
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

describe('unit test of search.js.', function(){
	q = 'directed wfs reachability test.';
	it(q, function(){
		var bfs1 = new BFS({graph : gr, initial : 'B', terminal : 'D' });
		var bfs2 = new BFS({graph : gr, initial : 'C', terminal : 'B' });
		var result1 = bfs1.search();
		var result2 = bfs2.search();
		result1.reachable.should.equal(true);
		result2.reachable.should.equal(false);
	});

	q = 'wfs searching history test.';
	it(q, function() {
		var bfs = new BFS({graph : gr, initial : 'C', terminal : 'D'});
		var result = bfs.search();
		result.path['D'].toString().should.equal(['C','E','G','H','I','D'].toString());
	});

	q = 'collision detecting';
	it(q, function(){
		var bfs = new BFS({graph : gr, initial : 'A' , terminal : 'F'});
		var result = bfs.search();
		result.collisions[0].toString().should.equal([['A','B','C'],['A','C']].toString());
	});


});













