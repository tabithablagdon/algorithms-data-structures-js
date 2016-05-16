// Array implementation of HashTable Class

var HashTable = function() {
  var table = [];
  
  var loseloseHashCode = function(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);	
    }
    return hash % 37;
  };
  
  // adds new item to hash table (or update it)
  this.put = function(key, value) {
    var position = loseloseHashCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  };
  
  this.remove = function(key) {
    table[loseloseHashCode(key)] = undefined;	
  };
  
  // returns specific value searched for by key
  this.get = function(key) {
    return table[loseloseHashCode(key)];	
  };
  
  this.print = function() {
    table.forEach(function(item, key) {
      console.log(key + ': ' + item);	
    });
  };
};

var ages = new HashTable();
ages.put('Derek', 32);
ages.put('Mark', 36);
ages.put('Jorge', 40);
// 10 - Derek
//25 - Mark
//22 - Jorge

console.log(ages.print());
// 10: 32
// 22: 40
// 25: 36
