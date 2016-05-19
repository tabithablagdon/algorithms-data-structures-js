// Simpler Graph Class implentation using an object as the adjacent list

// Adjacent List representation

var Graph = function() {
  this.vertices = [];
  this.adjList = {};
};

Graph.prototype = {
  constructor: Graph, 
  addVertex: function(v) {
    this.vertices.push(v);
    this.adjList[v] = [];
  },
  // add edge between two vertices
  addEdge: function(v, w) {
    this.adjList[v].push(w);
    this.adjList[w].push(v); // not needed for a directed graph only undirected
  }, 
  toString: function() {
    var str = '';
    for (var i = 0; i < this.vertices.length; i++) {
      str += this.vertices[i] + ' -> ';
      var neighbors = this.adjList[this.vertices[i]];
      for (var j = 0; j < neighbors.length; j++) {
        str += neighbors[j] + ' ';	
      }
      str += '\n';
    }
    return str;
  }
};


var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I']; //{7}
for (var i=0; i<myVertices.length; i++){ //{8}
  graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());
