import Person from "./Person";

class Student extends Person {
    constructor(
        name,
        age,
        gender,
        email,
        phone,
        studentId,
        department,
        course,
        year,
        gpa
    ) {
        super(name, age, gender, email, phone);
        this.studentId = studentId;
        this.department = department;
        this.course = course;
        this.year = year;
        this.gpa = gpa;
    }

    getRole() {
        return "Student";
    }

    getPerformance() {
        if (this.gpa >= 8) return "Excellent";
        if (this.gpa >= 6) return "Good";
        if (this.gpa >= 4) return "Average";
        return "Needs Improvement";
    }

    getDetails() {
        return `
Student ID: ${this.studentId}
Department: ${this.department}
Course: ${this.course}
Year: ${this.year}
GPA: ${this.gpa} (${this.getPerformance()})
    `;
    }
}

export default Student;