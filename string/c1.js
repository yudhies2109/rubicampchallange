function getStringInfo(text) {
    let textLength = text.length;
    let firstWord = text[0];
    let lastWord = text[textLength - 1];

    return {
        length: textLength,
        first: firstWord,
        last: lastWord
    }
}

// Tulis function getStringInfo di sini

console.log(getStringInfo("Hello"));
console.log(getStringInfo("JavaScript"));
console.log(getStringInfo("A"));