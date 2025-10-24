// Tulis function sumAllNumbers di sini
function sumAllNumbers(){

    let sumNumber = 0;
    for (let i = 0; i < arguments.length; i++) {
        sumNumber = sumNumber + arguments[i];        
    }
    return sumNumber;
}
// Panggil function dengan jumlah parameter berbeda
let total1 = sumAllNumbers(1, 2, 3);
let total2 = sumAllNumbers(5, 10, 15, 20);
let total3 = sumAllNumbers(2, 4, 6, 8, 10, 12);
console.log("Total (1,2,3): " + total1);
console.log("Total (5,10,15,20): " + total2);
console.log("Total (2,4,6,8,10,12): " + total3);