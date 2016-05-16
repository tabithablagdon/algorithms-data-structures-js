
// Object implementation of a Dictionary/Map with similar methods/properties from Map.prototype

var Dictionary = function() { // or Map
  var items = {};
  var length = 0;
  
  this.set = function(key, value) { // adds new item
    items[key] = value;
    length++;
  };
  
  this.remove = function(key) {
    if (this.has(key)) {
      delete items[key];
      length--;
      return true;
    }
    return false;
  };
  
  this.has = function(key) { // returns Boolean whether key exists
    return items.hasOwnProperty(key);	
  }
  
  this.get = function(key) { // returns value searched by key
    return this.has(key) ? items[key] : undefined;
  };
  
  this.clear = function() {
    items = {};
    length = 0;
  }
  
  this.size = function() {
    return length;	
  }
  
  this.keys = function() {
    return Object.keys(items);	
  };
  
  this.values = function() {
    var values = [];
    for (var key in items) {
      if(this.has(key)) { // use has to not add inherited properties
        values.push(items[key]);	
      }	
    }
    return values;
  };
  
  this.getItems = function() {
    return items;	
  };
};

var warriorsContactList = new Dictionary();
warriorsContactList.set('Stephen Curry', 'steph@warriors.com');
warriorsContactList.set('Klay Thompson', 'klay@@warriors.com');
warriorsContactList.set('Draymond Green', 'draymond@@warriors.com');

warriorsContactList.keys();
// => [ 'Gandalf', 'John', 'Tyrion' ]

warriorsContactList.values();
// => [ 'gandalf@email.com', 'johnsnow@email.com', 'tyrion@email.com' ]

warriorsContactList.getItems();
// => { Gandalf: 'gandalf@email.com', John: 'johnsnow@email.com', Tyrion: 'tyrion@email.com' }

warriorsContactList.size();
// => 3

warriorsContactList.get('Draymond Green');
// => 'draymond@@warriors.com'
