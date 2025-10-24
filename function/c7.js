// Tulis function createProfile di sini
function createProfile(nama, status) {
  let statusMember = status !== undefined ? status : "Member";

  return `Profil: ${nama} (${statusMember})`;
}
// Panggil function dengan dan tanpa parameter kedua
let profil1 = createProfile("Budi");
let profil2 = createProfile("Sari", "Admin");
console.log(profil1);
console.log(profil2);
