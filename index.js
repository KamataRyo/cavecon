var Graph = require('node-graph');
var structure = {
	nodes: [
		{name: 'A'},
		{name: 'B'},
		{name: 'C'}
		],
	edges: [
		{name: 'A->B', from: 'A', to: 'B'},
		{name: 'B->C', from: 'B', to: 'C'},
		{name: 'C->A', from: 'C', to: 'A'}

	]
}
var gr = new Graph(structure);
console.log(gr.outboundEdges('A'));
console.log(gr.inboundEdges('A'));

// function Edge(from, to) {
// 	this.from = from;
// 	this.to = to; 
// 	//this.is_entrance = false;
// 	//this.is_trank = true;
// 	// this.setValue = function(distance,direction,tilt) {
//  //    	this.distance = distance;
//  //    	this.direction = direction;
//  //    	this.tilt = tilt;
// 	// };
// }

// function Edges(edges){
// 	var result = [];
// 	for (var i = edges.length - 1; i >= 0; i--) {
// 		result[edges[i].to] = edges[i];
// 	};
// 	this.edges = result;
// }

// var c = new Edges([
// 	new Edge(1,2),
// 	new Edge(2,3),
// 	new Edge(3,1)
// 	]);
// console.log(c);


var cave = {
	"p0" : {
		"from" : "p0",
		"dist" : 0,
		"dirc" : 50,
		"tilt" : 15,
		"is_entrance" : true,
		"is_trank" : true

	},
	"p1" : {
		"from" :  "p0",
		"dist" : 100,
		"dirc" : 50,
		"tilt" : 15,
		"is_entrance" : false,
		"is_trank" : true
	},
	"p2" : {
		"from" :  "p1",
		"dist" : 60,
		"dirc" : 50,
		"tilt" : 15,
		"is_entrance" : false,
		"is_trank" : true
	},
	"p2_1" : {
		"from" :  "p2",
		"dist" : 60,
		"dirc" : 50,
		"tilt" : 15,
		"is_entrance" : false,
		"is_trank" : false
	},
	"p2_2" : {
		"from" :  "p2",
		"dist" : 60,
		"dirc" : 140,
		"tilt" : 15,
		"is_entrance" : false,
		"is_trank" : false
	},
	"p2_3" : {
		"from" :  "p2",
		"dist" : 60,
		"dirc" : 230,
		"tilt" : 15,
		"is_entrance" : false,
		"is_trank" : false
	},
	"p2_4" : {
		"from" :  "p2",
		"dist" : 60,
		"dirc" : 320,
		"tilt" : 15,
		"is_entrance" : false,
		"is_trank" : false
	}
};