// Function flattener will reduce an array of arrays into a single array.  EJ Chapter 5 exercise.

var arrays = [[1, 2, 3], [4, 5], [6, 7, 8, 9, 10]];

function flattener(array) {

  var newArray = array.reduce(function(a, b) {
    return a.concat(b)});
  
  console.log(newArray);
};

flattener(arrays);

// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
