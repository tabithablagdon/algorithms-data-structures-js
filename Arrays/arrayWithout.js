/* arrayWithout() takes an array list input and an unlimited number of values.  Returns  new array with those values removed. 
Code by tee. */

var arrayWithout = function(array, ...args) {
    var theArgs = args;
    if (Array.isArray(array)) {
        return array.filter(function(item) {
          return theArgs.indexOf(item) < 0 ? true : false; 
        });
    }
    else {
        return "Enter an array";
    }
    
}

arrayWithout([10, 12, 100, 2, 3, 4, 0, undefined, 15], 0, 3, undefined);
// => [ 10, 12, 100, 2, 4, 15 ]
