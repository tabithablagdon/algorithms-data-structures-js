/* the shuffle() function takes an array argument and shuffles it, returning a new, shuffled array */

var shuffle = function(arr) {
    var randomNum, temp;
    var i = arr.length;
    var shuffled = arr.slice(0);
    
    while (--i > 0) {
        randomNum = Math.floor(Math.random() * (i + 1));
        temp = shuffled[randomNum];
        shuffled[randomNum] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled;
}
