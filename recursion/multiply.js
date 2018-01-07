// Write an algorithm multiply that multiples two positive integers and doesn't use the * operator. All other operators can be used.

// Recursive solution
var multiply = function(a, b) {
  // return 0 if one of the numbers is 0
  if (!a || !b) return 0;
  // return the other number is one of the numbers is 1
  if (a === 1 || b === 1) return a === 1 ? b : a;
  
  let smallerNum = a < b ? a : b;
  let largerNum = b < a ? a : b;
  
  return multiplyHelper(largerNum, smallerNum);
};

function multiplyHelper(largerNum, smallerNum) {
  if (smallerNum === 0) return 0;
  if (smallerNum === 1) return largerNum;
  
  let halfProduct = multiplyHelper(largerNum, smallerNum >> 1);
  
  return halfProduct += (smallerNum % 2 === 0 ? halfProduct : halfProduct + largerNum);
};

multiply(20, 3); // 60

// Iterative solution
var multiply = function(a, b) {
  // return 0 if one of the numbers is 0
  if (!a || !b) return 0;
  // return the other number is one of the numbers is 1
  if (a === 1 || b === 1) return a === 1 ? b : a;
  
  let smallerNum = a < b ? a : b;
  let largerNum = b < a ? a : b;
  let productSoFar = 0;
  
  // Only need to add up to 1/2 the smaller number of times 
  for (let i = 0; i < smallerNum >> 1; i++) {
    productSoFar += largerNum;
  }
  
  // if the smaller number is even, double the product so far
  // if smaller number is odd, double the product so far and add the bigger number
  productSoFar += (smallerNum % 2 === 0 ? productSoFar : productSoFar + largerNum);
  
  return productSoFar;
};

multiply(20, 10); // 200
