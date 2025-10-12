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

  pilihan = parseInt(prompt("Pilih Menu :"));

  switch (pilihan) {
    case 1:
      console.log(`Saldo Anda : ${saldo}`);
      lanjut = prompt("Apakah ingin melanjutkan? (y/n) :");
      break;
    case 2:
      jml_penarikan = parseInt(prompt("Masukkan Jumlah Penarikan: "));
      if (jml_penarikan >= saldo) {
        console.log("Saldo Tidak Mecukupi!");
        lanjut = prompt("Apakah ingin melanjutkan? (y/n) :");
      } else {
        console.log(`Penarikan berhasil. Saldo: ${saldo - jml_penarikan}`);
        lanjut = prompt("Apakah ingin melanjutkan? (y/n) :");
      }
      break;
    case 3:
      jml_setoran = parseInt(prompt("Masukkan Jumlah Setoran :"));
      console.log(`Setoran Berhasil. Saldo : ${saldo + jml_setoran}`);
      lanjut = prompt("Apakah ingin melanjutkan? (y/n) :");
      break;
    case 4:
      lanjut = "n";
      break;
    default:
      console.log("Pilihan Tidak Valid!");
      lanjut = prompt("Apakah ingin melanjutkan? (y/n) :");
  }
} while (lanjut.toLowerCase() === "y");

console.log("Terima kasih telah menggunakan ATM!");
