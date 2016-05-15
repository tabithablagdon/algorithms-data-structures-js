///////////////////////////////////////////////////////////////////////////////////////
/// Rough abstract implementation of a Priority Queue
///////////////////////////////////////////////////////////////////////////////////////

//A queue is a type of list where data are inserted at the end and are removed from the
//front. Queues are used to store data in the order in which they occur, as opposed to a
//stack, in which the last piece of data entered is the first element used for processing.

var PriorityQueue = function() {
  this.dataStore = [];
  this.numItems = 0;
  
  var QueueElement = function(element, priority) {
  	this.element = element;
  	this.priority = priority;
  }
  
  this.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority);
    if (this.isEmpty()) {
      this.dataStore[0] = queueElement;
      this.numItems++;
    } else {
      var added = false;
      for (var i = 0; i < this.numItems; i++) {
        if (queueElement.priority < this.dataStore[i].priority) {
          this.dataStore.splice(i, 0, queueElement);
          added = true;
          this.numItems++;
          break;
        }	
      }
      if (!added) {
        this.dataStore[this.dataStore.length] = queueElement;
        this.numItems++;
      }
    }
  }
  
  this.dequeue = function() {
  	this.numItems--;
    return this.dataStore.shift();	
  }
  
  this.front = function() {
    var item = null;
    if (!this.isEmpty()) {
      item = this.dataStore[0];	
    }
    return item;
  }
  
  this.back = function() {
    var item = null;
    if (!this.isEmpty()) {
      item = this.dataStore[this.dataStore.length - 1];	
    }
    return item;
  }
  
  this.isEmpty = function() {
  	return this.numItems === 0;
  }
  
  this.size = function() {
    return this.numItems;	
  }
  
  this.clear = function() {
  	this.numItems = 0;
  	this.dataStore = [];
  }
  
  this.print = function() {
    console.log(this.dataStore);	
  }
  	
}

var boarders = new PriorityQueue();

boarders.enqueue('Mark', 1);
boarders.enqueue('Jackson', 2);
boarders.enqueue('Bill', 3);
boarders.enqueue('James', 1);
