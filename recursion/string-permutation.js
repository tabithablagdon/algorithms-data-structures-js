// String permutation with unique characters
// O(n!) time and space

function getPermutations(str) {
  let permutations = [];
  // base case
  if (str.length === 0) {
    permutations.push('');
    return permutations;
  }
  // remove first character
  var firstChar = str.charAt(0);
  // find permutations of the rest of the string
  var remainderStr = str.substring(1);
  //
  var substringPermutes = getPermutations(remainderStr);

  // iterate through those permutations and insert the character in every word at every character
  substringPermutes.forEach(word => {
    for (let i= 0, len = word.length; i <= len; i++) {
      let wordFirstPart = word.substring(0, i);
      let wordLastPart = word.substring(i);
      
      permutations.push(wordFirstPart + firstChar + wordLastPart);
    }
  });
  
  // return all the permutations
  return permutations;
}

// Another way - build from substrings
function getPermutations(str) {
  let permutations = [];
  // base case
  if (str.length === 0) {
    permutations.push('');
    return permutations;
  }
  
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let substr = str.substring(0,i) + str.substring(i+1);
    // find all permutations of its substring
    let substringPermutes = getPermutations(substr);
    
    // prepend the selected character to the beginning of each substring permutation
    substringPermutes.forEach(word => {
      permutations.push(char + word);
    });
  }
  
  // return all the permutations
  return permutations;
}

getPermutations('grits'); 
// [ 'grit',
// 'rgit',
// 'rigt',
// 'ritg',
// 'girt',
// 'igrt',
// 'irgt',
// 'irtg',
// 'gitr',
// 'igtr',
// 'itgr',
// 'itrg',
// 'grti',
// 'rgti',
// 'rtgi',
// 'rtig',
// 'gtri',
// 'tgri',
// 'trgi',
// 'trig',
// 'gtir',
// 'tgir',
// 'tigr',
// 'tirg' ]
