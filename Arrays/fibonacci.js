/* 
Code by Tee Blagdon

function fibonacci will accept a number (num) and return the num-th number positioned in the fibonacci sequence

Sample fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
*/


function fibonacci(num) {
    var numbers = [];
    for (var i = 0; i <= num; i++) {
        if (i === 0 || i === 1) {
            numbers.push(i)
        }
        else {
            numbers.push(numbers[i-2] + numbers[i-1]);
        }
    }
    return numbers[num - 1];
}

// fibonacci(5); -> 3
