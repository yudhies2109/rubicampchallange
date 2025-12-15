function analyzeObject(obj) {


    return {
        propertyCount: Object.keys(obj).length,
        keys: Object.keys(obj),
        values: Object.values(obj),
        isEmpty: Object.keys(obj).length == 0 ? true : false
    }
}


// Tulis function analyzeObject di sini

let person = { name: "John", age: 25, city: "Jakarta" };
let empty = {};
console.log(analyzeObject(person));
console.log(analyzeObject(empty));