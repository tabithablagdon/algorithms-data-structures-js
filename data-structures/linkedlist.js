// An Object-Based Linked List Design
// Created using two classes - Node and LList
// The Node class consists of two properties: element, which store’s the node’s data, andnext, which stores a link to the next node in the linked list. 

var Node = function(element) {
  this.element = element;
  this.next = null;
};

// Linked List Constructor
var LList = function() {
  this.head = new Node('head');
};

LList.prototype = {
  constructor: 'LList',
  find: function(item) {
  	var currNode = this.head;
  	while (currNode.element !== item) {
  	  currNode = currNode.next;	
  	}
  	return currNode;
  }, 
  findPrevious: function(item) {
  	var currNode = this.head;
  	while (currNode.next && currNode.next.element !== item) {
  	  currNode = currNode.next;	
  	}
  	return currNode;
  }, 
  insert: function(newElement, item) {
  	var afterNode = this.find(item);
  	var newNode = new Node(newElement);
  	if (afterNode !== null) {
  	  newNode.next = afterNode.next;
  	  afterNode.next = newNode;
  	} else {
  	  return 'Error: Could not find a node containing your item';	
  	}
  }, 
  remove: function(item) {
  	var prevNode = this.findPrevious(item);
  	if (prevNode.next) {
  	  prevNode.next = prevNode.next.next;	
  	}
  }, 
  display: function() {
  	var currNode = this.head;
  	while (currNode.next) {
  	  console.log(currNode.next.element);
  	  currNode = currNode.next;
  	}
  }
};

var cities = new LList();
cities.insert('Piscataway', 'head');
cities.insert('Sacramento', 'head');
cities.insert('San Francisco', 'Sacramento');
cities.insert('Santa Monica', 'Sacramento');
cities.display();
/*
=> Sacramento
Santa Monica
San Francisco
Piscataway
*/

cities.remove('San Francisco');
cities.display();
/*
=> Sacramento
Santa Monica
Piscataway
*/



