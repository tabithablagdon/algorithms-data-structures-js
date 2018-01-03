function fib(n, fibCache) {
  if (n === 0 || n === 1) return n;
  
  if (!fibCache.hasOwnProperty(n)) {
    fibCache[n] = fib((n-1), fibCache) + fib((n-2), fibCache);
  }
  
  return fibCache[n];
}

function memoizedFib(n) {
  return fib(n, {});
}

memoizedFib(7); // 13
