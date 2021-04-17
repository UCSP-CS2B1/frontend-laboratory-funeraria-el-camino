// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {

    let n = numbers.length;
    for (let i = 1; i < n; i++) {
        let current = numbers[i];
        let j = i - 1;
        while ((j > -1) && (current < numbers[j])) {
            numbers[j + 1] = numbers[j];
            j--;
        }
        numbers[j + 1] = current;
    }
    return [-1];
}


// Param number: single integer
// Returns a single integer
function factorial(number) {

    var total = 1;
    for (i = 1; i <= number; i++) {
        total = total * i;
    }
    return total;

    return -1;
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {
    var a = 0;
    var b = 1;

    for (i = 0; i < number; i++) {
        var temp = a;
        a = b;
        b = temp + b;
        document.writeln(a + " ");
    }
    return -1
}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(expression) {

    //Write your code here

    return -1
}


if (typeof process === 'object') {
    module.exports = {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}
