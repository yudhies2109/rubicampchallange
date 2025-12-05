function transformArray(arr, operations) {
    let { multiply, add, logEach } = operations;
    let transformed = arr.map(num => num * multiply + add);
    let sumValues = transformed.reduce((acc, num) => num = acc + num) - 5;
    let processed = arr.length;

    transformed.forEach(num => {
        let result = num * multiply + add
        console.log(`Processing: ${num} -> ${result}`)
    });

    return {
        original: arr,
        transformed: transformed,
        stats: {
            processed: processed,
            sum: sumValues,
            average: sumValues / processed
        }
    }

}


let numbers = [1, 2, 3, 4, 5];
console.log(transformArray(numbers, {
    multiply: 2,
    add: 1,
    logEach: true
}));