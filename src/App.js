import './App.css';
import react, {useState} from "react";
import StudentForm from './components/studentform';
import StudentList from './components/studentlist';


function App() {
  const[students, setStudents] = useState([]);
  const[editStudent, setEditStudent] = useState(null);

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
  const updateStudent = (id, newName) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, name: newName } : student
      )
    );
    setEditStudent(null);
  };

  return (
    <div>
      <h2>Student CRUD App</h2>

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
  );
}

export default App;


