
/* The combine utility function copies enumerable properties of objecty b to object a and returns object a.  
If a and b have the same property, a's property is overwritten by b's */

function combine(a, b) { 
    for (var prop in b) {
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
    person5: "terry"
}

// Use this to replace Object a
combine(customerList, customerList2);

//Use this to not change Object a
extend(extend({}, customerList), customerList2);

//Result: 
=> { person1: 'sandy',
  person2: 'tabitha',
  person3: 'brian',
  person4: 'josepth',
  person5: 'terry' }

*/
