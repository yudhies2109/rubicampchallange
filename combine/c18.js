function validateForm(formData) {
    let valid = true;
    let errors = [];
    let validFields = [];

    let checked = false;

    while (!checked) {
        // Cek nama
        let namaRegex = /^[A-Za-z\s]+$/;

        if (formData.name &&
            formData.name.length >= 3 &&
            namaRegex.test(formData.name)) {
            validFields.push("name");
        } else {
            valid = false;
            errors.push("only latter & Space");
        }

        // Cek email
        let emailRegex = /^(?=.*[^A-Za-z0-9]).{6,}$/;

        if (formData.email && emailRegex.test(formData.email)) {
            validFields.push("email");
        } else {
            valid = false;
            errors.push("Email format invalid");
        }

        // Cek Age
        if (formData.age >= 18 && typeof formData.age == "number") {
            validFields.push("age");
        } else {
            valid = false;
            errors.push("Age must be 18 or older & Data type Number");
        }

        // cek Password
        if (formData.password.length >= 6) {
            validFields.push("password");
        } else {
            valid = false;
            errors.push("Password too short");
        }


        checked = true;
    }

    return {
        valid,
        errors,
        validFields
    }

}

// Tulis function validateForm di sini

// let formData = [1, 2, 3];
let formData = {
    name: "John",
    email: "yudhistira@gmail.com",
    age: "20",
    password: "123"
};

console.log(validateForm(formData));