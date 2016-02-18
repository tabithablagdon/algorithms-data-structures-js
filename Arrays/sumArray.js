// sumArray() sums all elements in an array, checking for array type and number elements - calls on isArrayLike()
// code by Tee Blagdon

function isArrayLike(arr) {
    if (arr && 
        typeof arr === "object" &&
        isFinite(arr.length) && 
        arr.length >= 0 && 
        arr.length === Math.floor(arr.length)) {
        return true;
    }
    else {
        return false;
    }
}



function sumArray(arr) {
    if(isArrayLike) {
        var total = 0;
        arr.forEach(function(num){
            if (num != undefined && isFinite(num)) {
                total +=num;
            }
            else {
                throw new Error("sumArray(): Elements must have finite numbers");
            }
        });
        return total;
    }
    else {
        throw new Error("sumArray(): Need to input an array-like object");
    }
}

sumArray("asfadsad"); // TypeError: arr.forEach is not a function
