let teks = "   hello world   ";
let langkah = 0;
let result = "";


// While loop untuk menghapus spasi di awal
while (teks.startsWith(" ")) {
    teks = teks.slice(1); 
    langkah++;
    console.log("Langkah " + langkah + ": '" + teks + "'");
}

console.log("Hasil akhir: '" + teks + "'");
console.log(`Total spasi yang dihapus: + ${langkah}`);
