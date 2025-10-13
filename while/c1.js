const prompt = require("prompt-sync")();

let angka;

while(true){
    angka = prompt(`user input :`);

    if( isNaN(angka) || angka <1 || angka > 10){
        console.log("Input tidak valid, masukkan angka 1-10");
    } else {
        console.log(`Angka valid yang dimasukkan: ${angka}`);
        break;
    }
}
