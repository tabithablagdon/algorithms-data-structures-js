// Instructions: Write an interpreter for this language - '( add ( sub 2 5 ) ( add 2 2 ) )'. Assumes all valid inputs.

function interpreter(str) {
  const tokenizedString = str.split(' ').filter(item => item !== '(' && item !== ')');
  
  const operations = {
    add: (a, b) => parseInt(a) + parseInt(b), 
    sub: (a, b) => parseInt(a) - parseInt(b)
  }
  
  let currentPosition = 0;

  // recursive function => postorder-like traversal down binary tree
  function interpret(array) {
    var currentValue = array[currentPosition];
    
    if (operations.hasOwnProperty(currentValue)) {
      currentPosition++;
      var left = interpret(array);
      
      currentPosition++;
      var right = interpret(array);
      
      return operations[currentValue](left, right);
    }
    
    return currentValue;
  }
  
  return interpret(tokenizedString);
}

// Test Inputs
var x = '( add ( sub 2 5 ) 4 )';
var y = '( add 3 -4 )';
var z = '( add ( sub 2 5 ) ( add 2 2 ) )';
var a = '( add ( sub 2 ( add 1 2 ) ) 9 )';

interpreter(a); // => 8
