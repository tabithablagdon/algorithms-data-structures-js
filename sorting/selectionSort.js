/*
Time complexity: O(N^2)
Selection sort works by starting
at the beginning of the array and comparing the first element with the remaining ele‐
ments. After examining all the elements, the smallest element is placed in the first po‐
sition of the array, and the algorithm moves to the second position. 
*/

var selectionSort = function(collection) {
  var min, temp;
  for (var i = 0; i < collection.length; i++) {
    min = i;
    for (var j = i + 1; j < collection.length; j++) {
      if (collection[j] < collection[min]) {
      	min = j;
      }
      temp = collection[i];
      collection[i] = collection[min];
      collection[min] = temp;
    }
  }
  return collection;
};

var arr = [10, 2, 5, 22, -2, -10];
selectionSort(arr);
// => [ -10, -2, 2, 5, 10, 22 ]
