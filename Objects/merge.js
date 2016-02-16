/* The merge utility function copies enumerable properties of object b to object a and returns object a.  
If a and b have the same property, a's property is left alone.  If b has properties a does not own, the b's properties
are added to a.  Merged object is returned. */

function merge(a, b) { 
    for (var prop in b) {
        if (a.hasOwnProperty(prop)) continue;
        
        a[prop] = b[prop];
    }
    return a;
}

/* TEST and OUTPUT: 
var customerList = {
    person1: "sandy", 
    person2: "jack",
    person3: "mindy",
    person4: "joseph",
    person5: null
}

var customerList2 = {
    person1: "sandy", 
    person2: "tabitha",
    person3: "brian",
    person4: "josepth",
    person5: "terry",
    person6: "chris",
    person7: "ed"
}

extend(extend({}, customerList), customerList2);

//Result: 
=> { person1: 'sandy',
  person2: 'jack',
  person3: 'mindy',
  person4: 'joseph',
  person5: null,
  person6: 'chris',
  person7: 'ed' }
*/




