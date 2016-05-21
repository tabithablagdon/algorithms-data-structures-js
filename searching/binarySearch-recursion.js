// Array implementation of binary search using recursion

var binarySearch = function(arr, item) { 
  if (arr.length === 0 || item > arr[arr.length-1]) {
  	return false;
  }
  
  let mid = Math.floor(arr.length/2), 
      left = arr.slice(0, mid),
      right = arr.slice(mid);
  
  if (arr[mid] === item) {
  	return true;
  } else {
    return item < arr[mid] ? binarySearch(left, item) : binarySearch(right, item);
  }
  return false;
};

binarySearch([1, 2, 3, 4, 5, 6], 4);
// true

binarySearch([1, 2, 3, 4, 5, 6], 13123123);
// false
