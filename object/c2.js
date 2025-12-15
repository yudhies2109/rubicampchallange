function createPerson(name, age, profession) {

    return {
        name: name,
        age: age,
        profession: profession,
        yearsExperience: 0,

        introduce() {
            return `Hello, my name is ${this.name} and I am a ${this.profession}`;
        },

        updateAge(newAge) {
            if (newAge > this.age) {
                this.yearsExperience += (newAge - this.age);
            }
            this.age = newAge;
        },

        getInfo() {
            return {
                name: this.name,
                age: this.age,
                profession: this.profession,
                yearsExperience: this.yearsExperience
            }
        }

    }

}

// Tulis function createPerson di sini

let person = createPerson("Alice", 30, "Developer");
console.log(person.introduce());
person.updateAge(31);
console.log(person.getInfo());