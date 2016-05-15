// Given an array of numbers, return a new array of the product of all the numbers except
// the number at the current index
// var res = [7*3*4, 2*3*4, 2*7*4, 2*7*3];
// var arr = [2, 7, 3, 4];
// var asnwer = [7*3*4, 2*3*4, 2*7*4, 2*7*3];

// brute force approach - O(N^2) Time Complexity, O(N) Space Complexity

function arrayOfProducts(array) {
  var newArray = [];
  for (var i = 0, len = array.length; i < len; i++) {
     var product = 1;
     for (var j = 0; j < len; j++) {
       if (j !== i) {
        product *= array[j]; 
       }
     }  
     newArray.push(product);
  }
  return newArray;    
}

// optimal solution - O(N) Time Complexity, O(N) Space Complexity

function arrayOfProduct2(array) {
  var prefix = []; 
  var suffix = []; 
  var result = []; 
  var base = 1; 
  for (var i = 0; i < array.length; i++) {
    prefix[i] = base;
    base *= array[i];
  }
   
  base = 1;
  for (var j = array.length - 1; j >= 0; j--) {
    suffix[i] = base;
    base *= array[i];
  }
  
  for (var k = 0; k < array.length; k++) {
    result[i] = prefix[i] * suffix[i];   
  }
  
  return result;
}

/*

prefix:
0: 1 --> 1
1: 1*2 --> prefix[0]*arr[0]
2: 1*2*7 --> prefix[1]*arr[1]
3: 1*2*7*3 --> prefix[2]*arr[2]

suffix: 
0: 1*4*3*7 --> suffix[1] * arr[1]
1: 1*4*3 ---> suffix[2] * arr[2]
2: 1*4 --> suffix[3] * arr[3]
3: 1 --> 1
*/
