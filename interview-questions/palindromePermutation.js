// QUESTION: palindromePermutation
// Write a function that checks whether a string is a permutation of a palindrome

// OPTIMAL SOLUTION //
// Time Complexity: O(N)

function palindromePermutation(str) {

  // Trim string
  str = str.replace(/\s/g, '').toLowerCase();
  let letterCount = {};
  let len = str.length;

  // Check for non-string inputs
  if (len === 0 || typeof str !== 'string') {
    throw new Error('Must enter a string input');
  }

  // Check for 1 and 2 letter words to return result before entering loop
  if (len === 1) {
    return true;

  } else if (len === 2) {
    return str[0] === str[1];

  } else {
  	// Create hash table to count number of letters
    for (let i = 0; i < len; i++) {
      letterCount.hasOwnProperty(str.charAt(i)) ? letterCount[str.charAt(i)]++: letterCount[str.charAt(i)] = 1;
    }
  }

  // Check to see if even length word has all even count letters or odd word has only one odd count letter
  for (let key in letterCount) {
    if (letterCount[key] % 2 !== 0) {
      return len % 2 === 0 ? false : true; 
    }
  }
}


// NAIVE SOLUTION: Find all permutations of a string and pass through isPalindrome helper function
// Time Complexity: O(N^n)

// function isPalindrome(str) {
//   str = str.toLowerCase().split('');
//   let strReversed = str.slice(0).reverse();
//   return strReversed.join('') ===  str.join('');
// }
//
// function palindromePermutation(str) {
//   let permutations = [];
//   str = str.replace(/\s/g, '').toLowerCase();
//
//   if (isPalindrome(str)) {
//     return true;
//   }
//
//   function permute(word, combo) {
//     combo = combo || '';
//     if (word.length === 0) {
//       permutations.push(combo);
//       combo = '';
//     } else {
// 	  for (var i = 0; i < word.length; i++) {
// 	    var remaining = word.substr(0, i) + word.substr(i+1, word.length-1);
// 	    var next = combo + word[i];
// 	    permute(remaining, next);
// 	  }
//     }
//   }
//
//   permute(str, '');
//
//   for (let i = 0; i < permutations.length; i++) {
//     if (isPalindrome(permutations[i])) {
//       return true;
//     }
//   }
//
//   return false;
// }


palindromePermutation('ta   cta   co'); // => true
