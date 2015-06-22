//{
//	"vertices": {
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
	this.vertices = structure.vertices;
	this.edges = structure.edges;
	this.vertexKeys = Object.keys(structure.vertices);
	this.edgeKeys = Object.keys(structure.edges);

	this.outboundEdges = function(vertex){
		var keys = this.edgeKeys;
		var result = [];
		for (var i = keys.length - 1; i >= 0; i--) {
			if (this.edges[keys[i]].from === vertex) {
				result.push(keys[i]);
			};
		};
		return result;
	};

	this.inboundEdges = function(vertex){
		var keys = this.EdgeKeys;
		var result = [];
		for (var i = keys.length - 1; i >= 0; i--) {
			if (this.edges[keys[i]].to === vertex) {
				result.push(keys[i]);
			};
		};
		return result;
	};

	this.adjacentEdges = function(vertex){
		var keys = this.EdgeKeys;
		var result = [];
		for (var i = keys.length - 1; i >= 0; i--) {
			if (this.edges[keys[i]].from === vertex || this.edges[keys[i]].to === vertex) {
				result.push(keys[i]);
			};
		};
		return result;
	};

	this.outboundVertices = function(vertex){
		var edgeNames = this.outboundEdges(vertex);
		var result = [];
		for (var i = edgeNames.length - 1; i >= 0; i--) {
			result.push(this.edges[edgeNames[i]].to);
		};
		return result;
	};

	this.inboundVertices = function(vertex){
		var edgeNames = this.inboundEdges(vertex);
		var result = [];
		for (var i = edgeNames.length - 1; i >= 0; i--) {
			result.push(this.edges[edgeNames[i]].from);
		};
		return result;
	};

	this.adjacentVertices = function(vertex){
		var edgeNames = this.adjacentEdges(vertex);
		var e;
		var result = [];
		for (var i = edgeNames.length - 1; i >= 0; i--) {
			e = this.edges[edgeNames[i]];
			if (e.from === vertex) {
				result.push(e.to);
			}else{
				result.push(e.from);
			};
		};
		return result;
	};
};