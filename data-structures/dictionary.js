// Dictionary implementation using Arrays

// Dictionary implementation using Arrays

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

// phonebook program using Dictionary class

var phonebook = new Dictionary();
phonebook.add('Brian', '707-231-4234');
phonebook.add('Chris', '707-834-0285');
phonebook.add('Laurel', '415-253-0985');
phonebook.add('Jack', '916-344-9906');

phonebook.showAll();
/*
=> Brian -> 707-231-4234
Chris -> 707-834-0285
Laurel -> 415-253-0985
Jack -> 916-344-9906
*/

console.log("Brian's phone number is: " + phonebook.find('Brian'));
// Brian's phone number is: 707-231-4234

phonebook.remove('Laurel');
phonebook.showAll();
/*
=> Brian -> 707-231-4234
Chris -> 707-834-0285
Jack -> 916-344-9906
*/

phonebook.count();
// => 3

phonebook.clear();
phonebook.count();
// => 0
