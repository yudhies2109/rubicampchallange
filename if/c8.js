let berat = 70; // kg
let tinggi = 1.75; // meter
// Hitung BMI terlebih dahulu
// Tulis kode if-else if-else statement di sini

function hitungBMI (berat, tinggi){
    let BMI = berat / tinggi;
    console.log("Ini BMI", BMI)
    return BMI;
}

// hitungBMI(berat, tinggi)

console.log("Ini hasil BMI :", hitungBMI(berat, tinggi));
