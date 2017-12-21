// Write a function that takes two strings and returns whether the strings are one character removal, insert, or addition away from being equal.
// Assume inputs are all valid string inputs

function isOneEditAway(str1, str2){
  const len1 = str1.length;
  const len2 = str2.length;
  
  if (Math.abs(len1 - len2) > 1) return false;
  
  if (len1 === len2) {
    return isOneReplacementAway(str1, str2);
  } else {
    let longerStr = len1 > len2 ? str1 : str2;
    let shorterStr = len1 > len2 ? str2 : str1;
    
    return isOneInsertOrRemoveAway(shorterStr, longerStr);
  }
}

function isOneReplacementAway(str1, str2){
  let foundDifference = false;
  
  for (let i = 0, len = str1.length; i < len; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      if (foundDifference) return false;
      foundDifference = true;
    }
  }
  
  return true;
}

function isOneInsertOrRemoveAway(shorterStr, longerStr){
  let indexShorter = 0;
  let indexLonger = 0;
  
  while (indexShorter <= shorterStr.length && indexLonger <= longerStr.length) {
    if (longerStr[indexLonger] !== shorterStr[indexShorter]) {
      if (indexShorter !== indexLonger) return false;
      indexLonger++;
    } else {
      indexShorter++;
      indexLonger++;
    }
  }
  
  return true;
}

isOneEditAway('tee', 'teep'); // true
isOneEditAway('tea', 'teo'); // true
isOneEditAway('beezy', 'breez'); // false
