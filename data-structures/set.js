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
  
  var contains = function(data) {
    if (this.dataStore.indexOf(data) > -1) {
      return true;
    } else {
      return false;	
    }
  };
  
  var difference = function(set) {
  	var newSet = new Set();
  	this.dataStore.forEach(function(item) {
  	  if (!set.contains(item)) {
  	  	newSet.add(item);
  	  }	
  	});
  	return newSet;
  };
  
  var intersect = function(set) {
  	var newSet = new Set();
  	this.dataStore.forEach(function(item) {
  	  if (set.contains(item)) {
  	  	newSet.add(item);
  	  }	
  	});
  	return newSet;
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
  
  var size = function() {
    return this.dataStore.length;	
  };
  
  var show = function() {
    return this.dataStore;	
  }
  var subset = function(set) {
    if (this.size() > set.size()) {
      return false;
    } else {
      this.dataStore.forEach(function(item) {
        if (!set.contains(item)) {
          return false;
        }	
      });	
    }
    return true;
  };
  
  var union = function(set) {
  	var newSet = new Set();
  	this.dataStore.forEach(function(item) {
  	  newSet.add(item);	
  	});
    set.dataStore.forEach(function(item) {
      if (!newSet.contains(item)) {
      	newSet.dataStore.push(item);
      }	
    });
    return newSet;
  };
  
  return {
    constructor: Set, 
    add: add, 
    contains: contains, 
    remove: remove, 
    size: size, 
    union: union, 
    intersect: intersect, 
    subset: subset, 
    difference: difference, 
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

var moreCities = new Set();
moreCities.add('Las Vegas');
moreCities.add('New York');
moreCities.add('Boston');
moreCities.add('Sacramento');

var merged = cities.union(moreCities);

merged.subset(cities);
// false

cities.subset(merged);
// true

console.log(merged.dataStore);
/*
=> [ 'Sacramento',
  'San Francisco',
  'Seattle',
  'Los Angeles',
  'Las Vegas',
  'New York',
  'Boston' ]
*/

console.log(cities.difference(moreCities));
/*
=> { dataStore: [ 'San Francisco', 'Seattle', 'Los Angeles' ] }
*/
