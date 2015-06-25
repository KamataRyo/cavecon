var should = require('should');
var Graph = require('../js/graph.js').Graph;
var Cave = require('../js/cave.js').Cave;
var q = '';


// test graph structure
// |-------|
// |       v
// A----   D<---
// |   |       |
// v   v       |
// B-->C-->E   I
//     |   |   ^
//     v   v   |
//     F<--G-->H
//
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
var cv = new Cave(gr,'B');

describe('cave module test.', function(){
	q = 'test of findFirstLoop';
	it(q, function(){
		cv.findFirstLoop().toString().should.equal([['C','E','G','F'],['C','F']].toString());
	});
});