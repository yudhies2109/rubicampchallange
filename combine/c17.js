function factorial(n) {
    if (n < 0) {
        return "Error: Invalid input1";
    } else if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Tulis function factorial di sini

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-1));