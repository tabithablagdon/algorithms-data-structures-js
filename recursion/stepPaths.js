// stepPaths calculates the number of ways you can go up n steps
// while only taking 1 or 2 steps at a time
// Assumptions: n >= 1

var stepPaths = function(n) {
  var numPaths = 0;
  
  if (n === 0) {
    numPaths++;
    
  } else {
    if (n >= 1) {
      numPaths += stepPaths(n-1);
    }
    if (n >= 2) {
      numPaths += stepPaths(n-2);
    }
  }
  return numPaths;
};

stepPaths(0); 
// => 13
