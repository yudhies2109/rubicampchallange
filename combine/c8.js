function findFirstEven(values) {
    let i = 0;

    while (i < values.length) {
        if (values[i] % 2 === 0) {
            return values[i];
        }
        i++;
    }

    return null;
}

// Tulis function findFirstEven di sini

console.log(findFirstEven([1, 3, 4, 7, 8]));
console.log(findFirstEven([1, 3, 5, 7]));