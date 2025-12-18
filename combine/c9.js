function processMenu(menu, jmlh) {
    let harga = 15000;

    switch (true) {
        case menu <= 3:
            if (jmlh != 0) {
                return (`Rp ${jmlh * harga}`);
            } else {
                return "Invalid quantity";
            }

        default:
            return "Invalid menu";
    }
}

// Tulis function processMenu di sini

console.log(processMenu(1, 2)); // Nasi Goreng Rp15000
console.log(processMenu(2, 0)); // Invalid quantity
console.log(processMenu(4, 1)); // Invalid menu