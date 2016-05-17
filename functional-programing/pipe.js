// CONCATENATING FUNCTIONS

// Functional programming thrives from the reuse of functions. One core feature to extend the reuse is the concatenation of functions.
// Extend the Function prototype with a method pipe
// Since a function only can return one value it is absolutely sufficient to only support functions that consume only one parameter. Build your pipe function in a way, that one can pipe an arbitrary number of functions.

Function.prototype.pipe = function(func) {
  
  var outerFunction = this;
 
  return function(args) {
    return func(outerFunction(args));
  };

/* /////// [Alternate Solution] /////////

  return function(args) {
    return func(this(args));	
  }.bind(this);

*////////////////////////////////////

};

var arr = [1, 2, 3, 4, 5];
var addOne = function(e) {return e + 1;};
var square = function(e) {return e * e;};
var plusTwo = function(e) {return e + 2;};

arr.map(addOne.pipe(square)); 
// [4,9,16,25,36]

arr.map(addOne.pipe(square).pipe(plusTwo));
// => => [ 6, 11, 18, 27, 38 ]
