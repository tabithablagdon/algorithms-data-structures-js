// array manipulation
// map method written using recursion with no loops or index numbers

var recursiveMap = function(array, callback) {
  if (!array || !Array.isArray(array)) throw 'TypeError: recursiveMap(' + JSON.stringify(array) + ') is not a function - input an array';
  return array.length ? [callback(array.shift())].concat(recursiveMap(array, callback)) : [];
};


// test cases

var a = ["tabitha", "brian", "terry"];
var b = [2, 3, 4, 5];
var c = [];

var double = function(num) {
	return num * 2;
};


recursiveMap(b, double); 
// => [ 4, 6, 8, 10 ]

recursiveMap(a, function(val) {
	return val.toUpperCase();
});
// => [ 'TABITHA', 'BRIAN', 'TERRY' ]
