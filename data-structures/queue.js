//A queue is a type of list where data are inserted at the end and are removed from the
//front. Queues are used to store data in the order in which they occur, as opposed to a
//stack, in which the last piece of data entered is the first element used for processing.

// An Array-Based Queue Implementation

var Queue = function() {
  this.dataStore = [];
};

Queue.prototype = (function() {

 var enqueue = function(element) {
   this.dataStore.push(element);	
 };
 
 var dequeue = function() {
   return this.dataStore.shift();	
 };
 
 var front = function() {
   return this.dataStore[0];
 };
 
 var back = function() {
   return this.dataStore[this.dataStore.length - 1];	
 };
 
 var empty = function() {
   return this.dataStore.length === 0 ? true : false;	
 };

  return {
	enqueue: enqueue,
	dequeue: dequeue,
	front: front,
	back: back,
	empty: empty
  };
	
})();
