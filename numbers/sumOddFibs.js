// sumOddFibs will return the sum of all odd Fibonacci numbers up to and including 'num' input if it is a Fibonacci number

var sumOddFibs = function(num) {
  var result = 0;
  var nums = [];
  
  // check for negative numbers or non-number inputs
  if (num < 0 || num === undefined || isNaN(num)) {
      throw 'Error: Enter a positive integer';
  }
  // create array of fibonacci numbers <= num
  for (var i = 0; result <= num; i++) {
    result = (i <= 1) ? 1 : nums[i-2] + nums[i-1];
    if (result <= num) nums.push(result);
  }
  
  // return sum of only odd fibonacci values
  return nums.reduce(function(total, nextNum) {
    return (nextNum % 2 !== 0) ? total += nextNum : total;
  },0);
};

sumOddFibs(10);
// -> 10

sumOddFibs(1000);
// -> 1785
