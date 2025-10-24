let berat = 70; // kg
let tinggi = 1.75; // meter
// Hitung BMI terlebih dahulu
// Tulis kode if-else if-else statement di sini

function hitungBMI (berat, tinggi){
    let BMI = berat / Math.pow(tinggi, 2);
    // console.log("Ini BMI", BMI)
    return BMI;
}

let nilaiBMI = hitungBMI(berat, tinggi);

// console.log(nilaiBMI);

// hitungBMI(berat, tinggi)

// console.log("Ini hasil BMI :", hitungBMI(berat, tinggi));

if (nilaiBMI < 18.5) {
    console.log(`BMI: ${nilaiBMI}`);
    console.log("Kategori: Underweight");
} else if(nilaiBMI < 25){
    console.log(`BMI: ${nilaiBMI}`);
    console.log("Kategori: Normal");
}else if(nilaiBMI < 30){
    console.log(`BMI: ${nilaiBMI}`);
    console.log("Kategori: Overweight");
} else {
    console.log(`BMI: ${nilaiBMI}`);
    console.log("Kategori: Obese");
}