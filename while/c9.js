let angka = 2;
let iterasi = 0;

while (angka <= 1000) {
  iterasi++;
  console.log(`Iterasi ${iterasi}: ${angka}^2 = ${angka * angka}`);
  angka = angka * angka;
}

console.log("Angka " + 2 + " harus dikuadratkan " + iterasi + " kali untuk melebihi 1000");
console.log("Hasil akhir: " + angka);
