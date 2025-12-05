function replaceText(text, oldText, newText) {
    let pattern = new RegExp(oldText, "g");

    return {
        result: text.replace(pattern, newText),
        replacements: (text.match(pattern) || []).length,
        original: text
    }

}

// Tulis function replaceText di sini

console.log(replaceText("Hello world hello", "hello", "hi"));
console.log(replaceText("test test test", "test", "exam"));
console.log(replaceText("JavaScript", "Python", "Java"));