let numbers = [1, 5, 10, 15, 20];
let words = ["apple", "banana", "cherry"];


function searchArray(arr, criteria) {

    const { type, value, condition } = criteria;

    let found = 0;
    let filltered = [];
    let includes = false;

    if (type === "number") {
        if (condition === "greater") {
            found = arr.find(item => item > value);
            filltered = arr.filter(item => item > value);
            console.log("Ini Nilai includes", includes);
        }
    }

    if (type === "string") {
        if (condition === "contains") {
            found = arr.find(item => item.includes(value));
            filltered = arr.filter(item => item.includes(value));
            console.log("Ini Nilai found", typeof(found));
        }
    }
    includes = arr.includes(value);

    return {
        found: found,
        filtered: filltered,
        includes: includes,
        count: filltered.length
    }
}

console.log(searchArray(numbers, { type: "number", value: 10, condition: "greater" }));
console.log(searchArray(words, { type: "string", value: "an", condition: "contains" }));