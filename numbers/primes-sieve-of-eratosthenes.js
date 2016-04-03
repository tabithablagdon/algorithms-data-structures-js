// listPrimes uses Sieve of Eratosthenes algorithm to return an array of all prime numbers under n

var listPrimes = function(n) {
  var sieve = [];
  var primeNums = [];
  var upperLimit = Math.sqrt(n);

  // Create a sieve array from 2 to (n - 1) all containing true values
  for (var k = 0; k < n; k++) {
    sieve.push(true);
  }
  // Remove multiples of primes starting from 2, 3, 5,...by marking each value of multiple as false in sieve
  for (var i = 2; i <= upperLimit; i++) {
    if (sieve[i]) {
      for (var j = i * i; j < n; j += i) {
        sieve[j] = false;
      }
    }
  }
    // All array[i] set to true are primes
  for (var z = 2; z < n; z++) {
    if(sieve[z]) primeNums.push(z);
  }
  
  return primeNums;
};

listPrimes(100);
// => [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]
