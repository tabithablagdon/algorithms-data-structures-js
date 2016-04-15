// Hash Table Class Constructor
var HashTable = function() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
};

// hash function that sums ASCII value of letters in the key
// hash value is sum % array size

var simpleHash = function(data) {
  var total = 0;
  for (var i = 0; i < data.length; i++) {
  	total += data.charCodeAt(i);
  }
  return total % this.table.length;
};

// places data in hash table 
var put = function(data) {
  var pos = this.simpleHash(data);
  this.table[pos] = data;
};

// displays data from table
var showDistro = function() {
  this.table.forEach(function(element, index) {
  	if (element) {
  	  console.log(index + ': ' + element); 	
  	}
  });
};

// Creates a hash table of names and sum of ASCII values from each name

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
 "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

var newTable = new HashTable();

for (var i = 0; i < someNames.length; i++) {
  newTable.put(someNames[i]);	
}

newTable.showDistro();
/*
=> 35: Cynthia
45: Clayton
57: Donnie
77: David
95: Danny
116: Mike
132: Jennifer
134: Jonathan
*/
