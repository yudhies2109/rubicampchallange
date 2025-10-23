let tombol = "ESC";
// Tulis kode switch statement di sini

// Tombol: "W"=Maju, "S"=Mundur, "A"=Kiri,
// "D"=Kanan, "SPACE"=Lompat, "ESC"=Pause,
// default=Tombol tidak valid.

// Tombol SPACE: Karakter melompat!

switch (tombol) {
  case "W":
    console.log(`Tombol ${tombol}: Karakter Maju!`);
    break;

  case "S":
    console.log(`Tombol ${tombol}: Karakter Mundur!`);
    break;

  case "A":
    console.log(`Tombol ${tombol}: Kiri!`);
    break;

  case "D":
    console.log(`Tombol ${tombol}: Kanan!`);
    break;

  case "SPACE":
    console.log(`Tombol ${tombol}: Lompat!`);
    break;

  case "ESC":
    console.log(`Tombol ${tombol}: Pause!`);
    break;

  default:
    console.log(`Tombol tidak valid`);
    break;
}
