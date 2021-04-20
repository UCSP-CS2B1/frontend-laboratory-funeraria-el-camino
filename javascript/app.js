// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {
    let n = numbers.length;
    for (let x = 1; x < n; x++) {
        let current = numbers[i];
        let y = x - 1;
        while ((y > -1) && (current < numbers[y])) {
            numbers[y + 1] = numbers[y];
            y--;
        }
        numbers[y + 1] = current;
    }
    document.getElementById("demo").innerHTML = numbers;
    return [-1];
    
}

// Param number: single integer
// Returns a single integer
function factorial(number) {
    var control = document.getElementById(number);
    var number = parseInt(control.value);
    var n = new Number(number)
    var total = 1;
    for (i = 1; i <= n; i++) {
        total = total * i;  
    }
    document.getElementById("demo").innerHTML = total;
    return ;
    
}

// Param number: single integer
// Returns a single integer
function fibonacci(NUMBER) {
    var x = 0;
    var b = 1;

    for (i = 0; i < number; i++) {
        var temp = x;
        x = b;
        b = temp + b;
        document.writeln(a + " ");
    }
    return -1
}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(expression) {

    function evaluation(expression) {
        var arr = [],
            signo = [],
            index = 0,
            operacion = true
        var chars = expression.split("")
        arr[index] = ""
        for (var i = 0; i < chars.length; i++) {
            if (chars[i] !== "." && !operacion && isNaN(parseInt(chars[i]))) {
                signo[index] = chars[i]
                index++

                arr[index] = ""
                operacion = true
            }

            else {
                arr[index] += chars[i]
                operacion = false
            }
        }
        expression = parseFloat(arr[0])
        for (var j = 0; j < signo.length; j++) {
            var numero = parseFloat(arr[j + 1])
            if (signo[0] == "+") {
                expression += numero
            }
            if (signo[0] == "*") {
                expression *= numero
            }
            if (signo[0] == "/") {
                expression /= numero
            }
            if (signo[0] == "-") {
                expression -= numero
            }
        }
        console.log("")
        return result
    }

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
