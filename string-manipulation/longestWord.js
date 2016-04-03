// longestWord returns the length of the longest word in string sentence

var longestWord = function(str) {
  if (typeof str !== 'string') throw 'Error: Enter a string';
  
  var words = str.split(" ");
  
  return words.map(function(word) {
    return word.length;
  }).reduce(function(pastLength, currentLength) {
    return currentLength > pastLength ? currentLength : pastLength;
  });
};

longestWord('JavaScript is such a fun language to learn');
// => 10
