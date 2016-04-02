/* map2() function has two parameters - an array and a function.  map2() will iterate through the provided arr (arr) and invoke function (x) on every element, returning a new array.
*/

function map2(arr, x) {
    var newArr = [];
    // test for falsey inputs of arr and x
    if (!arr || !x) throw "Enter valid arguments for arr and x";
    
    // test whether arr is an array-like object
    else if (typeof arr !== "object" || arr.length < 0) throw "Needs to be array-like object";
    
    // test whether x is a function - x needs to be a function
    else if (typeof x !== "function") throw "parameter x: needs to be a function";
    
    // execute map2() if all tests pass
    else {
        for (var i = 0; i < arr.length; i++) {
            newArr.push(x(arr[i]));
        }
        
        return newArr;
    }
}


/* TEST
function double(num) {
    return num + num;
}

var arr = [1, 2, 3];

console.log(map2(arr, double)); //[2, 4, 6]

*/
