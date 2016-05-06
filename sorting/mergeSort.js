// This code can be wrapped in a MergeSort function - separated for simplicity

var merge = function(left, right) {
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      result.push(right[rightIndex]);
      rightIndex++;
    } else {
      result.push(left[leftIndex]);
      leftIndex++;
    }
  }
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return result;
}

var mergeSort = function(arr) {
  if (arr.length === 1) {
    return arr;	
  }
  
  var mid = arr.length / 2;
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
};

mergeSort([2, 6, 1, 8, -1, 2, -7]);
//=> [ -7, -1, 1, 2, 2, 6, 8 ]
