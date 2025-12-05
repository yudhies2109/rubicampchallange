function textAnalyzer(text) {
    let cleaned = text.trim();

    return {
        original: text,
        cleaned,
        stats: {
            totalLength: text.length,
            cleanedLength: cleaned.length,
            wordCount: cleaned.split(" ").length,
            sentenceCount: cleaned.split(".").filter(a => a).length,
            uppercaseCount: cleaned.match(/[A-Z]/g) ? cleaned.match(/[A-Z]/g).length : 0,
            lowercaseCount: cleaned.match(/[a-z]/g) ? cleaned.match(/[a-z]/g).length : 0
        },
        words: cleaned.replace(/[^\w\s]/g, "").split(" "),
        longestWord: cleaned.replace(/[^\w\s]/g, "").split(" ").reduce((a, b) => a.length >= b.length ? a : b),
        shortestWord: cleaned.replace(/[^\w\s]/g, "").split(" ").reduce((a, b) => a.length >= b.length ? b : a),
        hasNumbers: cleaned.match(/[0-9]/g) ? true : false,
        hasSpecialChars: cleaned.match(/[^\w\s]/g) ? true : false
    }

}


// Tulis function textAnalyzer di sini

let result = textAnalyzer("  Hello World! This is a TEST string.  ");
console.log(result);