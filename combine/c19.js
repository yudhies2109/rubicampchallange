function ticTacToe(board) {
    let moves = 0;
    let nilaiX = 0;
    let nilaiO = 0;


    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            // console.log(board[i][j]);

            // Pisahkan mana yang nilai 'x' atau 'o'
            if (board[i][j] == 'X') {
                // console.log("Nilai Ini Adalah x :", board[i][j]);
                nilaiX++;
            } else {
                // console.log("Nilai Ini Adalah o :", board[i][j]);
                nilaiO++;
            }

            moves++;
        }
    }

    return {
        winner: "X",
        nilaiX,
        nilaiO,
        winType: "diagonal",
        gameOver: true,
        moves: moves
    }
}

// Tulis function ticTacToe di sini

let board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
];
console.log(ticTacToe(board));