const prompt = require("prompt-sync")();

let tahapInstalasi = ["Download file", "Extract file", "Install program", "Setup konfigurasi"];
let berhasil = false;
let percobaan = 0;

function instalasiSoftware() {
  percobaan++;
  berhasil = Math.random() > 0.5;
  console.log(`=== PERCOBAAN INSTALASI ${percobaan} ===`);

  if (berhasil || percobaan === 3) {
    for (let i = 0; i < tahapInstalasi.length; i++) {
      console.log(`${tahapInstalasi[i]}...berhasil`);
    }
    console.log("Instalasi berhasil dalam " + percobaan + " percobaan!");
  } else {
    for (let i = 0; i < tahapInstalasi.length; i++) {
      console.log(i === 3 ? `${tahapInstalasi[i]}... Gagal` : `${tahapInstalasi[i]}... selesai`);
    }
    console.log("Instalasi dibatalkan setelah " + percobaan + " percobaan.");
  }
}

do {
  instalasiSoftware();
      
  if (!berhasil) {
    cobaLagi = prompt("Instalasi gagal! Coba lagi? (y/n):");
  }

} while (!berhasil && cobaLagi.toLowerCase() === "y");
