function findPattern(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            console.log(matrix[i][j]);
        }
    }

}

// Tulis function findPattern di sini

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(findPattern(matrix, [5, 6]));
// console.log(findPattern(matrix, [2, 3, 6]));
console.log(findPattern(matrix));