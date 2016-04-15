// Hash Table Implementation using Linear Probing

var HashTable = function() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  //this.get = get;
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
  while (this.table[pos]) {
  	  pos++;
  }
  this.table[pos] = data;
};

/*
var get = function(key) {
  return this.table[key];
};
*/

// displays data from table
var showDistro = function() {
  for (var i = 0; i < this.table.length; i++) {
  	if (this.table[i]) {
  	  console.log(i + ': ' + this.table[i]);
  	}
  }
};

// Hashing String Keys Example

var someNames = ['Mary', 'John', 'Edward', 'Brian', 'Cameron', 'Derek', 'Moses', 'Ruth', 'Linda', 'Sienna', 'Angelina', 'Edward', 'Brian'];

var newTable = new HashTable();
// add names data to hash table
for (var i = 0; i < someNames.length; i++) {
  newTable.put(someNames[i]);	
}

newTable.showDistro();
/*
=> 5: Edward
6: Edward
12: Ruth
13: John
15: Linda
23: Mary
24: Cameron
61: Derek
71: Sienna
93: Angelina
118: Moses
127: Brian
128: Brian
*/
