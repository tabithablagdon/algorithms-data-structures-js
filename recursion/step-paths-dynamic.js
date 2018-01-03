// Count number of paths a person can take given a number of steps if he can only take 1, 2, oe 3 steps at a time

function numPaths(n, cache) {
  if (n === 0) return 1;
  if (n < 0) return 0;
  
  if (!cache.hasOwnProperty(n)) {
    cache[n] = numPaths(n-1, cache) + numPaths(n-2, cache) + numPaths(n-3, cache);
  }
  
  return cache[n];

}

function numPathsMemoize(n) {
  return numPaths(n, {});
}

numPathsMemoize(6); //24
