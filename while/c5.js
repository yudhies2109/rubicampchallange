let angka = 100;
let langkah = 0;


while (angka > 1) {
    angka = angka / 2;
    langkah ++;
    console.log(`Langkah ${langkah}: ${angka} / 2 = ${angka}`);
}

console.log(`Proses selesai setelah ${langkah} langkah`);