// Sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21


var sum = function(array, index) {
  index = index || 0;
  return index === array.length ? 0 : array[index] + sum(array, index+1);
};
