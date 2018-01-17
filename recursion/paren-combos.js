function getParenCombos(n) {
  if (n <= 0) throw new Error('Invalid Input: Must enter an integer > 0');
  
  const listOfParenCombos = [];
  let initialStr = '';
  
  return generateParens(listOfParenCombos, n, n, initialStr);
}

function generateParens(list, leftRemaining, rightRemaining, str) {
  if (leftRemaining < 0 || rightRemaining < leftRemaining) {
    return;  
  }
  
  if (leftRemaining === 0 && rightRemaining === 0) {
    list.push(str); 
    return;
  } 
  
  if (leftRemaining > 0) {
    // add a left paren
    generateParens(list, leftRemaining-1, rightRemaining, str + '(');
  }
  
  if (rightRemaining > 0) {
    // add a closing paren
    generateParens(list, leftRemaining, rightRemaining-1, str + ')');
  }
  
  return list;
}

getParenCombos(3); // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
