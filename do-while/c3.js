const prompt = require("prompt-sync")();
let password;
let valid = false;

function cekInput(str){
    // let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
    let regex = /^(?=.*\d).{6,}$/;
    // ^ : Input awal string
    //$ : Input Akhir String
    //(?=.*[a-z]) : Harus ada huruf Kecil
    //(?=.*[A-Z]) : Harus ad huruf besar
    // (?=.*\d) : Harus ada angka
    // (?=.*[^A-Za-z0-9]) : Harus ada simbil
    // {8,} : Minimal 8 Karakter

    // console.log("Ini Nilai hasil cek", regex.test(str))
    return regex.test(str);
}

do{
    password = prompt("Buat Password Anda:")
    if(cekInput(password)){
        console.log("Password Valid!")
        valid = true;
    } else {
        console.log("Password tidak valid! Harus minimal 6 karakter dan mengandung angka.")
    }
}while(!valid);

console.log("Password berhasil dibuat:" + password);





// Input form
// Cek apakah inputan terdapat 6 karakter
// Cek apakah inputan ada angka dan karakter
