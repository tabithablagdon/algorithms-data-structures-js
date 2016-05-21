// Implenting binarySearch and insertionSort to find a word in a paragraph

var insertionSort = function(collection) {
  var temp;
  for (let i = 1; i < collection.length; i++) {
    for (let j = 0; j < i; j++) {
      if (collection[i] < collection[j]) {
      	temp = collection[j];
      	collection[j] = collection[i];
      	collection[i] = temp;
      }
    }
  }
  return collection;
};

var binarySearch = function(arr, item) {
  insertionSort(arr);
  
  let upper = arr.length-1, 
      lower = 0;
  
  while (lower <= upper) {
    let mid = Math.floor((upper + lower)/2);
    
    if (arr[mid] > item) {
      upper = mid - 1;	
    } else if (arr[mid] < item) {
      lower = mid + 1;	
    } else {
      return mid;
    }
  }
  return -1;
};

var findWord = function(text, word) {
  let arr = text.toLowerCase().split(' ');	
  let pos = binarySearch(arr, word);
  
  return pos > -1 ? word + ' was found at position ' + pos : word + ' was not found'; 
};

var stringText = 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma — which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.';


findWord(stringText, 'jobs');
// 'jobs was not found'

findWord(stringText, 'heart');
// => 'heart was found at position 17'
