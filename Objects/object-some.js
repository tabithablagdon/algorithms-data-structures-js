/* 
The objectSome() function looks through an array of objects (first argument collection) and returns an array of all objects that have 
matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object 
from the collection if it is to be included in the returned array.

Code by Tee Blagdon
*/

function objectSome(collection, source) {
  var sourceKeys = Object.keys(source);
  
  var arr = collection.filter(function(item) {
    var itemKeys = Object.keys(item);
    var isSame = false;
    for (var x in source) {
      if (itemKeys.length < sourceKeys.length) {
        return false;
      }
      if (item.hasOwnProperty(x) && item[x] === source[x]) {
        isSame = true;
      }
      else {
        isSame = false;
      }
    }
    return isSame;
  });
  
  return arr;
}


/* Outputs:
objectSome([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }); 
// -> [{ "a": 1, "b": 2, "c": 2 }]

objectSome([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// -> [{ first: "Tybalt", last: "Capulet" }]

*/
