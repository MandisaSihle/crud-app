import React, { useState, useEffect } from "react";

function StudentForm({ addStudent, editStudent, updateStudent }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
  });

  useEffect(() => {
    if (editStudent) {
      setStudent(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.name || !student.email) return;

    if (editStudent) {
      updateStudent(student);
    } else {
      addStudent(student);
    }

    setStudent({
      name: "",
      email: "",
      course: "",
      phone: "",
    });
  };

  const styles = {
    form: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
      marginBottom: "20px",
      padding: "16px",
      backgroundColor: "#f9fafb",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
    },
    input: {
      padding: "12px",
      borderRadius: "10px",
      border: "1px solid #d1d5db",
      outline: "none",
      fontSize: "14px",
      boxSizing: "border-box",
    },
    buttonRow: {
      gridColumn: "1 / -1",
      display: "flex",
      justifyContent: "flex-end",
      gap: "10px",
      marginTop: "6px",
    },
    button: {
      padding: "12px 14px",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      color: "#fff",
      backgroundColor: editStudent ? "#16a34a" : "#2563eb",
      fontWeight: 600,
      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    },
    hint: {
      gridColumn: "1 / -1",
      margin: "0",
      fontSize: "12px",
      color: "#6b7280",
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        style={styles.input}
        type="text"
        name="name"
        placeholder="Name *"
        value={student.name}
        onChange={handleChange}
      />

      <input
        style={styles.input}
        type="email"
        name="email"
        placeholder="Email *"
        value={student.email}
        onChange={handleChange}
      />

      <input
        style={styles.input}
        type="text"
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
      />

      <input
        style={styles.input}
        type="text"
        name="phone"
        placeholder="Phone"
        value={student.phone}
        onChange={handleChange}
      />

      <p style={styles.hint}>Fields marked with * are required.</p>

      <div style={styles.buttonRow}>
        <button type="submit" style={styles.button}>
          {editStudent ? "Update Student" : "Add Student"}
        </button>
      </div>
    </form>
  );
}

export default StudentForm;