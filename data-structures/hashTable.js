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

// Hashing String Keys Example

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
 "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

var newTable = new HashTable();

// add names data to hash table
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

// Hashing Integer Keys Example: Student ID & Grades

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;	
};

// function generates student ID (inner loop) and grade (outter loop)
var genStudentData = function(arr) {
  for (var i = 0; i < arr.length; i++) {
  	var num = '';
  	for (var j = 1; j <=9; j++) {
  	  num += Math.floor(Math.random() * 10);	
  	}
  	num += getRandomInt(50, 100);
  	arr[i] = num;
  }
  return arr;
};
// create an array of student data
var studentData = genStudentData(Array(10));

// log generated ID and grade in console
studentData.forEach(function(item) {
  console.log('ID: ' + item.substring(0, 8) + ' Grade: ' + item.substring(9));
});
/*
=> ID: 89471231 Grade: 61
ID: 84769999 Grade: 57
ID: 33118592 Grade: 59
ID: 63678530 Grade: 96
ID: 62476803 Grade: 81
ID: 37317961 Grade: 59
ID: 27564093 Grade: 99
ID: 50803018 Grade: 72
ID: 88873469 Grade: 64
ID: 54281014 Grade: 70
*/

// create hash table to store data and add student data
var hTable = new HashTable();
studentData.forEach(function(item) {
  hTable.put(item);	
});

hTable.showDistro();
/*
=> 2: 62476803881
18: 37317961359
48: 89471231561
73: 88873469364
87: 54281014570
92: 63678530096
96: 50803018272
108: 84769999457
131: 27564093399
*/
