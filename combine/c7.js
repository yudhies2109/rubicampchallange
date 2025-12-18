function calculateGrades(arr) {
    let result = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0
    }

    for (let i = 0; i < arr.length; i++) {
        let score = arr[i]

        switch (true) {
            case score >= 86 && score <= 100:
                result.A++
                    break;

            case score >= 76 && score <= 85:
                result.B++
                    break;

            case score >= 66 && score <= 75:
                result.C++
                    break;

            case score >= 56 && score <= 65:
                result.D++
                    break;

            default:
                result.E++;
        }

    }
    return result;
}

// Tulis function calculateGrades di sini

let grades = calculateGrades([85, 92, 62, 78, 45, 88]);
console.log(grades);