// import React from "react";

// const CreateUser = () => {
//     return <div>user</div>;
// };

// export default CreateUser;

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

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import './index.css';
// const Createuser = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   const submit = (e) => {
//     e.preventDefault();
//     axios
//       .post("https://backend-sample-2.onrender.com", { name, email, address })
//       .then((result) => {
//         console.log(result.data);
//         navigate("/");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <h1>Create user</h1>
//       <form onSubmit={submit}>
//         <label>Enter your name:</label>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <label>Enter your email:</label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label>Enter your address:</label>
//         <input
//           type="text"
//           placeholder="Enter your address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Createuser;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './index.css';

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://backend-sample-2.onrender.com/api/user/create", { name, email, address }) // Corrected endpoint
      .then((result) => {
        console.log(result.data);
        navigate("/"); // Redirect after success
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Create user</h1>
      <form onSubmit={submit}>
        <label>Enter your name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Enter your email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Enter your address:</label>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
