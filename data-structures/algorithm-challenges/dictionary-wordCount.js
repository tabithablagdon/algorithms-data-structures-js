/*
Using the Dictionary class, write a program that stores the number of occurrences
of words in a text. Your program should display each word in a text just once as
well as the number of times the word occurs in the text
*/

var Dictionary = function() {
  this.dataStore = [];	
};

Dictionary.prototype = (function() {

  var add = function(key, value) {
  	this.dataStore[key] = value;
  };
  
  var clear = function() {
  	for (var key in this.dataStore) {
  	  delete this.dataStore[key];	
  	}
  };
  
  var count = function() {
    return Object.keys(this.dataStore).length;	
  };
  
  var find = function(key) {
  	return this.dataStore[key];
  };
  
  var remove = function(key) {
  	delete this.dataStore[key];
  };
  
  var showAll = function() {
  	for (var key in this.dataStore) {
  	  console.log(key + ' -> ' + this.dataStore[key]);	
  	}
  };
  
  var showAllSorted = function() {
  	var keys = Object.keys(this.dataStore).sort();
  	for (var key in keys) {
  	  console.log(keys[key] + ' -> ' + this.dataStore[keys[key]]);	
  	}
  };
  
  return {
  	constructor: Dictionary, 
  	add: add, 
  	clear: clear, 
  	count: count, 
  	find: find, 
  	remove: remove, 
  	showAll: showAll,
  	showAllSorted: showAllSorted
  }; 	
})();

var wordCount = function(str) {
  var words = str.toLowerCase().split(' ');
  var count = new Dictionary();
  words.forEach(function(item) {
  	if (!count.find(item)) {
  	  count.add(item, 1);
  	} else {
  	  count.dataStore[item]++;  	
  	}
  });
  count.showAllSorted();	
};

wordCount('THE brown fox jumped over the Blue fox');
/*
=> blue -> 1
brown -> 1
fox -> 2
jumped -> 1
over -> 1
the -> 2
*/
