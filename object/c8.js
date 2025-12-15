function validateObjectSchema(obj, schema) {
    let errors = [];
    let validatedFields = [];
    let isValid = false;


    function validate(values, rules, path) {
        if (path == "name") {
            if (typeof(values) != rules.type && values.length <= rules.minLength) {
                errors.push(`${path}`)
            } else {
                validatedFields.push(`${path}`);
            }
        }

        if (path == "email") {
            if (typeof(values) != rules.type || !values.includes("/@/")) {
                errors.push(`${path}`)
            } else {
                validatedFields.push(`${path}`);
            }
        }

        if (path == "age") {
            if (typeof(values) != rules.type && (values >= rules.min && values <= rules.max)) {
                errors.push(`${path}`)
            } else {
                validatedFields.push(`${path}`);
            }
        }

        if (path == "address") {
            if (typeof(values) != rules.type && typeof(values.street) != rules.properties.street.type && typeof(values.city) != rules.properties.city.type) {
                errors.push(`${path}`)
            } else {
                validatedFields.push(`${path}.street`);
                validatedFields.push(`${path}.city`);
            }
        }

        return isValid = true;
    }



    for (let key in schema) {
        validate(obj[key], schema[key], key);
    }

    return {
        isValid: isValid,
        errors: errors,
        validatedFields: validatedFields,
        summary: {
            total: validatedFields.length,
            valid: validatedFields.length - errors.length,
            invalid: errors.length
        }
    }

}
// Tulis function validateObjectSchema di sini

let user = {
    name: "John",
    email: "john@example.com",
    age: 25,
    address: {
        street: "Jl. Sudirman",
        city: "Jakarta"
    }
};

let schema = {
    name: { type: "string", required: true, minLength: 2 },
    email: { type: "string", required: true, pattern: /@/ },
    age: { type: "number", required: true, min: 18, max: 100 },
    address: {
        type: "object",
        required: true,
        properties: {
            street: { type: "string", required: true },
            city: { type: "string", required: true }
        }
    }
};

console.log(validateObjectSchema(user, schema));