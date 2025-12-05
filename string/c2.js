function analyzeCharacters(text) {
    let obj = [];

    for (let i = 0; i < text.length; i++) {
        obj.push({
            char: text[i],
            position: i
        })

    }

    return obj;
}


// Tulis function analyzeCharacters di sini

console.log(analyzeCharacters("Hi"));
console.log(analyzeCharacters("Code"));