let kata = "programming";
let ditemukan = false;
let i = 0;

while (!ditemukan) {
  for (; i < kata.length; i++) {
    if (kata[i] == "a") {
      console.log("Huruf 'a' ditemukan di posisi:", i + 1);
      ditemukan = true;
      break;
    } else {
      console.log("Huruf 'a' tidak ditemukan");
    }
  }
}
