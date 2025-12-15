function processObjectData(data) {


    return {
        original: data,
        byType: {
            strings: Object.fromEntries(Object.entries(data).filter(([keys, values]) => typeof values == "string")),
            numbers: Object.fromEntries(Object.entries(data).filter(([keys, values]) => typeof values == "number")),
            booleans: Object.fromEntries(Object.entries(data).filter(([keys, values]) => typeof values == "boolean"))
        },
        transformed: {
            NAME: data.name.toUpperCase(),
            PRICE: data.price * 2,
            INSTOCK: data.inStock,
            CATEGORY: data.category.toUpperCase(),
            RATING: data.rating * 2
        }
    }
}

// Tulis function processObjectData di sini

let data = {
    name: "Product A",
    price: 100,
    inStock: true,
    category: "Electronics",
    rating: 4.5
};
console.log(processObjectData(data));