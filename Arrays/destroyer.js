/* Function destroyer will take an initial array (the first argument in the destroyer function), followed by one or more arguments. 
It will remove all elements from the initial array that are of the same value as these arguments. */

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  var array1 = args[0];
  var values = args.slice(1);
  
  return array1.filter(function(val) {
    return values.indexOf(val) < 0;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 3, 2);
