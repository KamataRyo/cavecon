var __ = require('underscore');

exports.BFS = function(arg){
	//breadth first search 幅優先探索
	// args = {
	//  graph : Graph object,
	//	initial : vertex id as str,
	//	terminal : vertex id as str
	//};
	this.graph = arg.graph;
	this.initial = arg.initial;
	this.terminal = arg.terminal;

	this.search = function(){
		var gr = this.graph;
		var initial = this.initial;
		var terminal = this.terminal;

		var visited = [];//memorize visited vertex(node).
		var cue = [initial];//initiate with root vertex. this will be a task cue.

		// result object structure to be returned 
		var result = {
			reachable : false, 
			paths : {}, //shortest paths to the node named as key
			collided : false,
			collisions : []//collisions of 2 paths detected on the search
		};
		result.paths[initial] = [];

		// temporary variablea
		var next, nexts;
		var prev;
		//var col1, col2;

		// bfs loop
		root: do {
			prev = cue.shift();
			visited.push(prev);
			if (prev === terminal) {//if reached destineation
				//case {ID: ''} allowed, this condition is needed -> (typeof terminal !== 'undefined')
				result.reachable = true;
				break root;
			} else {
				nexts = gr.outboundVertices(prev);
				for (var i = nexts.length - 1; i >= 0; i--) {
					next = nexts[i];
					//individual next vertices will be checked whether visited or not.
					if (visited.indexOf(next) === -1) {
						cue.push(next);
						//paths to the node will be memorize
						result.paths[next] = result.paths[prev].concat([prev]);
					} else {
						//paths to the node will be memorize additionally to prev.
						//finding visited node means collision detection(loop)
						col1 = result.paths[prev].concat([prev, next]);
						col2 = result.paths[next].concat(next);
						result.collided = true;
						result.collisions.push([col1,col2]);
					};
				};
			};	
		} while (cue.length > 0);
		
		//path to the point will end with itself
		__.each(result.paths, function(value, key, me){
			me[key].push(key);
		});

		return result;
	};

};