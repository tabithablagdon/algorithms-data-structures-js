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



var arr = [8, 4, 1, 0, 2, -1, -22, 20, 12, 11, 7];
shellSort(arr, [5, 3, 1]);
// => [ -22, -1, 0, 1, 2, 4, 7, 8, 11, 12, 20 ]
