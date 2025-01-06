/*import React from "react";

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <p>Welcome to Home page</p>
        
    </div>
  );
}

export default Home*/


import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const itemId = 42; // Example ID
    return (
        <div>
            <h1>Home Component</h1>
            <Link to={`/details/${itemId}`}>Go to Details</Link>
        </div>
    );
};

export default Home;
