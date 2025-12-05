function validateArrayData(arr) {
    let isValid = arr.every(items => typeof items === "number" ? true : false);
    let allNumber = arr.every(items => typeof items === "number" ? true : false);
    let hasNulls = arr.some(items => items === null ? true : false);
    let hasUndefined = arr.some(items => items === undefined ? true : false);
    let total = arr.length;
    let numbers = 0;
    let strings = 0;
    let nulls = 0;
    let undefineds = 0;
    let cleaned = [];

    for (let i = 0; i < arr.length; i++) {
        let isValues = typeof arr[i];

        if (isValues === "number") {
            numbers++;
            cleaned.push(arr[i])
        } else if (isValues === "string") {
            strings++;
        } else if (isValues === "object") {
            nulls++;
        } else {
            undefineds++;
        }
    }

    return {
        isValid: isValid,
        allNumber: allNumber,
        hasNulls: hasNulls,
        hasUndefined: hasUndefined,
        stas: {
            total: total,
            numbers: numbers,
            strings: strings,
            nulls: nulls,
            undefineds: undefineds
        },
        cleaned: cleaned
    }
}

let data1 = [1, 2, 3, 4, 5];
let data2 = [1, "2", 3, null, 5, undefined];
console.log(validateArrayData(data1));
console.log(validateArrayData(data2));