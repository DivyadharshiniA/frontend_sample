//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import './App.css';
//import { useState, useRef, useContext } from 'react';

//import Home from './Home.jsx';
//import AboutUs from './AboutUs.jsx';
//import ContactUs from './ContactUs.jsx';

/*function App() {
  return (
    <Router>
      <header className="header">
        <Link to="/" className="logo">
          <img src="download.png" alt="Logo" className="logo-img" />
          <span className="logo-text">ABC</span>
        </Link>
        <nav>
          <ol className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/aboutus" className="nav-link">About Us</Link></li>
            <li><Link to="/contactus" className="nav-link">Contact Us</Link></li>
          </ol>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; 2024 ABC Website. All rights reserved.</p>
      </footer>
    </Router>
  );
}*/
//import React, { useState, useEffect } from 'react';

//import React, { useState } from "react";

//import React, { useState } from "react";

 /*function App() {
  const [inputValue, setInputValue] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "img 1.jpg",
    "img 5.jpg",
    "img 3.jpg",
    "img 4.jpg",
  ];

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue.trim() !== "") {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div>
      
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          margin: "20px 0",
          fontSize: "16px",
        }}
      />
      {inputValue.trim() && (
        <div>
          <img
            src={images[imageIndex]}
            alt={`Dynamic ${imageIndex}`}
            style={{
              display: "block",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;*/
/*import React, { useState, createContext } from "react";
import Hen from "./Hen";
//import "./App.css";

export let nameContext = createContext();

function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(false);

  const toggleBackground = () => {
    setIsBlackBackground((prev) => !prev);
  };

  const appStyle = {
    height: "100vh",
    backgroundColor: isBlackBackground ? "black" : "white",
    color: isBlackBackground ? "white" : "black",
    transition: "background-color 0.5s, color 0.5s",
  };

  return (
    <nameContext.Provider value={{ value: "water", toggleBackground, isBlackBackground }}>
      <div style={appStyle}>
        <Hen />
      </div>
    </nameContext.Provider>
  );
}

export default App;*/
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </Router>
    );
};

export default App;
