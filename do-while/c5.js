const prompt = require("prompt-sync")();
let angkaRandom;
let percobaan = 1;

function randomValue() {
  return Math.floor(Math.random() * 100 + 1);
}

// console.log(randomValue());

do {
  angkaRandom = randomValue();

  if (angkaRandom % 2 === 0) {
    console.log(`Percobaan ${percobaan}: ${angkaRandom} (genap, coba lagi)`);
    console.log(`Angka genap ditemukan: ${angkaRandom} dalam ${percobaan} percobaan`);
    break;
  } else {
    console.log(`Percobaan ${percobaan}: ${angkaRandom} (ganjil, coba lagi)`);
    percobaan++;
  }

} while (percobaan <= 100);
