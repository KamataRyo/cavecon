var __ = require('underscore');
//{
//	"vertices": {
//		"A": {"properties": "You can put any vertices properies here."},
//		"B": {},
//		"C": {}
//		},
//	"edges": {
//		"A->B" : {"from": "A", "to": "B"},
//		"B->C" : {"from": "B", "to": "C"},
//		"C->A" : {"from": "C", "to": "A", properties : {"weight" : {x:x, y:y, z:z}, ...}}
//	}
//}


exports.Graph =function(structure){
	this.structure = structure;
	this.vertices = structure.vertices;
	this.edges = structure.edges;
	//this.vertexKeys = Object.keys(structure.vertices);
	//this.edgeKeys = Object.keys(structure.edges);

	this.getEdges = function(from, to){
		var result = [];
		__.each(this.edges, function(edge, key){
			var where = (edge.from === from) && (edge.to === to);
			if (where) {
				result.push(key);
			};
		});
		return result;
	};

	
	this.outboundEdges = function(vertex){
		var result = [];
		__.each(this.edges, function(edge, key){
			var where = (edge.from === vertex);
			if (where) {
				result.push(key);
			};
		});
		return result;
	};

	this.outboundVertices = function(vertex){
		var result = [];
		__.each(this.edges, function(edge){
			var where = (edge.from === vertex);
			if (where) {
				result.push(edge.to);
			};
		});
		return result;
	};



	this.addVertex = function(value){
		if (__.contains(
			__.keys(this.vertices),
			value)
		) {
			throw new Error('Vertex name duplication error');
		};
		this.vertices[value] = {};
	};

	this.addEdge = function(from, to, key){
		if (__.contains(
			__.keys(this.edges),
			key)
		) {
			throw new Error('Edge name duplication error');
		};

		if (!__.contains(
			 __.keys(this.vertices),
			 from) ||
			!__.contains(
			__.keys(this.vertices),
			to)
		) {
			throw new Error('Vertex name notfound error');
		};

		this.edges[key] = {from : from, to : to};
	}
};