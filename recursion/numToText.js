/*
Create a function using recursion called numToText which takes a string and returns a new 
string with all numeric numbers from the input string converted to their corresponding text words. 
You can assume that the numbers in the string are single digit numbers.
*/

var numToText = function(str) {
  var nums = {
    1: 'one', 
    2: 'two', 
    3: 'three', 
    4: 'four', 
    5: 'five', 
    6: 'six', 
    7: 'seven', 
    8: 'eight', 
    9: 'nine', 
    0: 'zero'
  };
  
  var newStr = '';
  
  if (str.length === 0) {
  	return newStr;
  } else {
    var currentChar = str.charAt(0);
    if (nums.hasOwnProperty(currentChar)) {
      newStr += nums[currentChar];
    } else {
      newStr += currentChar;	
    }
  	return newStr.concat(numToText(str.slice(1)));
  }
};

numToText('I bought 7 apples and 3 oranges');
// 'I bought seven apples and three oranges'
