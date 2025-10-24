function calculateRectangleArea(panjang, lebar){
    let luasPersegi = panjang * lebar;

    return luasPersegi;
}

let luas1 = calculateRectangleArea(10, 5);
let luas2 = calculateRectangleArea(7, 3);
console.log("Luas persegi panjang (10x5): " + luas1);
console.log("Luas persegi panjang (7x3): " + luas2);