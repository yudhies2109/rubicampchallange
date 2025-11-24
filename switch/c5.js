let angka1 = 15;
let angka2 = 4;
let operator = "%";

function callMod(a, b) {
    result = a % b;
    return result;
}

function callAdd(a, b) {
    result = a + b;
    return result;
}

function callSubstract(a, b) {
    result = a - b;
    return result;
}

function callMultiplication(a, b) {
    result = a * b;
    return result;
}

function calDiv(a, b) {
    result = angka1 / angka2;
    return result;
}

switch (operator) {
    case "%":
        console.log(`${angka1} % ${angka2} = ${callMod(angka1, angka2)}`);
        break;

    case "+":
        console.log(`${angka1} + ${angka2} = ${callAdd(angka1, angka2)}`);
        break;

    case "-":
        console.log(`${angka1} - ${angka2} = ${callSubstract(angka1, angka2)}`);
        break;

    case "*":
        console.log(`${angka1} * ${angka2} = ${callMultiplication(angka1, angka2)}`);
        break;

    case "/":
        console.log(`${angka1} / ${angka2} = ${calDiv(angka1, angka2)}`);
        break;

    default:
        console.log("operator tidak valid");
        break;
}