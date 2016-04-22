// simple array implementation of Graph class with depth-first search and breadth-first search

var Graph = function(v) { // v = # of vertices in graph
  this.vertices = v;
  this.edges = 0;
  this.adj = []; // to store edges
  this.marked = []; //for depthSearch
  for (var i = 0; i < this.vertices; i++) {
    this.adj.push([]);	
  }
  for (var j = 0; j < this.vertices; j++) {
  	this.marked[j] = false;
  }
};

Graph.prototype = (function() {
  
  var addEdge = function(a, b){ // a and b are two vertices connected by an edge to add
  	this.adj[a].push(b);
  	this.adj[b].push(a);
  	this.edges++;
  };
  
  var bfs = function(vertex) {
    var queue = [];
    this.marked[vertex] = true;
    queue.push(vertex);
    while (queue.length > 0) {
      var v = queue.shift();
      if (v !== undefined) {
        console.log('Visited vertex: ' + v);
      }
      for (var i = 0; i < this.adj[v].length; i++) {
        if (!this.marked[this.adj[v][i]]) {
          this.marked[this.adj[v][i]] = true;
          queue.push(this.adj[v][i]);
        }	
      }
    }	
  };
  
  var dfs = function(vertex) {
    this.marked[vertex] = true;
    if (this.adj[vertex] !== undefined) {
      console.log('visited vertex: ' + vertex);
    }
    for (var i = 0; i < this.adj[vertex].length; i++) {
      if (!this.marked[this.adj[vertex][i]]) {
      	this.depthSearch(this.adj[vertex][i]);
      }		
    }
  };
 
  var showGraph = function() {
 	for (var i = 0; i < this.vertices; i++) {
 	  var output = i + ' -> ';
 	  for (var j = 0; j < this.adj[i].length; j++) {
 	  	if (this.adj[i][j] !== undefined) {
 	  	  output += ' ' + this.adj[i][j];
 	  	}
 	  }
 	  console.log(output);
 	}
 };
  
  return {
  	constructor: Graph, 
  	addEdge: addEdge, 
  	bfs: bfs, 
  	dfs: dfs, 
  	showGraph: showGraph
  };
  
})();

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();

/*
=> 0 ->  1 2
1 ->  0 3
2 ->  0 4
3 ->  1
4 ->  2
*/
g.dfs(0);
/*
visited vertex: 0
visited vertex: 1
visited vertex: 3
visited vertex: 2
visited vertex: 4
*/

g.bfs(0);
/*
=> Visited vertex: 0
Visited vertex: 1
Visited vertex: 2
Visited vertex: 3
Visited vertex: 4
*/
