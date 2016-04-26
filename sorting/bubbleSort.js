/* 
Slowest sorting algorithm
The bubble sort gets its name because when data are sorted using the algorithm, values
float like a bubble from one end of the array to the other. Assuming you are sorting a
set of numbers into ascending order, larger values float to the right of the array and
lower values float to the left. 

bubbleSort has O(N^2) time complexity
*/

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


/* bubble sort in progress

[ 1, 2, 5, 3, 7, -2, -6, 10 ]
[ 1, 2, 3, 5, -2, -6, 7, 10 ]
[ 1, 2, 3, -2, -6, 5, 7, 10 ]
[ 1, 2, -2, -6, 3, 5, 7, 10 ]
[ 1, -2, -6, 2, 3, 5, 7, 10 ]
[ -2, -6, 1, 2, 3, 5, 7, 10 ]
[ -6, -2, 1, 2, 3, 5, 7, 10 ]
[ -6, -2, 1, 2, 3, 5, 7, 10 ]

*/
