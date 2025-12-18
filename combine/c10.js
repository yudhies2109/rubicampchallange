function sumUntilLimit(limit) {
    let sum = 0;
    let count = 0;

    for (let i = 1;; i++) {
        while (sum < limit) {
            sum += i;
            count++;
            break;
        }

        if (sum >= limit) {
            break; // berhenti jika sudah mencapai / melebihi limit
        }

    }



    return { sum, count };
}

// Tulis function sumUntilLimit di sini

console.log(sumUntilLimit(10));
console.log(sumUntilLimit(20));