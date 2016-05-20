// My implementation of doublyLinkedList Class

var Node = function(key) {
  this.key = key;
  this.next = null;
  this.prev = null;
};

var DoublyLinkedList = function(name) {
  this.head = null;
  this.length = 0;
};

DoublyLinkedList.prototype = {
  constructor: DoublyLinkedList,
  
  append: function(key) {
    var node = new Node(key);
    
    if (!this.head) {
      this.head = node;

    } else {
      var currNode = this.head;

      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = node;
      node.prev = currNode;
    }
    this.length++;
    return true;
  }, 
  
  remove: function() {
    if (!this.head) {
      return false;

    } else if (this.length === 1) {
      this.head = null;

    } else {
      var currNode = this.head;
      var prevNode;

      while (currNode.next) {
        prevNode = currNode;
        currNode = currNode.next;
      }

      prevNode.next = null;
    }
    this.length--;
    return true;
  },

  removeAt: function(pos) {
    if (pos < 0 || pos > this.length -1) {
      throw new Error('index out of bounds')
    }
    if (pos === this.length-1) {
      this.remove();
      return true;

    } else {
      var currNode = this.head;
      var prevNode; 
      var i = 0;
      
      if (pos === 0) {
        this.head = currNode.next;
        this.head.prev = null;

      } else {
        while (i++ < pos) {
          prevNode = currNode;
          currNode = currNode.next;
        }
    
        prevNode.next = currNode.next;
        currNode.next.prev = prevNode;
      }
      this.length--;
      return true;
    }
  }, 

  insert: function(pos, key) {
    if (pos < 0 || pos > this.length) {
      throw new Error('index out of bounds')
    }
    if (pos === this.length) {
      this.append(key);
      return true;

    } else {
      var node = new Node(key);
      var currNode = this.head;
      var prevNode;
      var i = 0;
    
      if (pos === 0) {
        node.next = currNode;
        this.head = node;
        currNode.prev = node;
      } else {
      
        while (i++ < pos) {
          prevNode = currNode;
          currNode = currNode.next;
        }
      
        prevNode.next = node;
        node.next = currNode;
        node.prev = prevNode;
        currNode.prev = node;
        
        this.length++;
        return true;
      }
    }
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
