import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.js";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./index.css";

function App() {
  return (
  <Router>
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
