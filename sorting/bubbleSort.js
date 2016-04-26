// bubbleSort has O(N^2) time complexity

var bubbleSort = function(collection) {
  var temp;
  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < collection.length; j++) {
      if (collection[j] > collection[j+1]) {
      	temp = collection[j+1];
      	collection[j+1] = collection[j];
      	collection[j] = temp;
      }  	
    }	
  }
  return collection;
};

var arr = [1, 5, 2, 10, 3, 7, -2, -6];
bubbleSort(arr);
// => [ -6, -2, 1, 2, 3, 5, 7, 10 ]
