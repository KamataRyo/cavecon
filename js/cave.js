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
		if (!result.collided) {return ['aaa']};

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
};
