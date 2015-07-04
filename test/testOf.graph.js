var should = require('should');
var Graph = require('../js/graph.js').Graph;
var tester = require('../test/tester.js');

var q = '';
var structure = {
	vertices: {
		"A": {},
		"B": {},
		"C": {}
		},
	edges: {
		"A->B" : {"from": "A", "to": "B"},
		"B->C" : {"from": "B", "to": "C"},
		"C->A" : {"from": "C", "to": "A"}
	}
};
var gr = new Graph(structure);




describe('unit test of graph.js.',function(){


	q = 'test of Method getEdges';
	it(q, function(){
		var expected = ['A->B'];
		var actual = gr.getEdges('A','B');
		tester.whetherTheyHaveSameContent(expected, actual).should.be.exactly(true);
		tester.whetherTheyAreSameObjects(expected, actual).should.be.exactly(false);
	});

	q = 'test of Method outboundEdges';
	it(q, function(){
		var expected = ['A->B'];
		var actual = gr.outboundEdges('A');
		tester.whetherTheyHaveSameContent(expected, actual).should.be.exactly(true);
		tester.whetherTheyAreSameObjects(expected, actual).should.be.exactly(false);
	});


	q = 'test of Method outboundVertices';
	it(q, function(){
var expected = ['B'];
		var actual = gr.outboundVertices('A');
		tester.whetherTheyHaveSameContent(expected, actual).should.be.exactly(true);
		tester.whetherTheyAreSameObjects(expected, actual).should.be.exactly(false);
	});

});