///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
////// BINARY SEARCH ARRAY
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Given a sorted array of numbers in ascending order
// Return index of 2nd argument num
// If num is not in array, return -1
// Implement using binary search and recursion

var binarySearchArray = function(array, num) {
  var mid = Math.floor(array.length/2);
  if (num === array[mid]) {
  	return mid;
  } else if(num < array[mid]) {
  	return binarySearchArray(array.slice(0, mid), num);
  } else if (num > array[mid]) {
    return binarySearchArray(array.slice(mid, array.length), num) + mid;
  } else {
    return -1;	
  }
};

var sortedArray = [39, 41, 42, 43, 44, 45, 50, 52, 53, 63, 74, 77, 78, 83, 93];

//binarySearchArray(sortedArray, 63);
// => 9

//binarySearchArray(sortedArray, 10);
// => -1
