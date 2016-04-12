/*
isPalindrome() is a simple function that checks to see if a word is a palindrome.  
Assumes no spaces or punctuation.  Can add tests for that later.
*/

var isPalindrome = function(word) {
  var reversed = "";
  for (var i = word.length-1; i >= 0; i--) {
  	reversed += word[i];
  }
  return reversed === word ? true : false;
};

isPalindrome("racecar");
// => true
