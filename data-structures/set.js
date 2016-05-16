// Object implementation of a Set class

var Set = function() {
  var items = {};
  var length = 0;
  
  this.has = function(value) {
    return items.hasOwnProperty(value);
  };
  
  this.add = function(value) {
  	if (!this.has(value)) {
      items[value] = value; // added as key/value to help search for value if stored as key too
      length++;
      return true;
  	}
  	return false;
  };
  
  this.remove = function(value) {
  	if (this.has(value)) {
  	  delete items[value];
  	  length--;
  	  return true;
  	}
  	return false;
  };
  
  this.clear = function() {
    items = {};	
    length = 0;
  };
  
  this.size = function() {
  	return length;
  	// or return Object.keys(items).length;
  }
  
  this.values = function() {
    return Object.keys(items);	
  }
  
  this.union = function(otherSet) {
    var newSet = new Set();
    
    var values = this.values();
    values.forEach(function(val) {
      newSet.add(val);	
    });
    
    values = otherSet.values();
    values.forEach(function(val) {
      newSet.add(val);	
    }); 
    
    return newSet;
  };
  
  this.intersection = function(otherSet) {
    var intersectionSet = new Set();
    
    var values = this.values();
    values.forEach(function(val) {
      if (otherSet.has(val)) {
        intersectionSet.add(val);	
      }	
    });
    
    return intersectionSet;
  }
  
  this.difference = function(otherSet) {
    var differenceSet = new Set();
    
    var values = this.values();
    values.forEach(function(val) {
      if (!otherSet.has(val)) {
        differenceSet.add(val);	
      }	
    });
    
    return differenceSet;
  }, 
  
  // checks if this(set) is a subset of otherSet
  this.subset = function(otherSet) {
  	
    if (this.size() > otherSet.size()) {
      return false;	
    } else {
      var values = this.values();
      values.forEach(function(val) {
        if (!this.has(val)) {
          return false;	
        }  	
      });
    return true;
    }
  };
};

var names = new Set();
names.add('Harry');
names.add('Ron');
names.add('Hermoine');
names.values(); 
// => [ 'Harry', 'Ron', 'Hermoine' ]
names.size(); 
// => 3
names.remove('Ron'); 
// => true
names.values(); 
// => [ 'Harry', 'Hermoine' ]

var heroes = new Set();
heroes.add('Superman');
heroes.add('Batman');
heroes.add('Captain Planet');
heroes.add('Harry');

names.intersection(heroes).values();
// => [ 'Harry']

names.difference(heroes).values();
// => [ 'Hermoine' ]

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
