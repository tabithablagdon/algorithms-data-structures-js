// sumOfDivisibleByThree returns the sum of all numbers divisible by 3 from an array of numbers

var sumOfDivisibleByThree = function(collection) {
  if (!Array.isArray(collection)) {
    throw 'Error: Enter an array of numbers';
  }
  return collection.filter(function(value) {
    return value % 3 === 0;
  }).reduce(function(a, b) {
    return a + b;
  });
};
