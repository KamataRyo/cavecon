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

	var findFirstLoop = function(path1, path2){
		var n = Math.min(path1.length, path2.length);
		var c = 0;
		for (var i = 0 ; i < n; i--) {
			if(path1[i] === path2[i]){c++};
		};
		return [];
	};

	this.search = function(){
		var gr = this.graph;
		var initial = this.initial;
		var terminal = this.terminal;

		var visited = [];//memorize visited vertex(node).
		var cue = [initial];//initiate with root vertex. this will be a task cue.

		// result object structure to be returned 
		var result = {
			reachable : false, 
			path : {}, //shortest path to the node named as key
			collided : false,
			collisions : [],//collisions of 2 paths detected on the search
			firstLoop : []
		};
		result.path[initial] = [];

		// temporary variablea
		var next, nexts;
		var prev;
		var col1, col2;

		// bfs loop
		do {
			prev = cue.shift();
			visited.push(prev);
			if (prev === terminal) {//if reached destineation
				//case {ID: ''} allowed, this condition is needed -> (typeof terminal !== 'undefined')
				result.reachable = true;
				break;
			} else {
				nexts = gr.outboundVertices(prev);
				for (var i = nexts.length - 1; i >= 0; i--) {
					next = nexts[i];
					//individual next vertices will be checked whether visited or not.
					if (visited.indexOf(next) === -1) {
						cue.push(next);
						//path to the node will be memorize
						result.path[next] = result.path[prev].concat([prev]);
					} else {
						//path to the node will be memorize additionally to prev.
						//finding visited node means collision detection(loop)
						col1 = result.path[prev].concat([prev, next]);
						col2 = result.path[next].concat(next);
						result.collisions.push([col1,col2]);
					};
				};
			};	
		} while (cue.length > 0);
		
		//paths is being completed with the destination itself.
		var key;
		for (var i = Object.keys(result.path).length - 1; i >= 0; i--) {
			key = Object.keys(result.path)[i];
			result.path[key].push(key);
		};
		//decide first Loop
		col1 = result.collisions[0][0];
		col2 = result.collisions[0][1];
		

		return result;
	};

};