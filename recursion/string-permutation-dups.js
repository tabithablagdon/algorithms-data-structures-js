// String permutation with duplicate characters, but no repetitive permutations
// O(n!) time and space

function printPermutes(str) {
  const charFreqMap = createFrequencyTable(str);
  return getPermutations(charFreqMap, '', str.length, []);
}

function getPermutations(map, prefix, remaining, permutations) {
  if (remaining === 0) {
    permutations.push(prefix);
    return permutations;
  }
  // iterate through all the characters - if # of characters is > 0, add character to prefix and find remaining permutations. Decrement character count.
  for (var key of map.keys()) {
    let charCount = map.get(key);
    
    if (charCount > 0) {
      map.set(key, charCount-1);
      getPermutations(map, prefix + key, remaining - 1, permutations);
      map.set(key, charCount);
    }
  }
  
  return permutations;
}

function createFrequencyTable(str) {
  let charCountMap = new Map();
  
  for (let i = 0, len = str.length; i < len; i++) {
    if (!charCountMap.has(str.charAt(i))) {
      charCountMap.set(str.charAt(i), 0);
    }
    
    charCountMap.set(str.charAt(i), charCountMap.get(str.charAt(i)) + 1);
  }
  return charCountMap;
}

printPermutes('radar');
