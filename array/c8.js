function aggregateArray(arr) {
    let isNumber = arr.every(items => typeof items === "number");
    let isString = arr.every(items => typeof items === "string");

    if (isNumber) {
        let sumValues = arr.reduce((num, acc) => num = num + acc);
        let product = arr.reduce((num, acc) => num = num * acc);
        let maxValues = arr.reduce((num, acc) => acc < num ? num : acc);
        let minValues = arr.reduce((num, acc) => acc > num ? num : acc);
        let sortedAsc = [...arr].sort((num, acc) => num - acc);
        let sortedDesc = [...arr].sort((num, acc) => acc - num);


        return {
            original: arr,
            sum: sumValues,
            product: product,
            max: maxValues,
            min: minValues,
            sortedAsc: sortedAsc,
            sortedDesc: sortedDesc
        }
    } else if (isString) {
        let concatenated = arr.join("");
        let maxValues = arr.reduce((acc, curr) =>
            curr.length > acc.length ? curr : acc
        );
        let minValues = arr.reduce((acc, curr) =>
            curr.length < acc.length ? curr : acc
        );

        let sortedAsc = [...arr].sort();
        let sortedDesc = [...arr].sort().reverse();

        return {
            original: arr,
            concatenated: concatenated,
            longest: maxValues,
            shortest: minValues,
            sortedAsc: sortedAsc,
            sortedDesc: sortedDesc

        }
    }

}

console.log(aggregateArray([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(aggregateArray(["banana", "apple", "cherry", "date"]));