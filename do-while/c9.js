const prompt = require("prompt-sync")();

let tahapInstalasi = ["Download file", "Extract file", "Copy File", "Install program", "Setup konfigurasi"];
let stop = false;
let percobaan = 0;
let Berhasil = false;

do {
  percobaan++;
  let gagal = Math.floor(Math.random() * tahapInstalasi.length + 1);
  console.log(`=== PERCOBAAN INSTALASI ${percobaan}===`);

  for (let i = 0; i <= gagal; i++) {
    if (i == tahapInstalasi.length) {
      stop = true;
      Berhasil = true;
    } else {
      console.log(`${tahapInstalasi[i]}... ${i == gagal ? "GAGAL" : "Berhasil"}`);
    }
  }
  if (!stop) {
    stop = prompt("Instalasi gagal! Coba lagi? (y/n):").toLowerCase() == "n" ? true : false;
  }
} while (!stop);

console.log(`percobaan ${Berhasil ? "Berhasil" : "Gagal"} dalam ${percobaan} percobaan`);
