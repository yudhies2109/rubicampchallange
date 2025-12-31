function ticTacToe(board) {
    let moves = 0;
    let winner = '';
    let winType = 0;
    let gameOver = false;


    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j].trim() !== '') {
                moves++;
            }

        }
    }


    for (let i = 0; i < board[0].length; i++) {
        // Cek Baris
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            winner = board[i][0];
            winType = 'row';
            gameOver = true;
            // Cek Kolom
        } else if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            winner = board[0][i];
            winType = 'column';
            gameOver = true;
        }
    }

    // Cek Diagonal

    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        winner = board[0][0];
        winType = 'diagonal';
        gameOver = true;
    } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        winner = board[0][2];
        winType = 'diagonal';
        gameOver = true;
    }

    return {
        winner,
        winType,
        gameOver,
        moves
    }
}

// Tulis function ticTacToe di sini

let board = [
    ['X', 'X', 'O'],
    ['X', 'O', 'O'],
    ['O', 'O', 'X']
];
console.log(ticTacToe(board));