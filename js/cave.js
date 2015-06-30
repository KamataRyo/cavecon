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

	this.cloneGraph = function(gr){
		var str = gr.structure;
		var str_copied = JSON.parse(JSON.stringify(str));
		var gr = new Graph(str_copied, this.entry);
		return gr;
	};

	this.closeFirstLoop = function(gr, ent){
		var bfs = new BFS({
			  graph : gr,
			initial : ent
		});
		console.log(gr);
		var result = bfs.search();

		// var fixed;
		// var vertices = Object.keys(this.structure.vertices);
		// var vertex;
		// for (var i = 0 ; i < vertices.length ; i++) {
		// 	vertex = vertices[i];
		// 	fixed[vertex] = false;
		// };

		// var path1, path2;
		// var weight1, weight2;
		// var n1, n2;
		// var newGraph;
		// var oldGraph = gr;
		// while (result.collsisions.length > 0) {

		// 	path1 = result.collisions[0][0];
		// 	path2 = result.collisions[0][1];
		// 	n1 = path1.length;
		// 	n2 = path2.length;
		// 	for (var i = 1 ; i < n1 - 1 ; i++) {
			 	
		// 	 };

		// 	// newSpideredGraph = 
		// 	//bfs = new BFS({
		// 	// 	graph : newSpideredGraph,
		// 	// 	initial : this.entry
		// 	//});

		// };

		return result;
	};
};
