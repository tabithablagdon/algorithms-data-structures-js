// isArrayLike() checks to see if the argument provided is an array-like object
// checks for typeof object and length properties


function isArrayLike(arr) {
  if (arr && 
    typeof arr === "object" &&
    isFinite(arr.length) && 
    arr.length >= 0 && 
    arr.length === Math.floor(arr.length)) {
    return true;
  } else {
    return false;
  }
}
