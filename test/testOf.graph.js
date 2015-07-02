var should = require('should');
var Graph = require('../js/graph.js').Graph;
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
		gr.getEdges('A','B')[0].should.equal('A->B');
	});



	q = 'test of Method outboundEdges';
	it(q, function(){
		gr.outboundEdges('A').toString().should.equal(['A->B'].toString());
	});


	q = 'test of Method outboundVertices';
	it(q, function(){
		gr.outboundVertices('A').toString().should.equal(['B'].toString());
	});

});