import React from "react";

function StudentList({ students, deleteStudent, setEditStudent }) {
  const styles = {
    wrapper: {
      marginTop: "10px",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: "0 10px", // ✅ creates vertical space between rows (and separates body nicely)
    },
    theadRow: {
      backgroundColor: "#2563eb",
      color: "#ffffff",
    },
    th: {
      padding: "12px",
      textAlign: "left",
      fontSize: "14px",
    },
    tbodyRow: {
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    },
    td: {
      padding: "12px",
      fontSize: "14px",
      color: "#111827",
      borderTop: "1px solid #eef2f7",
      borderBottom: "1px solid #eef2f7",
    },
    firstCell: {
      borderLeft: "1px solid #eef2f7",
      borderTopLeftRadius: "12px",
      borderBottomLeftRadius: "12px",
    },
    lastCell: {
      borderRight: "1px solid #eef2f7",
      borderTopRightRadius: "12px",
      borderBottomRightRadius: "12px",
    },
    actions: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    },
    btn: {
      padding: "10px 12px",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: 600,
      color: "#fff",
    },
    editBtn: {
      backgroundColor: "#f59e0b",
    },
    deleteBtn: {
      backgroundColor: "#ef4444",
    },
    empty: {
      textAlign: "center",
      color: "#6b7280",
      padding: "14px",
      backgroundColor: "#f9fafb",
      border: "1px dashed #d1d5db",
      borderRadius: "12px",
      marginTop: "10px",
    },
  };

  if (!students.length) {
    return <div style={styles.empty}>No students added yet.</div>;
  }

  return (
    <div style={styles.wrapper}>
      <table style={styles.table}>
        <thead>
          <tr style={styles.theadRow}>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Course</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id} style={styles.tbodyRow}>
              <td style={{ ...styles.td, ...styles.firstCell }}>
                {student.name}
              </td>
              <td style={styles.td}>{student.email}</td>
              <td style={styles.td}>{student.course}</td>
              <td style={styles.td}>{student.phone}</td>
              <td style={{ ...styles.td, ...styles.lastCell }}>
                <div style={styles.actions}>
                  <button
                    style={{ ...styles.btn, ...styles.editBtn }}
                    onClick={() => setEditStudent(student)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ ...styles.btn, ...styles.deleteBtn }}
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;