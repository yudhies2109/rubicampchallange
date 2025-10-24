let jenisKendaraan = "mobil";
let durasi = 3; // jam

if (jenisKendaraan === "motor") {
    let tarifParkir = 2000;
    let totalBayar = durasi *tarifParkir;

    console.log(`Jenis kendaraan: ${jenisKendaraan}`);
    console.log(`Durasi parkir: ${durasi} jam`);
    console.log(`Tarif per jam: Rp ${tarifParkir}`);
    console.log(`Total bayar: Rp ${totalBayar}`);

} else if(jenisKendaraan === "mobil"){
    let tarifParkir = 5000;
    let totalBayar = durasi * tarifParkir;

    console.log(`Jenis kendaraan: ${jenisKendaraan}`);
    console.log(`Durasi parkir: ${durasi} jam`);
    console.log(`Tarif per jam: Rp ${tarifParkir}`);
    console.log(`Total bayar: Rp ${totalBayar}`);
} else if(jenisKendaraan === "Truk"){
    let tarifParkir = 10000;
    let totalBayar = durasi * tarifParkir;

    console.log(`Jenis kendaraan: ${jenisKendaraan}`);
    console.log(`Durasi parkir: ${durasi} jam`);
    console.log(`Tarif per jam: Rp ${tarifParkir}`);
    console.log(`Total bayar: Rp ${totalBayar}`);
} else {
    console.log("Kendaraan tidak diizinkan")
}