let angka1 = 10;
let angka2 = 3;
let operator = "/";

if (operator === "+") {
    let result = angka1 + angka2;

    console.log(`${angka1} + ${angka2} = ${result}`);

} else if(operator === "-"){
    let result = angka1 - angka2;

    console.log(`${angka1} - ${angka2} = ${result}`);
} else if(operator === "*"){
    let result = angka1 * angka2;

    console.log(`${angka1} * ${angka2} = ${result}`);
} else if(operator === "/"){
    let result = angka1 / angka2;

    console.log(`${angka1} / ${angka2} = ${result}`);
} else {
    console.log("Operator tidak valid");
}