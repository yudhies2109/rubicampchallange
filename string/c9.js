function validateEmail(email) {

    const cleanEmail = email.trim();

    let hasAt = cleanEmail.includes("@");
    let hasDot = cleanEmail.includes(".");
    let validLength = cleanEmail.length >= 5;
    let noSpaces = email[0] !== " ";




    return {
        valid: hasAt && hasDot && validLength && noSpaces,
        email: cleanEmail,
        checks: {
            hasAt,
            hasDot,
            validLength,
            noSpaces
        }

    }

}


// Tulis function validateEmail di sini

console.log(validateEmail("user@example.com"));
console.log(validateEmail("invalid.email"));
console.log(validateEmail("  test@domain.co.id  "));