// An Object-Based Linked List Design
// Created using two classes - Node and LList
// The Node class consists of two properties: element, which store’s the node’s data, andnext, which stores a link to the next node in the linked list. 

// Linked List Constructor
var Node = function(element) {
  this.element = element;
  this.next = null;
};
  
var LList = function() {
  this.head = new Node('head');
  this.numItems = 0;
};

LList.prototype = {
  constructor: LList,
  append: function(element) {
    var node = new Node(element);
    var currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;	
    }
    currNode.next = node;
    this.numItems++;
  }, 
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
  // insert item after a specified element - can refactor for position
  insert: function(element, item) {
    var afterNode = this.find(item);
    var newNode = new Node(element);
    if (afterNode !== null) {
      newNode.next = afterNode.next;
      afterNode.next = newNode;
      this.numItems++;
      return true;
    } else {
      return false;	
    }
  }, 
  remove: function(element) {
    var index = this.indexOf(element);
    if (index > -1) {
      this.numItems--;
      return this.removeAt(index);
    }
  }, 
  removeAt: function(position) {
    if (position > -1 && position < this.numItems) {
      var currNode = this.head;
      var previous;
      var index = 0;
    }
    
    while (index <= position) {
      previous = currNode;
      currNode = currNode.next;
      index++;
    }
    
    previous.next = currNode.next;
    this.numItems--;
    return currNode.element;
  }, 
  indexOf: function(element) {
    var currNode = this.head;
    var index = -1;
    
    while (currNode.next) {
      if (currNode.next.element === element) {
        index++;
        return index;
      }
      currNode = currNode.next;
      index++;
    }
    
    return -1;
  }, 
  display: function() {
    var currNode = this.head;
    var elements = '';
  	
    while (currNode.next) {
      currNode.next.next !== null ? elements += currNode.next.element + ' -> ' : elements += currNode.next.element;
      currNode = currNode.next;
    }
  	
    return elements;
  }, 
  size: function() {
    return this.numItems;	
  }, 
  isEmpty: function() {
    return this.numItems === 0;	
  }
};
