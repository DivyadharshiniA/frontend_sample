import React, { useState } from "react";

const Book = () => {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    name: "",
    nickname: "",
    address: "",
    phone: "",
    gender: "",
    favActors: [],
    school: "",
    memories: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        favActors: checked
          ? [...prev.favActors, value]
          : prev.favActors.filter((actor) => actor !== value),
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.nickname && form.address && form.phone && form.memories) {
      setEntries([...entries, form]);
      setForm({
        name: "",
        nickname: "",
        address: "",
        phone: "",
        gender: "",
        favActors: [],
        school: "",
        memories: "",
      }); // Clear the form
    } else {
      alert("Please fill in all required fields!");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Slam Book</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="nickname"
          placeholder="Your Nickname"
          value={form.nickname}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          value={form.address}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={form.phone}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <div style={styles.gender}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === "Male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === "Female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={form.gender === "Other"}
              onChange={handleChange}
            />{" "}
            Other
          </label>
        </div>
        <div style={styles.checkbox}>
          <label>
            <input
              type="checkbox"
              name="favActors"
              value="Actor 1"
              checked={form.favActors.includes("Actor 1")}
              onChange={handleChange}
            />{" "}
            Vijay
          </label>
          <label>
            <input
              type="checkbox"
              name="favActors"
              value="Actor 2"
              checked={form.favActors.includes("Actor 2")}
              onChange={handleChange}
            />{" "}
            Suriya
          </label>
          <label>
            <input
              type="checkbox"
              name="favActors"
              value="Actor 3"
              checked={form.favActors.includes("Actor 3")}
              onChange={handleChange}
            />{" "}
            Siva
          </label>
        </div>
        <select
          name="school"
          value={form.school}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">Select Your School</option>
          <option value="School 1">Kongu</option>
          <option value="School 2">Roots</option>
          <option value="School 3">Bharathi</option>
        </select>
        <textarea
          name="memories"
          placeholder="Share Your Memories"
          value={form.memories}
          onChange={handleChange}
          style={styles.textarea}
          required
        ></textarea>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
      <div style={styles.entries}>
        <h2>Entries:</h2>
        {entries.map((entry, index) => (
          <div key={index} style={styles.entry}>
            <p><strong>Name:</strong> {entry.name}</p>
            <p><strong>Nickname:</strong> {entry.nickname}</p>
            <p><strong>Address:</strong> {entry.address}</p>
            <p><strong>Phone:</strong> {entry.phone}</p>
            <p><strong>Gender:</strong> {entry.gender}</p>
            <p><strong>Favorite Actors:</strong> {entry.favActors.join(", ")}</p>
            <p><strong>School:</strong> {entry.school}</p>
            <p><strong>Memories:</strong> {entry.memories}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
    outerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#E6E6FA", // Light gray background for the whole page
      

    },
    container: {
      backgroundColor: "#E6E6FA", // Lavender box background
      color: "#4B0082", // Indigo text
      padding: "20px",
      maxWidth: "600px",
      width: "90%",
      fontFamily: "Arial, sans-serif",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for better visibility
      containerAlign: "center", // Center-align text
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#4B0082",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      alignItems: "center", // Center-align form fields
    },
    input: {
      width: "100%", // Full width within the container
      maxWidth: "400px", // Restrict maximum width
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      boxSizing: "border-box", // Ensure padding is included in width
    },
    textarea: {
      width: "100%",
      maxWidth: "400px",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      resize: "none",
      height: "80px",
      boxSizing: "border-box",
    },
    button: {
      padding: "10px",
      fontSize: "16px",
      color: "white",
      backgroundColor: "#4B0082", // Indigo button background
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "200px", // Fixed width for uniformity
    },
    gender: {
      display: "flex",
      gap: "10px",
      justifyContent: "center", // Center-align radio buttons
    },
    checkbox: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      alignItems: "center", // Center-align checkboxes
    },
    select: {
      width: "100%",
      maxWidth: "400px",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
    },
    entries: {
      marginTop: "20px",
    },
    entry: {
      background: "#FFF",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
  };
  

export default Book;
