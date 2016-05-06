var arraySum = function(array, index) {
  index = index || 0;
  return index === array.length ? 0 : arraySum(array, index+1) + (Array.isArray(array[index]) ? arraySum(array[index]) : array[index]);
};
