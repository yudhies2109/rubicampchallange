function aggregateArray(arr) {
    let isNumber = arr.every(item => typeof item === "number");

    if (isNumber) {
        return {
            original: [...arr],
            sum: arr.reduce((num, acc) => num = num + acc),
            product: arr.reduce((num, acc) => num = num * acc),
            max: arr.reduce((num, acc) => acc < num ? num : acc),
            min: arr.reduce((num, acc) => acc > num ? num : acc),
            sortedAsc: [...arr].sort((a, b) => a - b),
            sortedDesc: arr.sort((a, b) => b - a)
        }
    } else {
        return {
            original: [...arr],
            concatenated: arr.join(""),
            longest: arr.reduce((num, acc) => acc.length <= num.length ? num : acc),
            shortest: arr.reduce((num, acc) => acc.length >= num.length ? num : acc),
            sortedAsc: [...arr].sort(),
            sortedDesc: arr.sort().reverse()
        }
    }

}


// Tulis function aggregateArray di sini

console.log(aggregateArray([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(aggregateArray(["banana", "apple", "cherry", "date"]));