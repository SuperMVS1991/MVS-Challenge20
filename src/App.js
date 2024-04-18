import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.js";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./index.css";
import NYCPoster from './nyc_background_1.png';
const backgroundStyles = {
  margin: 0,
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  backgroundImage: `url(${NYCPoster})`,
  backgroundSize: "cover", // Optional: Ensures the background image covers the entire body
  backgroundRepeat: "no-repeat", // Optional: Prevents the background image from repeating
  minHeight: "100vh", // Optional: Ensures the background covers the full viewport height
};
function App() {
  return (
    <Router>
      <div style={backgroundStyles}>
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
