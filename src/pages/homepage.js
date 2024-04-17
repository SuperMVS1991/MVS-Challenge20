import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div>
        <h1>Homepage</h1>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
    );
    }

export default Homepage;