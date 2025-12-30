function dataProcessor(data) {
    let processed = 0;
    let numbers = [];
    let strings = [];
    let booleans = [];
    let errors = 0;

    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {

            if (data[i].type && data[i].value) {
                switch (data[i].type) {
                    case "number":
                        if (typeof(data[i].value) !== "number") {
                            errors++;
                        } else {
                            numbers.push(data[i].value);
                            processed++;
                        }
                        break;

                    case "string":
                        if (typeof(data[i].value) !== "string") {
                            errors++;
                        } else {
                            strings.push(data[i].value);
                            processed++;
                        }
                        break;

                    case "boolean":
                        if (typeof(data[i].value) !== "boolean") {
                            errors++;
                        } else {
                            booleans.push(data[i].value);
                            processed++;
                        }
                        break;
                    default:
                        errors++;
                }
            } else {
                errors++
            }

        }
    } else {
        errors++;
    }

    return {
        processed,
        numbers,
        strings,
        booleans,
        errors
    }

}

// Tulis function dataProcessor di sini

// let data = 0;

let data = [
    { type: "number", value: "10" },
    { type: "string" },
    { type: "boolean", value: true },
    3
];
console.log(dataProcessor(data));