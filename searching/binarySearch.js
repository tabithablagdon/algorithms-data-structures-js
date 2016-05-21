/**
   * binarySearch
   *
   * @param {Array} arr - Sorted array being search
   * @param {Number} || {String} item - Item you are searching for
   * @return {Number} The index of found item or -1 if not found
   */

var binarySearch = function(arr, item) {
  //arr.sort(); 
  
  let upper = arr.length-1, 
      lower = 0;
  
  while (lower <= upper) {
    let mid = Math.floor((upper + lower)/2);
    
    if (arr[mid] > item) {
      upper = mid - 1;	
    } else if (arr[mid] < item) {
      lower = mid + 1;	
    } else {
      return mid;
    }
  }
  return -1;
};

var x = [1, 2, 3, 4, 5, 6, 7];

binarySearch(x, 7);
// 6

binarySearch(x, 23123);
// -1
