let n = 8;
let a = 0, b = 1;

for (let i = 0; i < n; i++) {
    console.log(a);
    let nextValues = a + b;
    a = b;
    b = nextValues;
}