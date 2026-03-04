import React, { useState } from "react";
import StudentForm from "./components/studentform";
import StudentList from "./components/studentlist";

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  // CREATE
  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: Date.now(),
    };
    setStudents([...students, newStudent]);
  };

  // DELETE
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // UPDATE
  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setEditStudent(null);
  };

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#c3cdd6",
      padding: "24px",
      fontFamily: "Arial, Helvetica, sans-serif",
      boxSizing: "border-box",
    },
    container: {
      maxWidth: "950px",
      margin: "0 auto",
      backgroundColor: "#dfd1d1",
      padding: "24px",
      borderRadius: "14px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    },
    title: {
      textAlign: "center",
      margin: "0 0 18px 0",
      color: "#1f2937",
      letterSpacing: "0.2px",
    },
    subtitle: {
      textAlign: "center",
      margin: "0 0 24px 0",
      color: "#0e0e0e",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Student Database Centre</h2>
        <p style={styles.subtitle}>
          Add, edit, and manage student information below.
        </p>

        <StudentForm
          addStudent={addStudent}
          editStudent={editStudent}
          updateStudent={updateStudent}
        />

        <StudentList
          students={students}
          deleteStudent={deleteStudent}
          setEditStudent={setEditStudent}
        />
      </div>
    </div>
  );
}

export default App;


