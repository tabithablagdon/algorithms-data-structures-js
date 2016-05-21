// Traditional implementation of quickSort using pointers instead of with arrays

var quickSort = function(array, left, right) {
  let index;
  
  // partition helper function (can be moved outside quickSort)
  var partition = function(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)], 
      l = left, 
      r = right;
  
    while (l <= r) {
      while (array[l] < pivot) {
        l++;
      }
      while (array[r] > pivot) {
        r--;	
      }
      if (l <= r) {
      	// can be replaced by swap helper function
        let temp = array[l];
        array[l] = array[r];
        array[r] = temp;
        l++;
        r--;
      }
    }
    return l;
  };
  
  if (array.length > 1) {
  	
  	left = typeof left !== 'number' ? 0 : left;
  	right = typeof right !== 'number' ? array.length - 1 : right;
  	
    index = partition(array, left, right);	
    
    if (left < index - 1) {
      quickSort(array, left, index - 1);	
    }
    if (index < right) {
      quickSort(array, index, right);	
    }
  }
  return array;
};


var x = [10, 2, 11, 23, 21, -100, 2, 10];
var y = ['apple', 'orange', 'banana', 'peach', 'pineapple', 'avocado'];

quickSort(x);
// => [ -100, 2, 2, 10, 10, 11, 21, 23 ]

quickSort(y);
// => [ 'apple', 'avocado', 'banana', 'orange', 'peach', 'pineapple' ]
