/* 

Time Complexity: O(N)

oddMan(A) - given an array A consisting of N integers returns the value of the unpaired element - the oddman.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
  
the function should return 7.

Assume that:
 - N is an odd integer within the range [1..1,000,000];
 - each element of array A is an integer within the range [1..1,000,000,000];
 - all but one of the values in A occur an even number of times.
*/

var oddMan = function(A) {
  var result;
  for (var i = 0; i < A.length; i++) {
  	result ^= A[i];
  }
  return result;
};


var arr = [2, 3, 4, 5, 5, 1, 4, 3, 2];

oddMan(arr);
// => 1
