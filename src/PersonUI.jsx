import Student from "./Student";
import Teacher from "./Teacher";

function PersonUI() {
  const people = [
    new Student(
      "Aryan Sharma",
      20,
      "Male",
      "aryan@email.com",
      "9876543210",
      "S101",
      "Computer Science",
      "B.Tech CSE",
      2,
      8.5
    ),
    new Student(
      "Riya Kapoor",
      19,
      "Female",
      "riya@email.com",
      "9123456780",
      "S102",
      "Electronics",
      "B.Tech ECE",
      1,
      6.8
    ),
    new Teacher(
      "Dr. Mehta",
      45,
      "Male",
      "mehta@university.com",
      "9988776655",
      "T201",
      "Computer Science",
      "Data Structures",
      ["DSA", "Algorithms", "Programming"],
      20
    )
  ];

  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px",
      backgroundColor: "#f4f7fa",
      fontFamily: "Arial"
    }}>
      <h1 style={{
        textAlign: "center",
        marginBottom: "40px",
        color: "#222"
      }}>
        University Person Hierarchy System
      </h1>

      {people.map((person, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "white",
            padding: "20px",
            margin: "20px auto",
            width: "550px",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
            borderLeft:
              person.getRole() === "Student"
                ? "6px solid #007bff"
                : "6px solid #28a745"
          }}
        >
          <h2 style={{
            color:
              person.getRole() === "Student"
                ? "#007bff"
                : "#28a745"
          }}>
            {person.getRole()}
          </h2>

          <div style={{ marginTop: "10px", lineHeight: "1.6", color: "#333" }}>
            <strong>Basic Information:</strong>
            <p>{person.name}</p>
            <p>Age: {person.age}</p>
            <p>Gender: {person.gender}</p>
            <p>Email: {person.email}</p>
            <p>Phone: {person.phone}</p>

            <hr />

            <strong>Additional Details:</strong>
            <p style={{ whiteSpace: "pre-line" }}>
              {person.getDetails()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PersonUI;
