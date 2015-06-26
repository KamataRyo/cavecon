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
		"A->B" : {from: "A", to: "B", weight : [ , , ], residuals : [ , , ]},
		"B->C" : {from: "B", to: "C", weight : [ , , ], residuals : [ , , ]},
		"A->C" : {from: "A", to: "C", weight : [ , , ], residuals : [ , , ]},
		"A->D" : {from: "A", to: "D", weight : [ , , ], residuals : [ , , ]},
		"C->E" : {from: "C", to: "E", weight : [ , , ], residuals : [ , , ]},
		"C->F" : {from: "C", to: "F", weight : [ , , ], residuals : [ , , ]},
		"E->G" : {from: "E", to: "G", weight : [ , , ], residuals : [ , , ]},
		"G->F" : {from: "G", to: "F", weight : [ , , ], residuals : [ , , ]},
		"G->H" : {from: "G", to: "H", weight : [ , , ], residuals : [ , , ]},
		"H->I" : {from: "H", to: "I", weight : [ , , ], residuals : [ , , ]},
		"I->D" : {from: "I", to: "D", weight : [ , , ], residuals : [ , , ]}
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
	
	q = 'test of cloneGraph';
	it(q, function(){
		cv.cloneGraph().toString().should.equal(cv.graph.toString());
		cv.cloneGraph().should.not.equal(cv.graph);
	});

	q = 'test of closeFirstLoop';
	it(q, function(){
		//実装方針
		//ループがなくなるまで、回す
		//最初のループが発見された時、
		//path1のweight合計と、path2のweight合計の差を計算し、すべての辺に分配
		//真の重さをweight+resudualsとし、ループ→蜘蛛の巣に展開したcloneオブジェクトを作成
		//新しいグラフをセットし、再度ループする
	});
});