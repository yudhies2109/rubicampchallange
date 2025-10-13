const prompt = require("prompt-sync")();

let namaDepan = "user";
let username;
let puas;
let percobaan = 0;

function generateRandom() {
  let randomAngka = Math.floor(Math.random() * 9000 + 1000);
  username = namaDepan + randomAngka;

  return username;
}

do {
  percobaan++, generateRandom();
  console.log(`Percobaan ${percobaan}: Username yang dihasilkan: ${username}`);
  puas = prompt("Apakah Anda puas dengan username ini? (y/n):");
  
  if (puas !== "y" && puas !== "n") {
      console.log("Input tidak valid! Masukkan 'y' untuk lanjut atau 'n' untuk berhenti.");
      puas = prompt("Apakah Anda puas dengan username ini? (y/n):");
    }

} while (puas.toLowerCase() === "n");

console.log(`Username final: ${username} (dibuat dalam ${percobaan} percobaan)`);
