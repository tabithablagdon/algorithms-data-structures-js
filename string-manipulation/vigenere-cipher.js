// Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

//// E.g.
//// var alphabet = 'abcdefghijklmnopqrstuvwxyz';
//// var key = 'password';

// creates a cipher helper with each letter substituted by the corresponding character in the key

//// var c = new VigenèreCipher(key, alphabet);

//// c.encode('codewars'); // returns 'rovwsoiv'
//// c.decode('laxxhsj'); // returns 'waffles'

//Any character not in the alphabet must be left alone.




function VigenèreCipher(key, abc) {
  if (!key || !abc) throw new Error('Must enter valid key and alphabet.');
  
  const abcLen = abc.length - 1;
  
  // transform abc into object for constant look-up and improved time complexity
  const abcObj = abc.split('').reduce((obj, currentLetter, index) => {
    obj[currentLetter] = index;
    return obj;
  }, {});
  
  const _cipher = function(str, action){
    let newStr = '';
    let keyPointer = 0;
    action = action.toLowerCase();
    
    if (action !== 'encode' && action !== 'decode') throw new Error('Must provide a valid cipher action "encode" or "decode".')
    
    for (var i = 0, len = str.length; i < len; i++) {
      const keyCharIndex = abcObj.hasOwnProperty(key.charAt(keyPointer)) ? abcObj[key.charAt(keyPointer)] : 0;
      const strCharIndex = abcObj.hasOwnProperty(str.charAt(i)) ? abcObj[str.charAt(i)] : -1;
      
      if (strCharIndex < 0) {
        newStr += str.charAt(i);
        keyPointer = (keyPointer + 1 > key.length - 1) ? 0 : keyPointer + 1;
        continue;
      }
      
      // calculate what index to shift to
      let shiftToIndex = action === 'encode' ? keyCharIndex + strCharIndex : strCharIndex - keyCharIndex;
      
      // wrap shiftIndex value in abc
      shiftToIndex = shiftToIndex >= 0 ? (shiftToIndex > abcLen ? shiftToIndex%abcLen-1 : shiftToIndex) : shiftToIndex + abcLen + 1;
      
      // update encoded or decoded string to new letter
      newStr += abc[shiftToIndex];
      
      // update index pointer on key
      keyPointer = (keyPointer + 1 > key.length - 1) ? 0 : keyPointer + 1;
    }
    
    return newStr;
  }
  
  this.encode = function(str){
    return _cipher(str, 'encode');
  };
  
  this.decode = function (str) {
    return _cipher(str, 'decode');
  };
}
