// Array-Implementation of a double-ended queue

var Dequeue = function() {
  this.dataStore = [];
};

Dequeue.prototype = (function() {
	
 var enqueueBack = function(element) {
   this.dataStore.push(element);	
 };
 
 var enqueueFront = function(element) {
   this.dataStore.unshift(element);	
 };
 
 var dequeueBack = function() {
   return this.dataStore.pop();
 };
 
 var dequeueFront = function() {
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
    constructor: Dequeue,
    enqueueFront: enqueueFront,
    enqueueBack: enqueueBack,
    dequeueFront: dequeueFront,
    dequeueBack: dequeueBack,
    front: front,
    back: back,
    empty: empty
  };

})();
