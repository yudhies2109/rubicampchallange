function askConfirmation() {
    const prompt = require("prompt-sync")();
    let konfirmasi;

    do {
        konfirmasi = prompt("Konfirmasi (yes/no): ").toLowerCase();

        if (konfirmasi !== "no" && konfirmasi !== "yes") {
            console.log("Input Tidak Valid!");
        }

    } while (konfirmasi !== "yes");

    console.log("Konfirmasi diterima!");
}

askConfirmation();