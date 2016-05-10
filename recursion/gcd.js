// Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

// Solution using Dijkstra's algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === y) {
    return x;
  } else {
    return x > y ? gcd(x-y, y) : gcd(x, y-x);
  }
};

// Solution using Euclid's algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x > y) {
    return x % y === 0 ? y : gcd(y, x%y);
  } else {
    return y % x === 0 ? x : gcd(x, y%x);
  }
};
