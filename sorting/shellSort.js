// Shellsort with hard-coded gap sequence
var shellSort = function(array, gaps) {
  for (var g = 0; g < gaps.length; g++) {
    for (var i = gaps[g]; i < array.length; i++) {
      var temp = array[i];
      for (var j = i; j >= gaps[g] && array[j-gaps[g]] > temp; j-=gaps[g]) {
        array[j] = array[j - gaps[g]];	
      }
      array[j] = temp;
    }	
  }
  return array;
};

//Shellsort with dynamic gap sequence, defined by Robert Sedgewick
var shellSort2 = function(array) {
  var N = array.length;
  var h = 1;
  var temp;
  while (h < N/3) {
    h = 3 * h + 1;	
  }
  while (h >= 1) {
    for (var i = h; i < N; i++) {
      for (var j = i; j >= h && array[j] < array[j-h]; j-=h) {
      	temp = array[j];
      	array[j] = array[j-h];
      	array[j-h] = temp;
      }	
    }
    h = (h-1)/3;
  }
  return array;
};


var arr = [8, 4, 1, 0, 2, -1, -22, 20, 12, 11, 7];

shellSort(arr, [5, 3, 1]);
// => [ -22, -1, 0, 1, 2, 4, 7, 8, 11, 12, 20 ]

shellSort2(arr);
// => [ -22, -1, 0, 1, 2, 4, 7, 8, 11, 12, 20 ]
