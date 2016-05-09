// Top down implementation using recursion

var mergeSort = function(array) {
 var merge = function(left, right) {
   var result = []
     , leftIndex = 0
     , rightIndex = 0;
   
   while (leftIndex < left.length && rightIndex < right.length) {
     if (left[leftIndex] < right[rightIndex]) {
       result.push(left[leftIndex]);
       leftIndex++;
     } else {
       result.push(right[rightIndex]);	
       rightIndex++;
     }
   }
   while (leftIndex < left.length) {
     result.push(left[leftIndex]);
     leftIndex++;
   }
   while (rightIndex < right.length) {
     result.push(right[rightIndex]);
     rightIndex++;
   }
   return result;
 };
 
 var mSort = function(arr) {
   if (arr.length === 1) {
     return arr;
   }
   var mid = arr.length/2;
   var left = arr.slice(0, mid);
   var right = arr.slice(mid);
   
   return merge(mSort(left), mSort(right));
 };
 
 return mSort(array);
};

mergeSort([1, 2, 1203, 2, 10, -4]);
// => [ -4, 1, 2, 2, 10, 1203 ]

mergeSort(['twelve', 'two', 'one', 'four', 'seven']);
// => [ 'four', 'one', 'seven', 'twelve', 'two' ]
