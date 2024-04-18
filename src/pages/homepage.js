import React from "react";
import Navigation from "../components/navigation";
import Passcode from "../Challenge_3.png";
import { Link } from "react-router-dom";
import techBlog from "../Challenge_14.png";
import MWF from "../MWF_1.png";
import marvelMind from "../MarvelMind_1.png";

function Homepage() {
  return (
    <div>
      <Navigation />
      {/* Use the imported image in JSX */}
      <p className="navbar navbar-expand-lg card">
        WELCOME MY NAME IS MICHAEL SLOTNICK AND I AM A WEB DEVELOPER AND A
        DESKTOP TECHNICIAN
      </p>
      <div className="navbar navbar-expand-lg card"></div>
      <div className="navbar navbar-expand-lg card container">
        <img className="col-8" src={Passcode} alt="" />
        <Link to="https://github.com/SuperMVS1991/MVS-Challenge3">
          <button type="button" className="btn btn-primary">
            View Code
          </button>
        </Link>
        <Link to="https://supermvs1991.github.io/MVS-Challenge3/">
          <button type="button" className="btn btn-secondary">
            See More
          </button>
        </Link>
      </div>
      <div className="navbar navbar-expand-lg card container">
        <img className="col-8" src={techBlog} alt="" />
        <Link to="https://github.com/SuperMVS1991/Challenge14">
          <button type="button" className="btn btn-primary">
            View Code
          </button>
        </Link>
        <Link to="https://supermvs1991.github.io/Challenge14/">
          <button type="button" className="btn btn-secondary">
            See More
          </button>
        </Link>
      </div>
      <div className="navbar navbar-expand-lg card container">
        <img className="col-8" src={MWF} alt="" />
        <Link to="https://github.com/SuperMVS1991/Movies-with-Friends">
          <button type="button" className="btn btn-primary">
            View Code
          </button>
        </Link>
        <Link to="https://movies-friends-85c9074d5005.herokuapp.com/">
          <button type="button" className="btn btn-secondary">
            See More
          </button>
        </Link>
      </div>
      <div className="navbar navbar-expand-lg card container">
        <img className="col-8" src={marvelMind} alt="" />
        <Link to="https://supermvs1991.github.io/Project1/">
          <button type="button" className="btn btn-primary">
            View Code
          </button>
        </Link>
        <Link to="https://github.com/SuperMVS1991/Project1">
          <button type="button" className="btn btn-secondary">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;

// "navbar navbar-expand-lg card"
