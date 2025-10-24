let totalBelanja = 350000;
// Tulis kode if-else if statement di sini

if (totalBelanja >= 500000) {
    let persenDiskon = 20;
    let totalPotongan = (persenDiskon/100) * totalBelanja;
    let totalBayar = totalBelanja - totalPotongan;

    console.log(`Total belanja: Rp ${totalBelanja}`);
    console.log(`Diskon: 20%`)
    console.log(`Total bayar: Rp ${totalBayar}`)
} else if(totalBelanja >= 200000) {
    let persenDiskon = 10;
    let totalPotongan = (persenDiskon/100) * totalBelanja;
    let totalBayar = totalBelanja - totalPotongan;

    console.log(`Total belanja: Rp ${totalBelanja}`);
    console.log(`Diskon: 10%`)
    console.log(`Total bayar: Rp ${totalBayar}`)
} else if( totalBelanja >= 100000){
    let persenDiskon = 5;
    let totalPotongan = (persenDiskon/100) * totalBelanja;
    let totalBayar = totalBelanja - totalPotongan;

    console.log(`Total belanja: Rp ${totalBelanja}`);
    console.log(`Diskon: 5%`);
    console.log(`Total bayar: Rp ${totalBayar}`);
}