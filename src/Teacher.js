import Person from "./Person";

class Teacher extends Person {
    constructor(
        name,
        age,
        gender,
        email,
        phone,
        employeeId,
        department,
        subject,
        coursesTeaching,
        experience
    ) {
        super(name, age, gender, email, phone);
        this.employeeId = employeeId;
        this.department = department;
        this.subject = subject;
        this.coursesTeaching = coursesTeaching;
        this.experience = experience;
    }

    getRole() {
        return "Teacher";
    }

    getDetails() {
        return `
Employee ID: ${this.employeeId}
Department: ${this.department}
Subject: ${this.subject}
Courses Teaching: ${this.coursesTeaching.join(", ")}
Experience: ${this.experience} years
    `;
    }
}

export default Teacher;