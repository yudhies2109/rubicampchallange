const prompt = require("prompt-sync")();
let angka;
let lanjut;

do {
  // Validasi yang di input hanya berupa angka
  do {
    angka = prompt("Masukkan angka:");
    if (isNaN(angka) || angka.trim() === "") {
      console.log("Masukkan Angka!");
    } else {
      angka = Number(angka);
      // Number Js function global untuk memastikan angka bertype number
      break;
      //   Break : Perintah untuk menghentikan looping
    }
  } while (true);

  console.log(`kuadrat dari ${angka} adalah : ${angka * angka}`);
  // console.log(typeof(angka));
  lanjut = prompt("Apakah ingin melanjutkan? (y/n) :");
} while (lanjut.toLowerCase() === "y");

console.log("Terima Kasih Telah Menggunakan Program!");
