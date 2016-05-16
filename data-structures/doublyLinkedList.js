// Doubly Linked List Design w/ two classes Node and LList

var Node = function(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
};

// Linked List Constructor
var DoublyLList = function() {
  this.head = new Node('head');
  this.tail = null;
  this.numItems = 0;
};

DoublyLList.prototype = {
  constructor: DoublyLList,
  find: function(item) {
  	var currNode = this.head;
  	while (currNode.element !== item) {
  	  currNode = currNode.next;	
  	}
  	return currNode;
  }, 
  findLast: function() {
  	var current = this.head;
  	while (current.next) {
  	  current = current.next;	
  	}
  	return current;
  }, 
  insert: function(newElement, item) {
  	var current = this.find(item);
  	var newNode = new Node(newElement);
  	newNode.next = current.next;
  	newNode.previous = current;
  	current.next = newNode;
  }, 
  remove: function(item) {
  	var current = this.find(item);
  	if (current) {
  	  current.previous.next = current.next;
  	  current.next.previous = current.previous;
  	  current.next = null;
  	  current.previous = null;
  	}
  }, 
  display: function() {
  	var currNode = this.head;
  	while (currNode.next) {
  	  console.log(currNode.next.element);
  	  currNode = currNode.next;
  	}
  }, 
  displayReverse: function() {
  	var currNode = this.findLast();
  	while (currNode.previous) {
  	  console.log(currNode.element);
  	  currNode = currNode.previous;
  	}
  }
};

var cities = new LList();
cities.insert('Piscataway', 'head');
cities.insert('Sacramento', 'Piscataway');
cities.insert('San Francisco', 'Sacramento');
cities.insert('Santa Monica', 'San Francisco');
cities.display('Sacramento');
/*
=> Sacramento
Santa Monica
San Francisco
Piscataway
*/
cities.remove('Sacramento');

cities.displayReverse();
/*
=> Santa Monica
San Francisco
Piscataway
*/
