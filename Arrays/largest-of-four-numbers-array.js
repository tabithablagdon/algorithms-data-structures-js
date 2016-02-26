// The largestOfFour function returns an array containing the largest of 4 numbers in a nested array of numbers

function largestOfFour(arr) {
  // You can do this!
  
  var newArray =[];
  
  for (var i = 0; i < arr.length; i++) {
    arr[i].sort(function (a, b) {
      return a < b;
    });
    newArray.push(arr[i][0]);
  }
  
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
