import React, { useState, useEffect } from "react";

function StudentForm({ addStudent, editStudent, updateStudent }) {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    phone: ""
  });

  useEffect(() => {
    if (editStudent) {
      setStudent(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
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
      phone: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={student.phone}
        onChange={handleChange}
      />

      <button type="submit">
        {editStudent ? "Update Students" : "Add Student"}
      </button>
    </form>
  );
}

export default StudentForm;