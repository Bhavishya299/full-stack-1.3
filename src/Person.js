class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getBasicInfo() {
        return `${this.name} (${this.gender}), Age: ${this.age}`;
    }

    getRole() {
        return "Person";
    }

    getDetails() {
        return this.getBasicInfo();
    }
}

export default Person;