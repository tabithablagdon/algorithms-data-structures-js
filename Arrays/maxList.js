/* the max function takes two parameters - an array list and an iterator function that will be used on each list element to set criteria 
for ranking.  If no iterator is provided, an identity-like function will be passed through and elements ranked by alphabet.  
If list is falsey or contains no contents, function will return to user "List is empty.  Provide a list of values." 

Code by tee
*/


var maxList = function(list, iterator) {
    iterator = iterator || function(x) { return x; };
    
    if (!list || list.length === 0) return "List is empty.  Provide list of values.";
    
    return list.reduce(function(past, current) {
      if (iterator(past) < iterator(current)) { 
        past = current;
      }
      return past;
    });
}

