// Abstract Implementation of Graph Class
// AdjacentList Method
// initialize an array 'colors' representing each vertices to track visited vertices
//// white - not visited
//// grey - discovered, but not explored
//// black - explored (closed out)

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
  }, 
  dfs: function(/*callback*/) {
  	var verticesArr = this.vertices; // for closure access
    var adjList = this.adjList; // for closure access
    var colorVertices = initializer();
    var d = []; //discovery of time d[u] of u
    var f = []; // finish time of f[u] when y marked black
    var p = []; // predecessors of u
    var time = 0;
  	
    // helper functions
    function initializer() {
      var color = [];
      for (var i = 0; i < verticesArr.length; i++) {
        color[verticesArr[i]] = 'white';	
      }
      return color;
    };
    
    function dfsVisit(u, colorVertices, d, f, p) {
      console.log('discovered ' + u);
      colorVertices[u] = 'grey';
      d[u] = ++time;
      //if (callback) {
      //  callback(u);	
      //}
      var neighbors = adjList[u];
      for (var i = 0; i < neighbors.length; i++) {
        if (colorVertices[neighbors[i]] === 'white') {
          p[neighbors[i]] = u;
          dfsVisit(neighbors[i], colorVertices, d, f, p);
        }	
      }
      colorVertices[u] = 'black';
      f[u] = ++time;
      console.log('explored ' + u);
    };
    
    
    for (var i = 0; i < this.vertices.length; i++) {
      f[this.vertices[i]] = 0;
      d[this.vertices[i]] = 0;
      p[this.vertices[i]] = null;
    }
    
    for (i = 0; i < this.vertices.length; i++) {
      if (colorVertices[this.vertices[i]] === 'white') {
        dfsVisit(this.vertices[i], colorVertices, d, f, p);	
      }
    }
    
    return {
      discovery: d, 
      finished: f, 
      precedecessors: p
    }
  }, 
  bfs: function(v, callback) {
  	var verticesArr = this.vertices;
  	
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
    
    queue.push(v); // start search at vertex v
    
    for (var i = 0; i < verticesArr.length; i++) {
      d[verticesArr[i]] = 0;
      pred[verticesArr[i]] = null;
    }
    
    while (queue.length !== 0) {
      var u = queue.shift();
      var neighbors = this.adjList[u]; 
      
      colorVertices[u] = 'grey';
      
      for (i = 0; i < neighbors.length; i++) {
        if (colorVertices[neighbors[i]] === 'white') {
          colorVertices[neighbors[i]] = 'grey';
          d[neighbors[i]] = d[u] + 1;
          pred[neighbors[i]] = u;
          
          queue.push(neighbors[i]);
        }  	
      }
      
      colorVertices[u] = 'black';
      
      if (callback) { // optional - will execute if one passed
        callback(u);	
      }
    }
    return {
      distances: d, 
      predecessors: pred
    }
  }, 
  // shortestPathTo returns shortestPath to each vertices from vertex x in # of edges
  shortestPathTo: function(v) {
    var fromVertex = v;
    var shortest = this.bfs(v);
    for (var i = 1; i < this.vertices.length; i++) {
      var toVertex = this.vertices[i];
      var path = []; //new stack to store path values
      
      for (var j = toVertex; j !== fromVertex; j = shortest.predecessors[j]) {
        path.push(j);	
      }
      
      path.push(fromVertex);
      var s = path.pop();
      
      while (path.length !== 0) {
        s += ' - ' + path.pop();	
      }
      console.log(s);
    }
  }
};

var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I']; //{7}
for (var i=0; i<myVertices.length; i++){ //{8}
  graph.addVertex(myVertices[i]);
}

var print = function(val) {
  console.log('EXPLORED VERTEX: ' + val);	
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

//graph.bfs(myVertices[0], print);

// EXPLORED VERTEX: A
// EXPLORED VERTEX: B
// EXPLORED VERTEX: C
// EXPLORED VERTEX: D
// EXPLORED VERTEX: E
// EXPLORED VERTEX: F
// EXPLORED VERTEX: G
// EXPLORED VERTEX: H
// EXPLORED VERTEX: I
// => { distances: [ A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3 ],
//   predecessors: [ A: null, B: 'A', C: 'A', D: 'A', E: 'B', F: 'B', G: 'C', H: 'D', I: 'E' ] }

//graph.shortestPathTo(myVertices[2]);

// A - B
// A - C
// A - D
// A - B - E
// A - B - F
// A - C - G
// A - D - H
// A - B - E - I

graph.dfs(print);

// EXPLORED VERTEX: A
// EXPLORED VERTEX: B
// EXPLORED VERTEX: E
// EXPLORED VERTEX: I
// EXPLORED VERTEX: F
// EXPLORED VERTEX: C
// EXPLORED VERTEX: D
// EXPLORED VERTEX: G
// EXPLORED VERTEX: H

graph.dfs();

// discovered A
// discovered B
// discovered E
// discovered I
// explored I
// explored E
// discovered F
// explored F
// explored B
// discovered C
// discovered D
// discovered G
// explored G
// discovered H
// explored H
// explored D
// explored C
// explored A
// discovered A
// discovered B
// discovered E
// discovered I
// explored I
// explored E
// discovered F
// explored F
// explored B
// discovered C
// discovered D
// discovered G
// explored G
// discovered H
// explored H
// explored D
// explored C
// explored A
// => { discovery: [ A: 1, B: 2, C: 10, D: 11, E: 3, F: 7, G: 12, H: 14, I: 4 ],
//   finished: [ A: 18, B: 9, C: 17, D: 16, E: 6, F: 8, G: 13, H: 15, I: 5 ],
//   precedecessors: [ A: null, B: 'A', C: 'A', D: 'C', E: 'B', F: 'B', G: 'D', H: 'D', I: 'E' ] }
