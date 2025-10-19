const prompt = require("prompt-sync")();
let pilihan;

while (true) {
  console.log("=== MENU KALKULATOR ===");
  console.log("1. Tambah");
  console.log("2. Kurang");
  console.log("3. Kali");
  console.log("4. Keluar");

  pilihan = Number(prompt("Pilih menu (1-4) : Anda memlih "));
  process.stdout.moveCursor(0, -1);
  

  switch (pilihan) {
    case 1:
      console.log("Pilih menu (1-4) : Anda memlih Tambah");
      break;
    case 2:
      console.log("Pilih menu (1-4) : Anda memlih Kurang");
      break;
    case 3:
      console.log("Pilih menu (1-4) : Anda memlih Kali");
      break;
    case 4:
      console.log("Pilih menu (1-4) : Terima Kasih telah menggunakan program!");
      process.exit();
    default:
      console.log("HARUS MASUKKAN SESUAI PILIHAN MENU (1-4)");
  }
}
