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
   if (this.dataStore.length !== 0) {
     return this.dataStore.shift(); 
   }
 };
 
 var front = function() {
    var element = null;
    if (this.dataStore.length) {
      element = this.dataStore[0];
    }
    return element;
 };
 
 var back = function() {
    var element = null;
    if (this.dataStore.length) {
      element = this.dataStore[this.dataStore.length - 1];
    }
    return element;
 };
 
 var empty = function() {
   return this.dataStore.length === 0;
 };

 return {
   constructor: Queue,
   enqueue: enqueue,
   dequeue: dequeue,
   front: front,
   back: back,
   empty: empty
 };
})();
