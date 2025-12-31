const prompt = require("prompt-sync")();

function smartCalculator() {
    console.log("=== Smart Calculator ===");
    let result = 0;

    do {
        let operation = prompt("operation (+, -, *, /, avg, sum):")
        let inputAngka = prompt("numbers(comma separated):")

        switch (operation) {
            case "+":
                result = inputAngka.split(",").reduce((total, item) => parseInt(total) + parseInt(item), result);
                break;
            case "-":
                result = inputAngka.split(",").reduce((total, item) => parseInt(total) - parseInt(item), result);
                break;
            case "*":
                result = inputAngka.split(",").reduce((total, item) => parseInt(total) * parseInt(item), result);
                break;
            case "/":
                result = inputAngka.split(",").reduce((total, item) => parseInt(total) / parseInt(item), result);
                break;
            case "avg":
                result = inputAngka.split(",").reduce((total, item) => parseInt(total) + parseInt(item), result) / inputAngka.split(",").length;
                break;
            case "sum":
                result = inputAngka.split(",").reduce((total, item) => parseInt(total) + parseInt(item), result);
                break;
            default:
                result = "Wrong Operation!"
                break;
        }

        console.log("Result:", result);
    }
    while (prompt("Continue? (y/n):") == "y");

    return result;


}

// Tulis function smartCalculator di sini

let result = smartCalculator();
console.log("Final result:", result);