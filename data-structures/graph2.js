// Graph class implentation using a Dictionary class

var Dictionary = function() { // or Map
  var items = {};
  var length = 0;
  
  this.set = function(key, value) { // adds new item
    items[key] = value;
    length++;
  };
  
  this.remove = function(key) {
    if (this.has(key)) {
      delete items[key];
      length--;
      return true;
    }
    return false;
  };
  
  this.has = function(key) { // returns Boolean whether key exists
    return items.hasOwnProperty(key);	
  }
  
  this.get = function(key) { // returns value searched by key
    return this.has(key) ? items[key] : undefined;
  };
  
  this.clear = function() {
    items = {};
    length = 0;
  }
  
  this.size = function() {
    return length;	
  }
  
  this.keys = function() {
    return Object.keys(items);	
  };
  
  this.values = function() {
    var values = [];
    for (var key in items) {
      if(this.has(key)) { // use has to not add inherited properties
        values.push(items[key]);	
      }	
    }
    return values;
  };
  
  this.getItems = function() {
    return items;	
  };
};

// AdjacentList Method

var Graph = function() {
  this.vertices = [];
  // dictionary will store name of vertex as key and list of adjacent vertices as a value
  this.adjList = new Dictionary();
};

Graph.prototype = {
  constructor: Graph, 
  addVertex: function(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  },
  // add edge between two vertices
  addEdge: function(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v); // not needed for a directed graph only undirected
  }, 
  toString: function() {
    var str = '';
    for (var i = 0; i < this.vertices.length; i++) {
      str += this.vertices[i] + ' -> ';
      var neighbors = this.adjList.get(this.vertices[i]);
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

// A -> B C D 
// B -> A E F 
// C -> A D G 
// D -> A C G H 
// E -> B I 
// F -> B 
// G -> C D 
// H -> D 
// I -> E 
