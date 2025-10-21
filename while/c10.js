let angka = [5, 3, 8, 2, -1, 7, 4];
let i = 0;
let jumlahPositif = 0;
let totalPositif = 0;

while (i < angka.length) {
  if (angka[i] > 0) {
    console.log(`Memproses: ${angka[i]} (positif)`);
    jumlahPositif++;
    totalPositif += angka[i];
  } else if (angka[i] < 0) {
    console.log(`Dihentikan karena menemukan angka negatif: ${angka[i]}`);
    break;
  } else {
    console.log("Semua elemen array telah diproses");
  }

  i++;
}

console.log("Jumlah angka positif: " + jumlahPositif);
console.log("Total nilai positif: " + totalPositif);
