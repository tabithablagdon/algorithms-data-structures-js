function isNumber(num){

    if ((typeof num === 'string' || typeof num === 'number') && !isNaN(num) && num !== '') {
        console.log("True!  The number you entered is " + num);
    }
    else {
        console.log("False!  You entered the faulty value " + num + ".  Enter a number.");
    }

};

// Test cases

isNumber(0);  //true
isNumber(-5); // true
isNumber("5"); // true
isNumber(5.234); // true
isNumber("-3434.6");

isNumber(""); // false
isNumber("word");  // false
isNumber(null);  // false
isNumber();  // false
isNumber(undefined); // false
isNumber('one');  // false
isNumber([]);  // false
isNumber(true);  // false

// How do I fix these??

isNumber(%); // unexpected token %
isNumber(5 + 3); // Invalid flags supplied to RegExp constructor 'true'
isNumber(undeclaredVariable); //referenceError: undeclaredVariable is not defined - how to fix???
