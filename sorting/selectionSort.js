/*
Time complexity: O(N^2)
Selection sort works by starting
at the beginning of the array and comparing the first element with the remaining ele‐
ments. After examining all the elements, the smallest element is placed in the first po‐
sition of the array, and the algorithm moves to the second position. 
*/

var selectionSort = function(arr) {
  var min, temp;
  for (var i = 0, len = arr.length; i < len; i++) {
    min = i;
    for (var j = i+1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }  
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

var arr = [10, 2, 5, 22, -2, -10];
selectionSort(arr);
// => [ -10, -2, 2, 5, 10, 22 ]
/*
[ -10, 10, 5, 22, 2, -2 ]
[ -10, -2, 5, 22, 10, 2 ]
[ -10, -2, 2, 22, 10, 5 ]
[ -10, -2, 2, 5, 22, 10 ]
[ -10, -2, 2, 5, 10, 22 ]
[ -10, -2, 2, 5, 10, 22 ]
*/

