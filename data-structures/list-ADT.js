/* List Abstract Data Type Implementation using Constructor function

The List ADT does not specify a storage function for a list, but for our implementation will use an array named dataStore.

List ADT Properties and Methods

length (property) Returns the number of elements in list
clear (function) Clears all elements from list
getElement (function) Returns element at current position
insert (function) Inserts new element after existing element
append (function) Adds new element to end of list
remove (function) Removes element from list
front (function) Sets current position to first element of list
end (function) Sets current position to last element of list
prev (function) Moves current position back one element
next (function) Moves current position forward one element
currPos (function) Returns the current position in list
moveTo (function) Moves the current position to specified position
*/

var List = function() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; //initialize array to store list elements
};

List.prototype = {
  constructor: List,
  append: function(element) {
  	this.dataStore[this.listSize++] = element;
  },
  find: function(element) {
  	for (var i = 0; i < this.listSize; i++) {
  	  if (this.dataStore[i] === element) {
  	    return i;
  	  }
  	}
  	return -1;
  },
  remove: function(element) {
  	var location = this.find(element);
  	if (location > -1) {
  	  this.dataStore.splice(location, 1);
  	  this.listSize--;
  	  return true;
  	} else {
  	  return false;
  	}
  },
  clear: function() {
  	this.dataStore = [];
    this.pos = this.listSize = 0;
  },
  length: function() {
  	return this.listSize;
  },
  getElement: function() {
  	return this.dataStore[this.pos];
  },
  insert: function(element, afterElem) {
  	var insertPos = this.find(afterElem);
  	if (insertPos > -1) {
  	  this.dataStore.splice(insertPos + 1, 0, element);
  	  this.listSize++;
  	  return true;
  	}
    return false;
  },
  front: function() {
  	this.pos = 0;
  },
  end: function() {
  	this.pos = this.listSize - 1;
  },
  prev: function() {
  	if (this.pos > 0) {
  	  this.pos--;	
  	}
  },
  next: function() {
  	if (this.pos < this.listSize - 1) {
  	  this.pos++;  	
  	}
  },
  currPos: function() {
  	return this.pos;
  },
  moveTo: function(position) {
  	this.pos = position;
  }
};

// Creating a List of names

var names = new List();

names.append("Tabitha");
names.append("Brian");
names.append("Doris");

console.log(names);
// => { listSize: 3, pos: 0, dataStore: [ 'Tabitha', 'Brian', 'Doris' ] }

names.insert("Tom", "Brian");
console.log(names.dataStore);
// => [ 'Tabitha', 'Brian', 'Tom', 'Doris' ]

names.clear();
console.log(names);
// => { listSize: 0, pos: 0, dataStore: [] }

names.append("Tabitha");
names.append("Brian");
names.append("Doris");

for (names.front(); names.currPos() < names.listSize-1; names.next()) {
  console.log(names.getElement()); 	
}
