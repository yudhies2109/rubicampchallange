let angka1 = 15;
let angka2 = 4;
let operator = "%";

function callMod(){
  result = angka1 % angka2;
  return result;
}

function callAdd(){
  result = angka1 + angka2;
  return result;
}

function callSubstract(){
  result = angka1 - angka2;
  return result;
}

function callMultiplication(){
  result = angka1 * angka2;
  return result;
}

function calDiv(){
  result = angka1 / angka2;
  return result;
}

switch (operator) {
  case"%":
    console.log(`${angka1} % ${angka2} = ${callMod()}`);
    break;

  case"+":
    console.log(`${angka1} + ${angka2} = ${callAdd()}`);
    break;

  case"-":
    console.log(`${angka1} - ${angka2} = ${callSubstract()}`);
    break;

  case"*":
    console.log(`${angka1} * ${angka2} = ${callMultiplication()}`);
    break;

  case"/":
    console.log(`${angka1} / ${angka2} = ${calDiv()}`);
    break;

  default:
    console.log("operator tidak valid");
    break;
}

