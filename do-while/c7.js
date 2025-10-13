const prompt = require("prompt-sync")();

let tahap = ["Mengisi air", "Mencuci", "Membilas", "Mengeringkan"];
let tambahBilas;
let siklusSelesai = 0;

function siklusPencucian() {
  siklusSelesai++;
  console.log(`=== SIKLUS PENCUCIAN ${siklusSelesai} ===`);
  
  for (let i = 0; i < tahap.length; i++) {
    console.log(`${tahap[i]}...selesai`);
  }

}

do{
    siklusPencucian();
    tambahBilas = prompt("Tambah siklus pembilasan? (y/n) :");

}while(tambahBilas.toLowerCase() === "y")

console.log(`Mesin cuci selesai! Total siklus: ${siklusSelesai}`);
