// quicksort implementation

var qSort = function(arr) {
  if (arr.length === 0) {
    return [];	
  }	
  var left = []
    , right = []
    , pivot = arr[0];
  for (var i = 1, len = arr.length; i < len; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return qSort(left).concat(pivot, qSort(right));
};

qSort([6, 23, 2, 1, 4, -10]);
// => [ -10, 1, 2, 4, 6, 23 ]
