function analyzeNumbers(arr) {
    let possitive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negative++;
        } else if (arr[i] > 0) {
            possitive++;
        } else {
            zero++;
        }
    }

    return {
        possitive,
        negative,
        zero
    }
}

// Tulis function analyzeNumbers di sini

let result = analyzeNumbers([1, -2, 0, 3, -1, 0, 5]);
console.log(result);