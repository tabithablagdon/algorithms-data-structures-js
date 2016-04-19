// Basic array implementation of Set class

var Set = function() {
  this.dataStore = [];
};

Set.prototype = (function(){
  var add = function(data) {
  	if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      return true
  	} else {
  	  return false;	
  	}
  };
  
  var remove = function(data) {
  	var pos = this.dataStore.indexOf(data);
  	if (pos > -1) {
  	  this.dataStore.splice(pos, 1);
  	  return true;
  	} else {
  	  return false;	
  	}
  };
  
  var show = function() {
    return this.dataStore;	
  }
  
  return {
    constructor: Set, 
    add: add, 
    remove: remove, 
    //size: size, 
    //union: union, 
    //intersect: intersect, 
    //subset: subset, 
    //difference: difference, 
    show: show
  };
})();

var cities = new Set();
cities.add('Sacramento');
cities.add('San Francisco');
cities.add('Seattle');
cities.add('Los Angeles');
cities.add('Denver');

console.log(cities.show());
/*
=> [ 'Sacramento', 'San Francisco', 'Seattle', 'Los Angeles', 'Denver' ]
*/

cities.remove('Santa Monica');
// => false

cities.remove('Denver');
cities.show();
/*
=> [ 'Sacramento', 'San Francisco', 'Seattle', 'Los Angeles' ]
*/
