// The Capitalize Words function takes any sentence and capitalizes the first letter of each word in the sentence

function capitalizeWords(str) {
  var strArray = str.toLowerCase().split(" ");
  for (var i = 0; i < strArray.length; i++){
    var word = strArray[i];
    word = word.charAt(0).toUpperCase() + word.slice(1);
    strArray[i] = word;
  }
  return strArray.join(" ");
};

capitalizeWords("I am cApitalizing the first letter of eVerY word!");
