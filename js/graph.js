//{
//	"nodes": {
//		"A": {"property": "You can put any vertices propery here."},
//		"B": {},
//		"C": {}
//		},
//	"edges": {
//		"A->B" : {"from": "A", "to": "B"},
//		"B->C" : {"from": "B", "to": "C"},
//		"C->A" : {"from": "C", "to": "A", "weight" : {x:x, y:y, z:z}}
//	}
//}


exports.Graph =function(structure){
	this.nodes = structure.nodes;
	this.edges = structure.edges;
	this.NodeKeys = Object.keys(this.nodes);
	this.EdgeKeys = Object.keys(this.edges);

	this.outboundEdges = function(node){
		var keys = this.EdgeKeys;
		var result = [];
		for (var i = keys.length - 1; i >= 0; i--) {
			if (this.edges[keys[i]].from === node) {
				result.push(keys[i]);
			};
		};
		return result;
	};

	this.inboundEdges = function(node){
		var keys = this.EdgeKeys;
		var result = [];
		for (var i = keys.length - 1; i >= 0; i--) {
			if (this.edges[keys[i]].to === node) {
				result.push(keys[i]);
			};
		};
		return result;
	};

	this.adjacentEdges = function(node){
		var keys = this.EdgeKeys;
		var result = [];
		for (var i = keys.length - 1; i >= 0; i--) {
			if (this.edges[keys[i]].from === node || this.edges[keys[i]].to === node) {
				result.push(keys[i]);
			};
		};
		return result;
	};

	this.outboundVertices = function(node){
		var edgeNames = this.outboundEdges(node);
		var result = [];
		for (var i = edgeNames.length - 1; i >= 0; i--) {
			result.push(this.edges[edgeNames[i]].to);
		};
		return result;
	};

	this.inboundVertices = function(node){
		var edgeNames = this.inboundEdges(node);
		var result = [];
		for (var i = edgeNames.length - 1; i >= 0; i--) {
			result.push(this.edges[edgeNames[i]].from);
		};
		return result;
	};

	this.adjacentVertices = function(node){
		var edgeNames = this.adjacentEdges(node);
		var e;
		var result = [];
		for (var i = edgeNames.length - 1; i >= 0; i--) {
			e = this.edges[edgeNames[i]];
			if (e.from === node) {
				result.push(e.to);
			}else{
				result.push(e.from);
			};
		};
		return result;
	};
};