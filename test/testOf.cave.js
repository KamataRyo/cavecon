var should = require('should');
var Graph = require('../js/graph.js').Graph;
var Cave = require('../js/cave.js').Cave;
var q = '';
var whetherTheyHaveSameContent = function(expected, actual){
	var expectedJSONstring = JSON.stringify(expected);
	var actualJSONstring = JSON.stringify(actual);
	return (expectedJSONstring === actualJSONstring);
};
var whetherTheyAreSameObjects = function(expected, actual){
	return (expected === actual);
};
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
		"A->B" : {from: "A", to: "B", weight : {r:1, dir:1 ,til:1}, residuals : {r:1, dir:1 ,til:1}},
		"B->C" : {from: "B", to: "C", weight : {r:1, dir:1 ,til:1}, residuals : {r:1, dir:1 ,til:1}},
		"A->C" : {from: "A", to: "C", weight : {r:1, dir:1 ,til:1}, residuals : {r:1, dir:1 ,til:1}},
		"A->D" : {from: "A", to: "D", weight : {r:1, dir:1 ,til:1}, residuals : {r:1, dir:1 ,til:1}},
		"C->E" : {from: "C", to: "E", weight : {r:1, dir:1 ,til:1}, residuals : {r:1, dir:1 ,til:1}},
		"C->F" : {from: "C", to: "F", weight : {r:1, dir:1 ,til:1}, residuals : {r:1, dir:1 ,til:1}},
		"E->G" : {from: "E", to: "G", weight : {r:1, dir:1 ,til:1}, residuals : {r:1, dir:1 ,til:1}},
		"G->F" : {from: "G", to: "F", weight : {r:1, dir:1 ,til:1}, residuals : {r:1, dir:1 ,til:1}},
		"G->H" : {from: "G", to: "H", weight : {r:1, dir:1 ,til:1}, residuals : {r:1, dir:1 ,til:1}},
		"H->I" : {from: "H", to: "I", weight : {r:1, dir:1 ,til:1}, residuals : {r:1, dir:1 ,til:1}},
		"I->D" : {from: "I", to: "D", weight : {r:1, dir:1 ,til:1}, residuals : {r:1, dir:1 ,til:1}}
	}
};

var gr = new Graph(structure);
var cv = new Cave(gr,'B');




var loopClosingGraph = [
	{
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
			"A->B" : {"from": "A", "to": "B", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"B->C" : {"from": "B", "to": "C", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"A->C" : {"from": "A", "to": "C", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"A->D" : {"from": "A", "to": "D", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"C->E" : {"from": "C", "to": "E", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"C->F" : {"from": "C", "to": "F", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"E->G" : {"from": "E", "to": "G", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"G->F" : {"from": "G", "to": "F", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"G->H" : {"from": "G", "to": "H", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"H->I" : {"from": "H", "to": "I", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"I->D" : {"from": "I", "to": "D", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}}
		}
	},{
		"vertices": {
			"A": {},
			"B": {},
			"C": {},
			"D": {},
			"E": {},
			"F": {},
			"G": {},
			},
		"edges": {
			"A->B" : {"from": "A", "to": "B", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},

			"A->C" : {"from": "A", "to": "C", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"A->D" : {"from": "A", "to": "D", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"C->E" : {"from": "C", "to": "E", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"C->F" : {"from": "C", "to": "F", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"E->G" : {"from": "E", "to": "G", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"G->F" : {"from": "G", "to": "F", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"G->H" : {"from": "G", "to": "H", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"H->I" : {"from": "H", "to": "I", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"I->D" : {"from": "I", "to": "D", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}}
		}
	},{
		"vertices": {
			"A": {},
			"B": {},
			"C": {},
			"D": {},
			"E": {},
			"F": {},
			"G": {},
			},
		"edges": {
			"A->B" : {"from": "A", "to": "B", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},

			"A->C" : {"from": "A", "to": "C", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"A->D" : {"from": "A", "to": "D", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"C->E" : {"from": "C", "to": "E", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"C->F" : {"from": "C", "to": "F", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"E->G" : {"from": "E", "to": "G", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},

			"G->H" : {"from": "G", "to": "H", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"H->I" : {"from": "H", "to": "I", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"I->D" : {"from": "I", "to": "D", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}}
		}
	},{
		"vertices": {
			"A": {},
			"B": {},
			"C": {},
			"D": {},
			"E": {},
			"F": {},
			"G": {},
			},
		"edges": {
			"A->B" : {"from": "A", "to": "B", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},

			"A->C" : {"from": "A", "to": "C", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"A->D" : {"from": "A", "to": "D", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"C->E" : {"from": "C", "to": "E", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"C->F" : {"from": "C", "to": "F", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"E->G" : {"from": "E", "to": "G", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},

			"G->H" : {"from": "G", "to": "H", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}},
			"H->I" : {"from": "H", "to": "I", "weight" : {"r":1, "dir":1 ,"til":1}, "residuals" : {"r":1, "dir":1 ,"til":1}}

		}
	}
]



describe('cave module test.', function(){
	
	q = 'test of findFirstLoop';
	it(q, function(){
		var expected = [['C','E','G','F'],['C','F']];
		var actual = cv.findFirstLoop();
		whetherTheyHaveSameContent(expected, actual).should.be.exactly(true);
		whetherTheyAreSameObjects(expected, actual).should.be.exactly(false);
	});
	
	q = 'test of cloneGraph';
	it(q, function(){
		var expected = cv.graph;
		var actual = cv.cloneGraph(cv.graph);
		whetherTheyHaveSameContent(expected, actual).should.be.exactly(true);
		whetherTheyAreSameObjects(expected, actual).should.be.exactly(false);
	});

	q = 'test of closeFirstLoop';
	it(q, function(){
		var expectations = [
			cv.closeFirstLoop(loopClosingGraph[0], 'A'),
			cv.closeFirstLoop(loopClosingGraph[1], 'A'),
		];
		var actualities = [
			loopClosingGraph[1],
			loopClosingGraph[2]
		];
		var expected, actual;

		for (var i = 0 ; i < expectations.length ; i++) {
			expected = expectations[i];
			actual = actualities[i];
			whetherTheyHaveSameContent(expected, actual).should.be.exactly(true);
			whetherTheyAreSameObjects(expected, actual).should.be.exactly(false);
		};
		//実装方針
		//ループがなくなるまで、回す
		//最初のループが発見された時、
		//path1のweight合計と、path2のweight合計の差を計算し、すべての辺に分配
		//真の重さをweight+resudualsとし、ループ→蜘蛛の巣に展開したcloneオブジェクトを作成
		//新しいグラフをセットし、再度ループする
	});
});