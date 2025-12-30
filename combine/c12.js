const prompt = require("prompt-sync")();


function gameMenu() {
    let isRunning = true;

    while (isRunning) {
        console.log("===GAME MENU ===");
        console.log("1. Start Game");
        console.log("2. Settings");
        console.log("3. Quit");

        let menuValue = Number(prompt(`pilihan :`));

        switch (menuValue) {
            case 1:
                console.log("Starting game...");
                break;
            case 2:
                console.log("Menu Setting...");
                break;
            case 3:
                console.log("Goodbye!");
                isRunning = false;
                break;

            default:
                console.log("Pilihan tidak valid");
        }
    }


}

// Tulis function gameMenu di sini

gameMenu();