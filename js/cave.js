var Graph = require('../js/graph.js').Graph;
var BFS = require('../js/search.js').BFS;

	
exports.Cave = function(graph,entry){
	this.graph = graph;
	this.entry = entry;
	this.findFirstLoop = function(){
		var bfs = new BFS({
			graph : this.graph,
			initial : this.entry,
			});
		var result = bfs.search();
		if (!result.collided) {return null;};

		var path1 = result.collisions[0][0];
		var path2 = result.collisions[0][1];
		//path1 : xxxxxxxabcdef
		//path2 : xxxxxxxaghf
		//result : [[abcdef],[aghf]]
		var n = Math.min(path1.length, path2.length);
		for (var i = 1 ; i < n; i++) {
			if (path1[i] === path2[i]) {
				path1.splice(i - 1, 1);
				path2.splice(i - 1, 1);
				n--;
				i--;
			};
		};
		return [path1, path2];
	};
	this.createVirtualShortPath = function(loop){
		//loop : [[abcdef],[aghf]]
		//reseult : [[ab],[ac],[ad],[ae],[ag],[ah],[af]]
		var result = [];
		var path1 = loop[0];
		var path2 = loop[1];
		var n1 = path1.length;
		var n2 = path2.length;
		var initial = path1[0];
		var terminal = path1[n1 - 1];
		for (var i = 1 ; i < n1 - 1; i++) {
			result.push([initial, path1[n1]]);
		};
		for (var i = 1 ; i < n2 - 1; i++) {
			result.push([initial, path2[n2]]);
		};
		result.push([initial, terminal]);

		return result;
	};

	this.closeFirstLoop = function(){
		var gr = new Graph(this.graph.structure);

		return gr;
	};
};
