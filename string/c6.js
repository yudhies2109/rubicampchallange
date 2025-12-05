function processWords(sentence) {
    let words = sentence.split(" ");

    return {
        words: words,
        count: words.length,
        reversed: words.slice().reverse().join(" ")
    }
}

// Tulis function processWords di sini

console.log(processWords("Hello beautiful world"));
console.log(processWords("JavaScript is awesome"));