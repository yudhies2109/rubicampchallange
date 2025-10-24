// Tulis function validateAndCalculateGrade di sini
function validateAndCalculateGrade(nama, nilai) {

    let grade = "";

    if (nilai >= 90 && nilai <= 100) {
        console.log(" ");
        console.log("=== Hasil Penilaian ===");
        console.log(`Nama: ${nama}`);
        console.log(`Nilai: ${nilai} (Valid)`);
        console.log(`Grade: A`);
        grade = "A";
    } else if(nilai >= 80 && nilai <= 89){
        console.log(" ");
        console.log("=== Hasil Penilaian ===");
        console.log(`Nama: ${nama}`);
        console.log(`Nilai: ${nilai} (Valid)`);
        console.log(`Grade: B`);
        grade = "B";
    } else if(nilai >= 70 && nilai <= 79){
        console.log(" ");
        console.log("=== Hasil Penilaian ===");
        console.log(`Nama: ${nama}`);
        console.log(`Nilai: ${nilai} (Valid)`);
        console.log(`Grade: C`);
        grade = "C";
    } else if(nilai >= 60 && nilai <= 69){
        console.log(" ");
        console.log("=== Hasil Penilaian ===");
        console.log(`Nama: ${nama}`);
        console.log(`Nilai: ${nilai} (Valid)`);
        console.log(`Grade: D`);
        grade = "D";
    } else if(nilai >= 0 && nilai <= 59){
        console.log(" ");
        console.log("=== Hasil Penilaian ===");
        console.log(`Nama: ${nama}`);
        console.log(`Nilai: ${nilai} (Valid)`);
        console.log(`Grade: D`);
        grade = "E";
    } else {
        console.log(" ");
        console.log("=== Hasil Penilaian ===");
        console.log(`Nama: ${nama}`);
        console.log(`Nilai: ${nilai} (Tidak Valid - harus 0-100)`);

        grade = null;
    }

    return grade;
}
// Test dengan berbagai nilai
let grade1 = validateAndCalculateGrade("Budi", 85);
let grade2 = validateAndCalculateGrade("Sari", 150); // invalid
let grade3 = validateAndCalculateGrade("Andi", 72);
console.log(" ");
console.log("Grade Budi: " + grade1);
console.log("Grade Sari: " + grade2);
console.log("Grade Andi: " + grade3);