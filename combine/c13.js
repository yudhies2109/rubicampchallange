function analyzeText() {
    let textValue = arguments[0].trim().replace(/\s+/g, "");
    let vokal = arguments[1];
    let vowels = 0;
    let consonants = 0;
    let targetChar = 0;

    for (let i = 0; i < textValue.length; i++) {
        if (textValue[i] === "a" ||
            textValue[i] === "i" ||
            textValue[i] === "u" ||
            textValue[i] === "e" ||
            textValue[i] === "o") {
            vowels++
        } else {
            consonants++;
        }

        if (textValue[i] == vokal) {
            targetChar++;
        }
    }

    return {
        length: textValue.length,
        words: arguments.length,
        vowels,
        consonants,
        targetChar
    }
}

// Tulis function analyzeText di sini

let stats = analyzeText("Hello World", "o");
console.log(stats);