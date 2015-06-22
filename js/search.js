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
		var searched = [];
		var cue = [initial];//root node
		var next, nexts;
		var from;
		var result = {
			reachable : false,
			searchOrder : []
		};

		do {
			from = cue.shift();
			searched.push(from);
			result.searchOrder.push(from);

			if (from === terminal) {
				result.reachable = true;
				break;
			} else {
				nexts = gr.outboundVertices(from);
				for (var i = nexts.length - 1; i >= 0; i--) {
					next = nexts[i];
					if (searched.indexOf(next)) {
						cue.push(next);
					};
				};
			};	
		} while (cue.length > 0);
		return result;
	};
};