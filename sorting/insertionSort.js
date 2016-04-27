/*
O(N^2)
insertion sort works by moving larger array elements to the right to make room for the smaller elements
on the left side of the array
*/

var insertionSort = function(collection) {
  var temp;
  for (var i = 1; i < collection.length; i++) {
    for (var j = 0; j < i; j++) {
      if (collection[i] < collection[j]) {
      	temp = collection[j];
      	collection[j] = collection[i];
      	collection[i] = temp;
      }
    }
  }
  return collection;
};

var arr = [8, 4, 1, 0, 2];
insertionSort(arr);
// => [ 0, 1, 2, 4, 8 ]

/*
[ 4, 8, 1, 0, 2 ]
[ 1, 4, 8, 0, 2 ]
[ 0, 1, 4, 8, 2 ]
[ 0, 1, 2, 4, 8 ]
*/
