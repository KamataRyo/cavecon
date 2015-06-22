exports.BFS = function(arg){
	//breadth first search
	// args = {
	//  graph : Graph object,
	//	initial : str,
	//	terminal : str,
	//  directive : bool
	//};
	this.graph = arg.graph;
	this.initial = arg.initial;
	this.terminal = arg.terminal;
	this.directive = arg.directive;

	this.search = function(){
		var result = {
			path : []
		};
		var gr = this.graph;
		var initial = this.initial;
		var terminal = this.terminal;
		var searched = [initial];//root node
		var nexts;


		var now = searched.shift();
		if (searched.shift() === terminal) {
			return result;
		} else {
			nexts = gr.outboundVertices(initial);
			for (var i = nexts.length - 1; i >= 0; i--) {
				searched.push(nexts[i]);
			};
		};

		

		return result;
	};
};