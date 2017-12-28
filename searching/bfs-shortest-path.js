// Pre-populated adj list graph for example purposes
var Graph = function() {
  this.nodes = {
    1: [2, 3, 4], 
    2: [], 
    3: [4, 5], 
    4: [6], 
    5: [6], 
    6: []
  }
};

Graph.prototype.shortestPath = function(nodeA, nodeB) {
  if (nodeA === null || nodeB === null) return null;

  const nodesVisited = []; // queue of nodes visited (can be a linked list, but for simplicity, using an array)
  const parents = {}; // map of node to parent node
  
  // enqueue nodeA and set its parent node to null
  nodesVisited.push(nodeA);
  parents[nodeA] = null;
  
  while (nodesVisited.length > 0) {
    var currNode = nodesVisited.shift(); // dequeue the next node
  
    if (currNode === nodeB) break; // if we have reached the destination node, break out if the iteration
    
    // perform bfs on all of the current node's children and keep track of its parent - only visit nodes that have not been visited
    for (let i = 0; i < this.nodes[currNode].length; i++) {
      if (!parents.hasOwnProperty(this.nodes[currNode][i])) {
        nodesVisited.push(this.nodes[currNode][i]);
        parents[this.nodes[currNode][i]] = currNode;
      }
    }
  }
  
  if (!parents.hasOwnProperty(nodeB)) return null; // if we never reach the destination node, no path exists, so return null
  
  currNode = nodeB;
  let path = []; // stack of steps
  
  // retrace path edges starting from the end node working backwards using the parents hash map to find shortest path
  while (currNode) {
    path.unshift(currNode);
    currNode = parents[currNode];
  }
  
  return path.join(' -> ');
}


var G = new Graph();

G.shortestPath(1, 6); // => '1 -> 4 -> 6'
