const prompt = require("prompt-sync")();

let antrian = ["Budi", "Sari", "Andi"];
let nasabahDilayani = 0;
let adaNasabahBaru;

function layaniNasabah() {
    let jmlNasabah = antrian.length;

    for (let i = 0; i < jmlNasabah; i++) {
        console.log(`Melayani nasabah: ${antrian[i]}`);
        nasabahDilayani++;

        if (jmlNasabah - i - 1 === 0) {
            console.log("Antrian Kosong")
        } else {
            console.log(`Sisa antrian: ${jmlNasabah - i - 1} orang`);
        }
    }

    antrian = [];
}


do {

    layaniNasabah();

    // console.log("Antrian Baru", antrian);

    adaNasabahBaru = prompt("Ada nasabah baru yang datang? (y/n):")
    if (adaNasabahBaru.toLowerCase() === "y") {
        antrian.push("Dewi");
        console.log(`Nasabah baru: ${antrian[0]}`);
    }

} while (adaNasabahBaru.toLowerCase() === "y");


console.log("Bank tutup. Total nasabah dilayani: " + nasabahDilayani);