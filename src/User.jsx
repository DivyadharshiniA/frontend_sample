// import React from "react";

// const User = () => {
//     return <div>user</div>;
// };

// export default User;

// import React, { useState } from "react";

// const User = () => {
//     // Initialize state to hold student data
//     const [students, setStudents] = useState([
//         { id: 1, name: "Alice", age: 25 },
//         { id: 2, name: "Bob", age: 30 },
//         { id: 3, name: "Charlie", age: 22 }
//     ]);
    
//     const [isCreating, setIsCreating] = useState(false);
//     const [isUpdating, setIsUpdating] = useState(false);
//     const [currentStudent, setCurrentStudent] = useState({ id: null, name: "", age: "" });

//     // Handle student creation
//     const handleCreate = () => {
//         const newStudent = { ...currentStudent, id: students.length + 1 };
//         setStudents([...students, newStudent]);
//         setCurrentStudent({ id: null, name: "", age: "" });
//         setIsCreating(false);
//     };

//     // Handle student update
//     const handleUpdate = (id) => {
//         const studentToUpdate = students.find((student) => student.id === id);
//         setCurrentStudent(studentToUpdate);
//         setIsUpdating(true);
//     };

//     // Save the updated student
//     const handleSaveUpdate = () => {
//         const updatedStudents = students.map((student) =>
//             student.id === currentStudent.id ? currentStudent : student
//         );
//         setStudents(updatedStudents);
//         setCurrentStudent({ id: null, name: "", age: "" });
//         setIsUpdating(false);
//     };

//     // Delete a student
//     const handleDelete = (id) => {
//         const updatedStudents = students.filter((student) => student.id !== id);
//         setStudents(updatedStudents);
//     };

//     return (
//         <div>
//             <h1>Student Details</h1>

//             {/* Buttons to toggle Create or Update form */}
//             <button onClick={() => setIsCreating(true)} style={{ marginBottom: "20px" }}>
//                 Create Student
//             </button>

//             {/* Display data in a table */}
//             <table border="1" style={{ borderCollapse: "collapse", width: "80%", marginBottom: "20px" }}>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {students.map((student) => (
//                         <tr key={student.id}>
//                             <td>{student.id}</td>
//                             <td>{student.name}</td>
//                             <td>{student.age}</td>
//                             <td>
//                                 <button
//                                     style={{ marginRight: "10px", cursor: "pointer" }}
//                                     onClick={() => handleUpdate(student.id)}
//                                 >
//                                     Update
//                                 </button>
//                                 <button
//                                     style={{ cursor: "pointer" }}
//                                     onClick={() => handleDelete(student.id)}
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Create or Update form */}
//             {(isCreating || isUpdating) && (
//                 <div>
//                     <h2>{isCreating ? "Create Student" : "Update Student"}</h2>
//                     <form
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                             isCreating ? handleCreate() : handleSaveUpdate();
//                         }}
//                     >
//                         <div>
//                             <label>Name:</label>
//                             <input
//                                 type="text"
//                                 value={currentStudent.name}
//                                 onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label>Age:</label>
//                             <input
//                                 type="number"
//                                 value={currentStudent.age}
//                                 onChange={(e) => setCurrentStudent({ ...currentStudent, age: e.target.value })}
//                                 required
//                             />
//                         </div>
//                         <button type="submit">{isCreating ? "Create" : "Update"}</button>
//                         <button
//                             type="button"
//                             onClick={() => {
//                                 setIsCreating(false);
//                                 setIsUpdating(false);
//                                 setCurrentStudent({ id: null, name: "", age: "" });
//                             }}
//                             style={{ marginLeft: "10px" }}
//                         >
//                             Cancel
//                         </button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default User;

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import Apps from "./Apps";
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//           <Apps />      
//   </StrictMode>,
// )

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const User = () => {
//     const [user, setUser] = useState([]);

//     useEffect(() => {
//         axios
//             .get('http://localhost:5000/api/user/fetch')
//             .then((res) => {
//                 console.log(res.data);
//                 setUser(res.data.data); // Use res.data.data based on the response structure
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     return (
//         <div>
//             <Link to="/create">Createuser</Link>
//             {/* <Link to="/edit">{<EditUser />}</Link> */}
//             <table border={1} style={{ width: "100%" }}>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Address</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         user.map((users) => (
//                             <tr key={users.id}>
//                                 <td>{users.name}</td>
//                                 <td>{users.email}</td>
//                                 <td>{users.address}</td>
//                                 <td>
//                                     <Link to={`/update/${users.id}`}>update</Link>
//                                 </td>
//                             </tr>
//                         ))
//                     }

//                 </tbody>

//             </table>
//         </div>
//     );
// };

// export default User;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './index.css';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-sample-2.onrender.com")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data.data); // Assuming the API returns data in res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`https://backend-sample-2.onrender.com`)
        .then(() => {
          alert("User deleted successfully");
          setUsers(users.filter((user) => user._id !== id)); // Update the UI after deletion
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to delete user");
        });
    }
  };

  return (
    <div>
      <Link to="/create">Create User</Link>
      <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <Link to={`/update/${user._id}`} style={{ marginRight: "10px" }}>
                  Update
                </Link>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
