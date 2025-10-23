let kata = "programming";
let jumlahVokal = 0;

for (let i = 0; i <= kata.length; i++) {
  let totalKata = kata.charAt(i);

  if (totalKata === "a" || totalKata === "i" || totalKata === "u" || totalKata === "e" || totalKata === "o") {
    jumlahVokal += 1;
  }
}

console.log("Jumlah Vokal :", jumlahVokal);
