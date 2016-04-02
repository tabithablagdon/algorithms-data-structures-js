// isNumber tests if argument is a number, even if entered as a string

function isNumber(num){
    if ((typeof num === 'string' || typeof num === 'number') && !isNaN(num) && num !== "") {
        console.log("True!  You entered " + num);
    }
    else {
        console.log("False!  You entered " + num);
    }
};

// Test cases

isNumber(0);  // true
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
