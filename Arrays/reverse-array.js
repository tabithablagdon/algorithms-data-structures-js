// function reverse takes an array argument and reverse it, returning a new array
// code by Tee Blagdon

function reverse(arr) {
    var reverseArr = [];

    if (!arr) throw "Need to enter a defined array";

    for (var i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}


// var names = ["Tab", "Ed", "Terry", "Chris", "Tom", "Doris", "Brian", "Kevin"];
// reverse(names); 
// => [ 'Kevin', 'Brian', 'Doris', 'Tom', 'Chris', 'Terry', 'Ed', 'Tab' ]
