/*
STACKS Abstract Implementation using a Stack Constructor and revealing prototype pattern - no array methods are used
 - LIFO methodology
 
Primary Methods/Operations
 - top - top of stack
 - push() - Adding to a stack
 - pop() - Removing items from stack
 - peek() - looking at the top value of the stack, without removing like pop would
 - clear() - removes all elements from stack
 - length() - returns length of stack
 - isEmpty() - returns boolean whether stack is empty or not
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
    var popped = null;
    if (this.top > 0) {
      popped = this.dataStore[--this.top];
      delete this.dataStore[this.top];
    }
    return popped;
  };
  
  var peek = function() {
    return this.top > 0 ? this.dataStore[this.top-1] : null;
  };
  
  var length = function() {
    return this.top;
  };
  
  var clear = function() {
    this.top = 0;
    this.dataStore = [];
  };
  
  var isEmpty = function() {
    return this.top < 1;	
  };
  
  return {
    constructor: Stack,
    push: push,
    pop: pop,
    peek: peek,
    length: length,
    clear: clear, 
    isEmpty: isEmpty
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
console.log(names.isEmpty());
// => false
console.log(names.length());
// => 2
names.clear();
console.log(names);
