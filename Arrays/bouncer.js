// bouncer array utility function filters out any falsey strings, such as false, null, undefined, "", and NaN

var bouncer = function(array) {
  array = array.filter(Boolean);
  return array;
};

//test case

bouncer(['a', null, undefined, 'b', 3, false, true, {}]);
// => [ 'a', 'b', 3, true, {} ]
