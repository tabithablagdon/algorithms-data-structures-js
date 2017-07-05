// Question (from InterviewCake): We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// Assumptions: All values are integers and all arguments are arrays

var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

// Recursive solution

function mergeArrays(arrayA, arrayB, sortedArray) {
  sortedArray = sortedArray || [];
  const lenA = arrayA.length;
  const lenB = arrayB.length;
  
  // Base case
  if (lenA === 0 && lenB === 0) {
    return sortedArray;
  }
  
  // Recursive case
  if (lenA > 0 && lenB > 0) {
      const nextA = arrayA[0];
      const nextB = arrayB[0];
      
      if (nextA === nextB) {
        sortedArray.push(nextA);
        sortedArray.push(nextB);
        
        return mergeArrays(arrayA.slice(1), arrayB.slice(1), sortedArray);
      } else if (nextA > nextB) {
        sortedArray.push(nextB);
        
        return mergeArrays(arrayA, arrayB.slice(1), sortedArray);
      } else {
        sortedArray.push(nextA);
        
        return mergeArrays(arrayA.slice(1), arrayB, sortedArray);
      }
  } else {
    return lenA > 0 ? sortedArray.concat(arrayA) : sortedArray.concat(arrayB);
  }
}

mergeArrays(myArray, alicesArray)
