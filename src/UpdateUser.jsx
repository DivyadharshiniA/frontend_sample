// import React from "react";

// const UpdateUser = () => {
//     return <div>user</div>;
// };

// export default UpdateUser;

// import React from "react";

// const CreateUser = () => {
//     return <div>
//         <h1>Create user</h1>
//         <form>
//             <label>Enter your name:</label>
//             <input type="text" placeholder="Enter your name" />
//             <label>Enter your emaail:</label>
//             <input type="text" placeholder="Enter your email" />
//             <label>Enter your address:</label>
//             <input type="text" placeholder="Enter your address" />
//             <button>Submit</button>
//         </form>
//     </div>;
// };

// export default CreateUser;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './index.css';
const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // Fetch existing user data when component mounts
  useEffect(() => {
    axios
      .put(`https://backend-sample-2.onrender.com`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setAddress(res.data.address);
      })
      .catch((err) => {
        console.log("Failed to fetch user data:", err);
      });
  }, [id]);

  const updateUser = (e) => {
    e.preventDefault();
    axios
      .put(`https://backend-sample-2.onrender.com`, { name, email, address })
      .then((result) => {
        alert("User updated successfully");
        console.log(result.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Failed to update user:", err);
      });
  };

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={updateUser}>
        <label>Enter your name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Enter your email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Enter your address:</label>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateUser;
