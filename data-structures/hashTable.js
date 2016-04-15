// Hash Table Class Constructor
var HashTable = function() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
};

// hash function that sums ASCII value of letters in the key using Horner's method

var simpleHash = function(data) {
  const H = 37; // Horner's method constant
  var total = 0;
  for (var i = 0; i < data.length; i++) {
  	total = (H * total + data.charCodeAt(i)) % this.table.length;
  }
  return total;
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
=> 10: Mike
12: Danny
72: David
73: Jonathan
88: Clayton
92: Raymond
104: Donnie
109: Jennifer
133: Cynthia
*/
