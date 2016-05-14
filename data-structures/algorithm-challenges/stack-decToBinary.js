/// decToBinary(n) converts a decimal number to a binary representation
/// We can divide the number by 2 (binary is base 2 number system), pushing remainder onto Stack, until the division result is 0. 

var decToBinary = function(n) {
  var binary = [];
  if (n/2 < 1) {
    binary.push(1);
    return binary;
  }
  binary.push(n%2);
  return binary.concat(decToBinary(Math.floor(n/2))).join('');
};

// decToBinary(10);
// => 10
