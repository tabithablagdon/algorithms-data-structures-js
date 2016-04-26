// bubbleSort has O(N^2) time complexity

var bubbleSort = function(collection) {
  var sorted = collection.slice(0);
  var temp;
  for (var i = 0; i < sorted.length; i++) {
    for (var j = 0; j < sorted.length; j++) {
      if (sorted[j] > sorted[j+1]) {
      	temp = sorted[j+1];
      	sorted[j+1] = sorted[j];
      	sorted[j] = temp;
      }  	
    }	
  }
  return sorted;
};

var arr = [1, 5, 2, 10, 3, 7, -2, -6];
bubbleSort(arr);
// => [ -6, -2, 1, 2, 3, 5, 7, 10 ]
