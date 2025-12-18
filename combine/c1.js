function checkAge(age) {
    if (age < 13) {
        return "Anak-anak";
    } else if (age >= 13 && age <= 17) {
        return "Remaja";
    } else if (age >= 18 && age <= 59) {
        return "Dewasa";
    } else {
        return "lansia";
    }
}

// Tulis function checkAge di sini

console.log(checkAge(10));
console.log(checkAge(15));
console.log(checkAge(25));
console.log(checkAge(65));