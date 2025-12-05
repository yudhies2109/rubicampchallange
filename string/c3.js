function convertCase(text, mode) {
    let textValues = text;

    if (mode === "upper") {
        text = textValues.toUpperCase();
    } else if (mode === "lower") {
        text = textValues.toLowerCase();
    } else {
        text = textValues.toLowerCase()
            .split(" ")
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(" ");
    }

    return text;
}


// Tulis function convertCase di sini

console.log(convertCase("hello world", "upper"));
console.log(convertCase("HELLO WORLD", "lower"));
console.log(convertCase("hello world", "title"));