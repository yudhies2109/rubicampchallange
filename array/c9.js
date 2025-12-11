function validateArrayData(arr) {
    let isValid = Array.isArray(arr);

    if (!isValid) {
        return { isValid }
    }


    return {
        isValid,
        allNumbers: arr.every(item => typeof item === "number" ? true : false),
        hasNulls: arr.some(item => item === null ? true : false),
        hasUndefined: arr.some(item => item === undefined ? true : false),
        stats: {
            total: arr.length,
            numbers: arr.filter(item => typeof item == "number").length,
            strings: arr.filter(item => typeof item == "string").length,
            nulls: arr.filter(item => typeof item == "object").length,
            undefineds: arr.filter(item => typeof item == "undefined").length
        },
        cleaned: [...arr].filter(item => typeof item == "number")
    }
}



// Tulis function validateArrayData di sini

let data1 = [1, 2, 3, 4, 5];
let data2 = [1, "2", 3, null, 5, undefined];
console.log(validateArrayData(data1));
console.log(validateArrayData(data2));