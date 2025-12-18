function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return ("Senin")

        case 2:
            return ("Selasa")

        case 3:
            return ("Rabu")

        case 4:
            return ("Kamis")

        case 5:
            return ("Jumat")

        case 6:
            return ("Sabtu")

        case 7:
            return ("Minggu")

        default:
            return ("Invalid day")
    }
}

// Tulis function getDayName di sini

console.log(getDayName(1));
console.log(getDayName(5));
console.log(getDayName(8));