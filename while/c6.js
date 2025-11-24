const prompt = require("prompt-sync")();

let password;
let percobaan = 0;
let maxPercobaan = 3;
let berhasil = false;

while (!berhasil) {
    password = prompt(`Input Password : `);

    maxPercobaan--;

    if (password === "admin123") {
        console.log(`Login berhasil!`);
        berhasil = true;
    } else {
        if (maxPercobaan > 0) {
            console.log(`Password salah. Sisa percobaan: ${maxPercobaan}`)
        } else {
            console.log("Akses ditolak. Terlalu banyak percobaan gagal.");
            break;
        }
    }

}