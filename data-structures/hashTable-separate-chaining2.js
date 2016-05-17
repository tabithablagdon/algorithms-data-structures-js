// Array implementation of HashTable Class
// Collision technique: Separate Chaining using Linked Lists
// Calls on LList Class (not in code)

// helper node Class to represent element added to LL instance
  
var ValuePair = function(key, value) {
  this.key = key;
  this.value = value;
  this.toString = function() {
    return '[' + this.key + ': ' + this.value + ']';	
  };
};

////////////////////////////////////
// [insert LinkedList Class here] //
////////////////////////////////////

var HashTable = function() {
  var table = [];
  
  // 'lose lose' hash function
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
    
    if (!table[position]) {
      table[position] = new LinkedList();	
    }
    
    table[position].append(new ValuePair(key, value)); // LLlist method
  };
  
  this.remove = function(key) {
    var position = loseloseHashCode(key);
    
    if (table[position]) {
      var current = table[position].getHead(); // LList method	
      
      while (current.next) {
      	if (current.element.key === key) {
          table[position].remove(current.element); // LList method
          
          if (table[positiion].isEmpty()) {
            table[position] = undefined;	
          }
        
          return true;
      	}
      	current = current.next;	
      }
      
      // check in case first or last element
      if (current.element.key === key) {
        table[position].remove(current.element); // LList method
        
        if (table[positiion].isEmpty()) {
          table[position] = undefined;	
        }
        
        return true;
      }
    }
  };
  
  // returns specific value searched for by key
  this.get = function(key) {
  	var position = loseloseHashCode(key);
  	
    if (table[position]) {
      var current = table[position].getHead(); // LList method
      
      if (current.element.key === key) {
        return current.element.value;	
      }
      
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;	
        }
        current = current.next;
      }
      
    } else {
      return undefined;
    }	
  };
  
  this.print = function() {
  	
    table.forEach(function(item, key) {
      console.log(key + ': ' + item);	
    });
    
  };
};
