// sumOfMults takes 3 number inputs: num , mult1, and mult2 
// sumOfMults will return the sum of all numbers < num that are multiples of mult1 and mult2
// if not multiples are provided, sumOfMults will return the sum of all numbers < num

var sumOfMults = function(num, mult1, mult2) {
  if (isNaN(num) || isNaN(mult1) || isNaN(mult2)) throw 'Error: Inputs must be integers'; // check for non-Number inputs
  mult1 = mult1 || 1; // if no multiple is provided, return sum of all numbers < num
  var numbers = [];
  
  for (var i = 1; i < num; i++) {
    if (i % mult1 === 0 || i % mult2 === 0) numbers.push(i);
  };
  
  return numbers.reduce(function(sum, nextNum) {
      return sum + nextNum;
  });
};

sumOfMults(1000, 3, 5);
// => 233168

sumOfMults(10, 3, 5);
// => 23
