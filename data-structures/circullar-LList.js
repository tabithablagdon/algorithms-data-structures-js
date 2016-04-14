var Node = function(element) {
  this.element = element;
  this.next = null;
};

// Linked List Constructor
var LList = function() {
  this.head = new Node('head');
  this.head.next = this.head;
  this.length = 0;
};

LList.prototype = {
  constructor: LList,
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
  	  this.length++;
  	}
  }, 
  remove: function(item) {
  	var prevNode = this.findPrevious(item);
  	if (prevNode.next === null) {
  	  prevNode.next = prevNode.next.next;
  	  this.length--;
  	}
  }, 
  display: function() {
  	var currNode = this.head;
  	while (currNode.next !== null && currNode.next !== this.head) {
  	  console.log(currNode.next.element);
  	  currNode = currNode.next;
  	}
  }
};
