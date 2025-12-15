function extractUserData(user) {

    if (!user || !user.profile || !user.profile.address || !user.preferences) {
        return {
            isComplete: false
        };
    } else {

        const {
            id,
            profile: { name, email, address: { street } },
            preferences: { theme, language }
        } = user;


        return {
            userId: id,
            fullName: name,
            email: email,
            location: street,
            settings: {
                theme: theme,
                language: language
            },
            isComplete: true
        }
    }


}

let user = {
    id: 1,
    profile: {
        name: "John Doe",
        email: "john@example.com",
        address: {
            street: "Jl. Sudirman",
            city: "Jakarta",
            zipCode: "12345"
        }
    },
    preferences: {
        theme: "dark",
        language: "id"
    }
};
console.log(extractUserData(user));