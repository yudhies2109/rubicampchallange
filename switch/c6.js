let warna = "meah";
// Tulis kode switch statement di sini

switch (warna.toLowerCase()) {
  case "hijau":
    console.log(`Lampu ${warna} : Silahkan Jalan!`);
    break;

  case "kuning":
    console.log(`Lampu ${warna} : Hati-hati, bersiap berhenti`);
    break;

  case "merah":
    console.log(`Lampu ${warna} : Harap Berhenti`);
    break;

  default:
    console.log("Lampu rusak!");
    
    break;
}
