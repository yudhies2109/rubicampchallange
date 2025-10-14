const prompt = require("prompt-sync")();

let angkaRahasia = 7;
let tebakan;
let percobaan = 0;

while(tebakan != angkaRahasia){
    tebakan = Number(prompt("Masukkan Nilai Tebakan Anda :"));

    if(tebakan < angkaRahasia){
        console.log("Terlalu kecil! Coba lagi.");
    } else if (tebakan === angkaRahasia) {
        console.log("Tebakan Anda BENAR!");
    } else if (tebakan > angkaRahasia){
        console.log("Terlalu besar! Coba lagi.");
    } else {
        console.log("Inputkan Angka 1-10");
    }

    percobaan++;
}

console.log(`Selamat! Anda berhasil menebak dalam ${percobaan} percobaan`);
