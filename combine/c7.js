function calculateGrades(arr) {
    let result = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0
    }

    for (let i = 0; i < arr.length; i++) {
        let score = arr[i];

        switch (true) {
            case score >= 90:
                result.A++;
                break;

            case score >= 75:
                result.B++;
                break;

            case score >= 60:
                result.C++;
                break;

            case score >= 50:
                result.D++;
                break;

            default:
                result.E++;
        }
    }

    return result;

}

// Tulis function calculateGrades di sini

let grades = calculateGrades([85, 92, 67, 78, 45, 88]);
console.log(grades);