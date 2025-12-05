function cleanAndFormat(text, width) {
    let cleaned = text.trim().replace(/\s+/g, " ");
    let totalpad = width - cleaned.length;

    let leftPad = Math.floor(totalpad / 2);
    // let rightpad = totalpad - leftPad;

    let paddedLeft = cleaned.padStart(cleaned.length + leftPad, " ");
    let padded = paddedLeft.padEnd(width, " ");

    return {
        cleaned: cleaned,
        padded: padded,
        length: padded.length
    }
}

// Tulis function cleanAndFormat di sini

console.log(cleanAndFormat("  Hello   World  ", 15));
console.log(cleanAndFormat("JavaScript", 12));
console.log(cleanAndFormat("  Code  ", 8));