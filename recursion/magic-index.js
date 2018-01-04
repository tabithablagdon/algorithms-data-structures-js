var sortedArray = [-3, 1, 5, 6, 7, 8];
var sortedArray2 = [1];

function magicIndex(array) {
  if (!array || array.length === 0) throw new Error('Invalid input');
  
  return hasMagicIndex(array, 0, array.length-1);
}

function hasMagicIndex(array, start, end) {
  if (end < start) return -1;
  
  let midPoint = Math.floor((start + end)/2);
  
  // If we found a magic index, return that index
  if (array[midPoint] === midPoint) {
    return midPoint;
  } 
  
  // Search left if midpoint value is > than the index
  if (array[midPoint] > midPoint) {
    return hasMagicIndex(array, start, midPoint-1);
  }
  
  // Search right if midpoint value is < than the index
  if (array[midPoint] < midPoint) {
    return hasMagicIndex(array, midPoint+1, end);
  }
}

magicIndex(sortedArray); // 1
magicIndex(sortedArray2); // -1
