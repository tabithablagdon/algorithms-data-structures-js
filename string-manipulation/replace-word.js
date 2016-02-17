/* 
Coded by Tee Blagdon

Function myReplace replaces a sentence using the arguments provided and return the new sentence
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
myReplace() will preserve the first upper case letter of the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog."
*/

function myReplace(str, before, after) {
  var newStr;
  
  if (before[0] === before[0].toLowerCase()) {
    newStr = str.replace(before, after);
  }
  else {
    var newAfter = [];
    var char = after.slice(0, 1);
    newAfter.push(char.toUpperCase());
    newAfter.push(after.slice(1));
    after = newAfter.join("");
    newStr = str.replace(before, after);
  }
  return newStr;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); 
// -> "He is Sitting on the couch".
