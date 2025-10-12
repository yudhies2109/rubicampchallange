const prompt = require("prompt-sync")();
let saldo = 100000;
let pilihan;
let lanjut;
let jml_penarikan;
let jml_setoran;

do {
  console.log("=== ATM Menu ===");
  console.log("1. Cek Saldo");
  console.log("2. Tarik Tunai");
  console.log("3. Setor Tunai");
  console.log("4. Keluar");

  // Masukkan Pilihan dalam prompt

  pilihan = prompt("Masukkan Angka :");

  // Cek apakah yang dimasukkan angka/bukan

  if (isNaN(pilihan) || pilihan.trim() === "") {
    console.log("Masukkan Angka!");
    continue;
  }

  pilihan = Number(pilihan);

//   Switch - Case

switch (pilihan){
    case 1 :
        console.log(`Saldo Anda : ${saldo}`);
        lanjut = prompt("Apakah ingin melanjutkan? (y/n) :");
        break;
    default:
        console.log("Pilihan Tidak Valid!")
}
} while (lanjut.toLowerCase() === "y");
// } while (lanjut.toLowerCase()=== "y");

console.log("Terima kasih telah menggunakan ATM!");
