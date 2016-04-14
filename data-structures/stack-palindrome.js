// Using an abstract stack data structure to create function isPal() that checks if a string is a palindrome

var Stack = function() {
  this.dataStore = [];
  this.top = 0;
};

// revealing module
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

var isPal = function(word) {
  var newWord = new Stack();
  for (var i = 0; i < word.length; i++) {
  	newWord.push(word[i]);
  }
  var reversed = "";
  while (newWord.length() > 0) {
  	reversed += newWord.pop();
  }
  if (reversed === word) {
  	return true;
  }
  else {
  	return false;
  }
};

isPal("racecar");
// => true

isPal("hello");
// => false
