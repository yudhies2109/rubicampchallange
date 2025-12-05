function searchInText(text, searchTerm) {

    return {
        found: text.indexOf(searchTerm) !== -1,
        firstIndex: text.indexOf(searchTerm),
        count: (text.match(new RegExp(searchTerm, "g")) || []).length
    }
}

// Tulis function searchInText di sini

console.log(searchInText("Hello world hello", "hello"));
console.log(searchInText("JavaScript is awesome", "Python"));
console.log(searchInText("test test test", "test"));