var Graph = function(v) {
  this.adj = [];
  this.edges = 0;
  this.edgeTo = [];
  this.marked = []; //for depthSearch
  this.vertices = v;
  this.vertexList = []; //for topsort symbolic vertices
  for (var i = 0; i < this.vertices; i++) {
    this.adj.push([]);	
  }
  for (var j = 0; j < this.vertices; j++) {
  	this.marked[j] = false;
  }
  
};

Graph.prototype = (function() {
  
  var addEdge = function(a, b){
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
          this.edgeTo[this.adj[v][i]] = v;
          this.marked[this.adj[v][i]] = true;
          queue.push(this.adj[v][i]);
        }	
      }
    }	
  };
  
  var dfs = function(vertex) {
    this.marked[vertex] = true;
    if (this.adj[vertex] !== undefined) {
      console.log('Visited vertex: ' + vertex);
    }
    for (var i = 0; i < this.adj[vertex].length; i++) {
      if (!this.marked[this.adj[vertex][i]]) {
      	this.dfs(this.adj[vertex][i]);
      }		
    }
  };
  /*
  var hasPathTo = function(v) {
    return this.marked[v];	
  };
  
  var pathTo = function(v) { // creates a stack that stores all the vertices that have edges in common with a specified vertex
  	var source = 0;
  	if (!this.hasPathTo(v)) {
  	  return undefined;	
  	}
  	var path = [];
  	for (var i = 0; i !== source; i = this.edgeTo[i]) {
  	  path.push(i);	
  	}
  	path.push(v); // ?
  	return path;
  };
 */
  var showGraph = function() { // displays vertex numbers
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
  
  var showGraph2 = function() { // displays symbolic names of vertices
    for (var i = 0; i < this.vertices; i++) {
      var output = this.vertexList[i] + ' -> ';
     
      for (var j = 0; j < this.adj[i].length; j++) {
        if (this.adj[i][j] !== undefined) {
          output += this.vertexList[this.adj[i][j]] + ' ';
        }	
      }
      console.log(output);
    }
  };

 
  var topSort = function(){
   var stack = [];
   var visited = [];
   for (var i = 0; i < this.vertices; i++) {
   	visited[i] = false;
   }
   for (var k = 0; k < this.vertices; k++) {
     if (visited[k] === false) {
       this.topSortHelper(k, visited, stack);	
     }	
   }
 
   for (var j = 0; j < stack.length; j++) {
     if (stack[j] !== undefined && stack[j] !== false) {
       console.log(this.vertexList[stack[j]]);	
     }  	
   }
 };
 
 var topSortHelper = function(v, visited, stack) {
   visited[v] = true;
   for (var i = 0; i < this.adj[v].length; i++) {
     if (!visited[this.adj[v][i]]) {
       this.topSortHelper(this.adj[v][i], visited, stack);	
     }
   }
   stack.unshift(v); //add visted vertex to stack
 };
  
 return {
 	constructor: Graph, 
  	addEdge: addEdge, 
  	bfs: bfs, 
  	dfs: dfs, 
  	//hasPathTo: hasPathTo, 
  	//pathTo: pathTo, 
  	showGraph: showGraph, 
  	showGraph2: showGraph2, 
  	topSort: topSort, 
  	topSortHelper: topSortHelper
  };
  
})();


var classes = new Graph(6);
classes.addEdge(1, 2);
classes.addEdge(2, 5);
classes.addEdge(1, 3);
classes.addEdge(2, 4);
classes.addEdge(0, 1);
classes.vertexList = ['CS1', 'CS2', 'Data Structures',
 'Assembly Language', 'Operating Systems',
 'Algorithms'];

//console.log(classes.adj);
classes.showGraph();
/*
0 ->  1
1 ->  2 3 4 0
2 ->  1 5
3 ->  1
4 ->  1
5 ->  2
*/
classes.showGraph2();
/*
CS1 -> CS2 
CS2 -> Data Structures Assembly Language Operating Systems CS1 
Data Structures -> CS2 Algorithm 
Assembly Language -> CS2 
Operating Systems -> CS2 
Algorithms -> Data Structures 
*/

//classes.dfs(0);
/*
visited vertex: 0
visited vertex: 1
visited vertex: 2
visited vertex: 5
visited vertex: 3
visited vertex: 4
*/

classes.topSort();
/*
CS1
CS2
Assembly Language
Data Structures
Operating Systems
Algorithms
*/
