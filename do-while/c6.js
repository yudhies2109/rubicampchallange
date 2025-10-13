const prompt = require("prompt-sync")();

let soal = ["5 + 3 = ?", "10 - 4 = ?", "7 * 2 = ?"];
let jawaban = [8, 6, 14];
let jawabanUser;
let lanjut = "y";
let nomorSoal = 0;
let benar = 0;

do {
  console.log(`Soal ${nomorSoal + 1}: ${soal[nomorSoal]}`);
  jawabanUser = parseInt(prompt("Jawaban Anda: "));

  if (jawabanUser === jawaban[nomorSoal]) {
    console.log("Benar!");
    benar++;
  } else {
    console.log(`Salah! Jawaban yang benar: ${jawaban[nomorSoal]}`);
  }

  nomorSoal++;

  // Jika masih ada soal, tanyakan lanjut
  if (nomorSoal < soal.length) {
    do {
      lanjut = prompt("Apakah ingin melanjutkan? (y/n): ").toLowerCase();
      if (lanjut !== "y" && lanjut !== "n") {
        console.log("Input tidak valid! Masukkan 'y' untuk lanjut atau 'n' untuk berhenti.");
      }
    } while (lanjut !== "y" && lanjut !== "n");

    if (lanjut === "n") {
      break; // langsung keluar kalau user pilih n
    }
  } else {
    break; // soal terakhir otomatis selesai
  }
} while (lanjut === "y");

console.log(`Kuis selesai! Skor: ${benar} / ${nomorSoal}`);
