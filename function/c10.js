// Tulis function validateAndCalculateGrade di sini
function validateAndCalculateGrade(nama, nilai) {
    let grade = "";
    if (nilai >= 90 && nilai <= 100) {
        grade = "A";
    } else if (nilai >= 80 && nilai <= 89) {
        grade = "B";
    } else if (nilai >= 70 && nilai <= 79) {
        grade = "C";
    } else if (nilai >= 60 && nilai <= 69) {
        grade = "D";
    } else if (nilai >= 0 && nilai <= 59) {
        grade = "E";
    } else {
        grade = null;
    }

    console.log("=== Hasil Penilaian === ");
    console.log(`Nama : ${nama}`);
    console.log(`Nilai : ${nilai} (${grade ? "Valid" : "Tidak Valid - harus 0 - 100"} )`);
    if (grade)
        console.log(`Grade: ${grade}`);
    console.log();

    return grade;
}

// Test dengan berbagai nilai
let grade1 = validateAndCalculateGrade("Budi", 85);
let grade2 = validateAndCalculateGrade("Sari", 150); // invalid
let grade3 = validateAndCalculateGrade("Andi", 72);

console.log("Grade Budi: " + grade1);
console.log("Grade Sari: " + grade2);
console.log("Grade Andi: " + grade3);