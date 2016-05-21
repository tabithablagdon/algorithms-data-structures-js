// 'Better' Sequential Search with self-organizing data
// Most 'searched' item will bubble to front over time

var swap = function(arr, index, index2) {
  let temp = arr[index];
  arr[index] = arr[index2];
  arr[index2] = temp;
};

var seqSearch = function(arr, data) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === data) {
      if (i > 0) {
        swap(arr, i, i-1);	
      }
      return true;
    }  	
  }
  return false;
};


var x = [10, 2, 11, 23, 21, -100, 2, 10];
var y = ['apple', 'orange', 'banana', 'peach', 'pineapple', 'avocado'];

seqSearch(y, 'banana');
// => true
