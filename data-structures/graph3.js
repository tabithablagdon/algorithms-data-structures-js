// Abstract Implementation of Graph Class
// AdjacentList Method
//// Uncomment console.logs in bfs and dfs methods to help follow search flow


var Graph = function() {
  this.vertices = [];
  // dictionary will store name of vertex as key and list of adjacent vertices as a value
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
  }, 
  bfs: function(v, callback) {
  	var verticesArr = this.vertices;
  	
  	// initialize an array 'colors' representing each vertices to track visited vertices
  	//// white - not visited
  	//// grey - discovered, but not explored
  	//// black - explored (closed out)
  	
    var initializer = function() {
      var color = [];
      for (var i = 0; i < verticesArr.length; i++) {
        color[verticesArr[i]] = 'white';	
      }
      return color;
    };
    
    var colorVertices = initializer();
    var queue = [];
    var d = [];
    var pred = [];
    
    queue.push(v); // start search 
    // console.log('BFS STARTING AT VERTEX: ' + v + '\n');
    
    for (var i = 0; i < verticesArr.length; i++) {
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }
    
    while (queue.length !== 0) {
      var u = queue.shift();
      var neighbors = this.adjList[u]; 
      
      colorVertices[u] = 'grey';
      // console.log('NOW VISITING: ' + u);
      
      for (i = 0; i < neighbors.length; i++) {
        if (colorVertices[neighbors[i]] === 'white') {
          // console.log(neighbors[i] + ' is white - not visited');
          colorVertices[neighbors[i]] = 'grey';
          // console.log(neighbors[i] + ' is now marked grey and added to queue');
          d[neighbors[i]] = d[u] + 1;
          pred[neighbors[i]] = u;
          
          queue.push(neighbors[i]);
        }  	
      }
      
      colorVertices[u] = 'black';
      // console.log('Queue is now ' + queue);
      
      if (callback) { // optional - will execute if one passed
        callback(u);	
      }
      return {
        distances: d, 
        predecessors: pred
      };
    }
  }
};

var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I']; //{7}
for (var i=0; i<myVertices.length; i++){ //{8}
  graph.addVertex(myVertices[i]);
}

var print = function(val) {
  console.log('EXPLORED VERTEX: ' + val + '\n');	
};

graph.addEdge('A', 'B');
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

// A -> B C D 
// B -> A E F 
// C -> A D G 
// D -> A C G H 
// E -> B I 
// F -> B 
// G -> C D 
// H -> D 
// I -> E

graph.bfs(myVertices[0], print);

// EXPLORED VERTEX: A
// EXPLORED VERTEX: B
// EXPLORED VERTEX: C
// EXPLORED VERTEX: D
// EXPLORED VERTEX: E
// EXPLORED VERTEX: F
// EXPLORED VERTEX: G
// EXPLORED VERTEX: H
// EXPLORED VERTEX: I
