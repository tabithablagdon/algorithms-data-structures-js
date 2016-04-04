/*
binaryGap(N) is a function that, given a number N, returns the length of its longest binary gap. 
The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its 
longest binary gap is of length 5.
*/

var binaryGap = function(N) {
  // test for negative or isNaN inputs
  if (typeof N !== 'number' || N < 0) throw 'Error: Enter a positive number';
  
  // convert n to binary number (1000010001) and split into an array for manipulation
  var binary = Number(N).toString(2).split('');
  
  // declare an two empty array - outter an inner - going to create a multiD array of consecutive 0's in binary
  var arr = [];
  var innerArray = [];
  
  // loop through binary number and separate gaps into arrays
  binary.forEach(function(num) {
  	// if num is 1, push innerArray into arr and create a new array
    if (num === '1') {
      if (innerArray.length > 0) arr.push(innerArray);
      innerArray = [];
    }
    // if next number is 0, add it to innerArray
    if (num === '0') innerArray.push(num);
  });
  
  // return length of largest array (binary gap) contained within arr
  return arr.reduce(function(a, b) {
  	return b.length > a ? b.length : a;
  }, 0);
};

binaryGap(529);
// => 4
