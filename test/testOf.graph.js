var should = require('should');
var Graph = require('../js/graph.js').Graph;
var tester = require('../test/tester.js');

var q = '';
var structure1= {
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
var structure2 = {
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
var gr1 = new Graph(structure1);
var gr2 = new Graph(structure2);


describe('unit test of graph.js.',function(){


	q = 'test of Method getEdges';
	it(q, function(){
		var expected = ['A->B'];
		var actual = gr1.getEdges('A','B');
		tester.whetherTheyHaveSameContent(expected, actual).should.be.exactly(true);
		tester.whetherTheyAreSameObjects(expected, actual).should.be.exactly(false);
	});


	q = 'test of Method outboundEdges';
	it(q, function(){
		var expected = ['A->B'];
		var actual = gr1.outboundEdges('A');
		tester.whetherTheyHaveSameContent(expected, actual).should.be.exactly(true);
		tester.whetherTheyAreSameObjects(expected, actual).should.be.exactly(false);
	});


	q = 'test of Method outboundVertices';
	it(q, function(){
		var expected = ['B'];
		var actual = gr1.outboundVertices('A');
		tester.whetherTheyHaveSameContent(expected, actual).should.be.exactly(true);
		tester.whetherTheyAreSameObjects(expected, actual).should.be.exactly(false);
	});




	q = 'test of Method addVertex, case normal';
	it(q, function(){
		gr2.addVertex('D');
		gr2.structure.vertices.should.have.properties('D');
	});

	//??
	q = 'test of Method addVertex, case error';
	it(q, function(){
		//gr2.addVertex('B').should.throws(error);
	});

	q = 'test of Method addEdge';
	it(q, function(){
		var edge;
		gr2.addVertex('F');
		gr2.addEdge('A','F','A->F');
		gr2.structure.edges.should.have.properties('A->F');
		edge = gr2.structure.edges['A->F']
		edge.should.have.properties('from');
		edge.should.have.properties('to');
		edge.from.should.equal('A');
		edge.to.should.equal('F');
	});


});