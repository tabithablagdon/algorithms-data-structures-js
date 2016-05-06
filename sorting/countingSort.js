var countingSort = function(arr, min, max) {
  var i, j = 0, count = [], result = [];
  for (i = min; i <= max; i++) {  // initialize count array
    count[i] = 0; 
  }
  for (i = 0; i <= arr.length; i++) { // create histogram of count of elements
    count[arr[i]]++; 	
  }
  for (i = min; i <= max; i++) { // sort integers in new array
    while (count[i] > 0) {
      result[j++] = i;
      count[i]--;
    }
  }
  return result;
};

countingSort([5, 3, 1, -1, 10, 5, 2], -1, 10);
// => [ -1, 1, 2, 3, 5, 5, 10 ]
