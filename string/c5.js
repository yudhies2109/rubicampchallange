function extractText(text, start, end) {

    return {
        result: text.substring(start, end),
        success: text.substring(start, end) ? true : false,
        original: text
    }
}

// Tulis function extractText di sini

console.log(extractText("JavaScript", 0, 4));
console.log(extractText("Programming", 3, 7));
console.log(extractText("Hello", 10, 15));