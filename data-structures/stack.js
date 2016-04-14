/*
STACKS Abstract Implementation using a Stack Constructor and revealing prototype pattern
 - LIFO methodology

Primary Properties/Methods/Operations
 - top - top of stack
 - push() - Adding to a stack
 - pop() - Removing items from stack
 - peek() - looking at the top value of the stack, without removing like pop would
 - clear() - removes all elements from stack
 - length() - returns length of stack
*/

var Stack = function() {
  this.dataStore = [];
  this.top = 0;
};

// revealing prototype pattern
Stack.prototype = (function(){
  var push = function(element) {
  	this.dataStore[this.top++] = element;
  };
  
  var pop = function() {
  	return this.dataStore[--this.top];
  };
  
  var peek = function() {
  	return this.dataStore[this.top-1];
  };
  
  var length = function() {
  	return this.top;
  };
  
  var clear = function() {
  	this.top = 0;
  };
  
  return {
    constructor: Stack,
    push: push,
    pop: pop,
    peek: peek,
    length: length,
    clear: clear
  };
})();

var names = new Stack();
names.push("Tee");
names.push("Bee");
names.push("Ed");
console.log(names);
// => { dataStore: [ 'Tee', 'Bee', 'Ed' ], top: 3 }
console.log(names.pop());
// => Ed
console.log(names.peek());
// => Bee
