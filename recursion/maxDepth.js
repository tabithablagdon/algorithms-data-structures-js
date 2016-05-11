/*Write a function maxDepth that takes an array of arrays and determines the greatest depth of
nested arrays in the parent array. The parent array may have multiple deep points and you must 
determine the deepest.*/

// [] should return 1
// [1] should return 1
// [1, 2] should return 1
// [1, [2], [3], [4]] should return 2
// [1, [2, 2]] should return 2
// [1, [2, [3]]] should return 3
// [1, [2, [3, [4], 3]]] should return 4
// [1, [[], [3, [], 3]]] should return 4
// [1, [[], [3, [[]], 3]]] should return 5

var maxDepth = function(arr){
  var max = 1;
  arr.forEach(function(array) {
    if (Array.isArray(array)) {
      var depth = 1 + maxDepth(array);
      if (depth > max) {
      	max = depth;
      }
    }  	
  });
  return max;
}


maxDepth([1, [[], [3, [[]], 3]]]); 
// => 5
