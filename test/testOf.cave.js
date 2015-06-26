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
		"A->B" : {from: "A", to: "B", properties: {weight : [ , , ] }},
		"B->C" : {from: "B", to: "C", properties: {weight : [ , , ] }},
		"A->C" : {from: "A", to: "C", properties: {weight : [ , , ] }},
		"A->D" : {from: "A", to: "D", properties: {weight : [ , , ] }},
		"C->E" : {from: "C", to: "E", properties: {weight : [ , , ] }},
		"C->F" : {from: "C", to: "F", properties: {weight : [ , , ] }},
		"E->G" : {from: "E", to: "G", properties: {weight : [ , , ] }},
		"G->F" : {from: "G", to: "F", properties: {weight : [ , , ] }},
		"G->H" : {from: "G", to: "H", properties: {weight : [ , , ] }},
		"H->I" : {from: "H", to: "I", properties: {weight : [ , , ] }},
		"I->D" : {from: "I", to: "D", properties: {weight : [ , , ] }}
	}
};
var gr = new Graph(structure);
var cv = new Cave(gr,'B');

describe('cave module test.', function(){
	
	q = 'test of findFirstLoop';
	it(q, function(){
		cv.findFirstLoop().toString().should.equal([['C','E','G','F'],['C','F']].toString());
	});

	// q = 'test of createVirtualShortPath';
	// it(q, function(){
	// 	var loop = cv.findFirstLoop();
	// 	cv.createVirtualShortPath(loop).length.should.equal(3);
	// });

	q = 'test of closeFirstLoop';
	it(q, function(){
	});
});