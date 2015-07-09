var Graph = require('../js/graph.js').Graph;
var BFS = require('../js/search.js').BFS;
var __ = require('underscore');
var cvMath = require('../js/cvMath.js');

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

	//create deepcopy of graph
	this.cloneGraph = function(gr){
		var str = gr.structure;
		var str_copied = JSON.parse(JSON.stringify(str));
		var gr = new Graph(str_copied, this.entry);
		return gr;
	};

	this.closeFirstLoop = function(old_graph, ent, exceptions){
		//do bfs for old graph
		var bfs = new BFS({
			  graph : old_graph,
			initial : ent
		});
		var search_result = bfs.search();

		//initiate result of this method by clone
		//new_graph will be transformed during this procedure
		var new_graph = this.cloneGraph(old_graph);

		__.each(old_graph.structure.vertices, function(value, key){
			exceptions[key] = false;
		});


		if (search_result.collisions.length === 0) {
		 	return new_graph;
		};


		var path1 = search_result.collisions[0][0];
		var path2 = search_result.collisions[0][1];
		var n1, n2;
		n1 = path1.length;
		n2 = path2.length;
		var from, to, edgename, edge, weightInd;

		var weightSum = {r:0, dir:0, til:0};
		var base;
		var edgelengths = {};
		

		if (path1[0] !== path2[0]) {
			from = path1[0];
			to = path2[0];
			edgename = old_graph.getEdges(from, to)[0];
			edge = old_graph.edges[edgename];
			base = cvMath.polarAdd(edge.weight,edge.residuals);
			edgelengths[edgename] = 0;
		} else {
			base = {r:0, dir:0, til:0};
		};

		//sum weight and residuals inside cave loop
		for (var i = 0 ; i < n1 - 1 ; i++) {
				from = path1[i];
				to = path1[i + 1];
				edgename = old_graph.getEdges(from, to)[0];
				edge = old_graph.edges[edgename];
				weightInd = cvMath.polarAdd(edge.weight, edge.residuals);
			 	weightSum = cvMath.polarAdd(weightSum, weightInd);
			 	edgelengths[edgename] = weightInd.r;
		};
		for (var i = 0 ; i < n2 - 1 ; i++) {
				from = path2[i];
				to = path1[i + 1];
				edgename = old_graph.getEdges(from, to)[0];
				edge = old_graph.edges[edgename];
				weightInd = cvMath.polarAdd(edge.weight, edge.residuals);
			 	weightSum = cvMath.polarAdd(weightSum, weightInd);
			 	edgelengths[edgename] = weightInd.r;
		};

		//split weight base on edgelengths(propotional)
		var lengthsSum;
		var lengthsRate;
		var residuals;
		lengthsSum = 0;
		__.each(edgelengths,function(value, key){
			if (!exceptions[key]) {
				lengthsSum += value;
			};
		});
		__.each(edgelengths,function(value, key){
			if (!exceptions[key]) {
				lengthsRate = value / lengthsSum;
				residuals = old_graph.edges[key].residuals;
				resuduals = cvMath.polarAdd(
					residuals,
					cvMath.polarMult(weightSum, lengthsRate)	
				);
				exceptions[key] = true;	
			};
		});

		weightSum = {r:0, dir:0, til:0};
		for (var i = 0 ; i < n1 - 1 ; i++) {
				for (var j = 0 ; j< i + 1 ; j++) {
					edgename = old_graph.getEdges(path1[j],path1[j + 1]);
					edge = old_graph.edges[edgename];
					weightInd = cvMath.polarAdd(edge.weight, edge.residuals);
					weightSum = cvMath.polarAdd(weightSum, weightInd);
				};
				from = path1[i];
				to = path1[i + 1];
				edgename = old_graph.getEdges(from, to)[0];
				delete new_graph.edges[edgename];
				new_graph.addEdge(path1[0],path1[i],edgename);
				new_graph.edges[edgename].weight = weightSum;
		};
		//case of (i === n2 -1) duplicates above 
		for (var i = 0 ; i < n2 - 2 ; i++) {
				for (var j = 0 ; j< i + 1 ; j++) {
					edgename = old_graph.getEdges(path2[j],path2[j + 1]);
					edge = old_graph.edges[edgename];
					weightInd = cvMath.polarAdd(edge.weight, edge.residuals);
					weightSum = cvMath.polarAdd(weightSum, weightInd);
				};
				from = path2[i];
				to = path2[i + 1];
				edgename = old_graph.getEdges(from, to)[0];
				delete new_graph.edges[edgename];
				new_graph.addEdge(path2[0],path2[i],edgename);
				new_graph.edges[edgename].weight = weightSum;
		};
		console.log('new:');
		console.log(JSON.stringify(old_graph));
		console.log('old:');
		console.log(JSON.stringify(new_graph));

		return new_graph;
	};
};
