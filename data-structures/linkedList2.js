// My implementation of the singly LinkedList Class

var Node = function(key) {
  this.key = key;
  this.next = null;
};

var LinkedList = function() {
  this.head = null;
  this.length = 0;
};

LinkedList.prototype = {
  constructor: LinkedList,
  append: function(key) {
    var node = new Node(key);
    var currNode = this.head;

    if (this.head === null) {
      this.head = node;
      this.length++;
      return true;
    } else {
      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = node;
      this.length++;
      return true;
    }
  }, 
  remove: function() { // removes last node
    if (!this.head) {
      return false;
    }
    var currNode = this.head;
    var previousNode;

    while (currNode.next) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    previousNode.next = null;
    delete currNode;
    this.length--;
    return true;
  }, 
  insert: function(index, key) {
    if (index < 0 || index > this.length) { 
      throw new Error('invalid index'); 
    }

    var node = new Node(key);
    var counter = 0;
    var currNode = this.head;
    var prevNode;
    
    if (index === 0) {
      node.next = currNode;
      this.head = node;
    } else {
    
      while (counter++ < index) {
        prevNode = currNode;
        currNode = currNode.next;
      }

      node.next = currNode;
      prevNode.next = node;
    }
    this.length++;
    return true;
  },
  removeAt: function(index) {
    if (index < 0 || index > this.length-1) {
      throw new Error('invalid index');
    }

    var currNode = this.head;
    var counter = 0;
    var prevNode;
    
    if (index === 0) {
      this.head = currNode.next;
    } else {

      while (counter++ < index) {
        prevNode = currNode;
        currNode = currNode.next;
      }

      prevNode.next = currNode.next;
    }
    this.length--;
    return true;
  },
  indexOf: function(key) {
    var currNode = this.head;
    var index = 0;
    
    while (currNode) {
      if (currNode.key === key) {
        return index; 
      }
      currNode = currNode.next;
      index++;
    }
    return -1;
  },
  toArray: function() { 
    var keys = [];
    var currNode = this.head;
    
    while (currNode) {
      keys.push(currNode.key);  
      currNode = currNode.next;
    }
    
    return keys;
  }, 
  
  toString: function() {
    var arr = this.toArray();
    var str = '';
    
    arr.forEach(function(key, index) {
      str += (index !== arr.length-1) ? key + ' -> ' : key;
    });
    
    return str;
  }, 

  isEmpty: function() {
    return this.length === 0; 
  }, 

  size: function() {
    return this.length; 
  } 
};
