function processOrder(namaItem, jumlah){
    let hargaItem = 15000;
    let subTotal = jumlah * hargaItem;

    console.log(" ");
    console.log("=== Detail Pesanan ===");
    console.log(`Item: ${namaItem}`);
    console.log(`Jumlah: ${jumlah}`);
    console.log(`Harga per item: Rp ${hargaItem}`);
    console.log(`Sub Total: Rp ${subTotal}`);
    console.log(" ");

    return subTotal;
}

let totalBayar1 = processOrder("Nasi Goreng", 2);
let totalBayar2 = processOrder("Mie Ayam", 3);
console.log("Total yang harus dibayar: Rp " + (totalBayar1 + totalBayar2));