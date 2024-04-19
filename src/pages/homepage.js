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
      <p className="navbar navbar-expand-lg card background">
        WELCOME MY NAME IS MICHAEL SLOTNICK AND I AM A WEB DEVELOPER AND A
        DESKTOP TECHNICIAN
      </p> 

      <div className="navbar navbar-expand-lg card container background">
        <img className="col-8" src={Passcode} alt="" /> 
        <div className="col-6 d-flex justify-content-center">
        <Link className="col-4 mx-1 d-flex justify-content-center" to="https://github.com/SuperMVS1991/MVS-Challenge3">
          <button type="button" className="btn btn-primary col-8">
            View Code
          </button>
        </Link>
        <Link className="col-4 mx-1 d-flex justify-content-center"to="https://supermvs1991.github.io/MVS-Challenge3/">
          <button type="button" className="btn btn-secondary col-8">
            See More
          </button>
        </Link> 
        </div>
      </div> 

      <div className="navbar navbar-expand-lg card container background">
        <img className="col-8" src={techBlog} alt="" /> 
        <div className="col-6 d-flex justify-content-center">
        <Link className="col-4 mx-1 d-flex justify-content-center" to="https://github.com/SuperMVS1991/Challenge14">
          <button type="button" className="btn btn-primary col-8">
            View Code
          </button>
        </Link>
        <Link className="col-4 mx-1 d-flex justify-content-center" to="https://supermvs1991.github.io/Challenge14/">
          <button type="button" className="btn btn-secondary col-8">
            See More
          </button>
        </Link>
      </div> 
      </div> 

      <div className="navbar navbar-expand-lg card container background">
        <img className="col-8" src={MWF} alt="" /> 
        <div className="col-6 d-flex justify-content-center">   
        <Link className="col-4 m-1 d-flex justify-content-center" to="https://github.com/SuperMVS1991/Movies-with-Friends">
          <button type="button" className="btn btn-primary col-8">
            View Code
          </button>
        </Link>
        <Link  className="col-4 m-1 d-flex justify-content-center" to="https://movies-friends-85c9074d5005.herokuapp.com/">
          <button type="button" className="btn btn-secondary col-8">
            See More
          </button>
        </Link>
      </div> 
      </div> 

      <div className="navbar navbar-expand-lg card container background">
        <img className="col-8" src={marvelMind} alt="" /> 
        <div className="col-6 d-flex justify-content-center">
        <Link  className="col-4 m-1 d-flex justify-content-center" to="https://supermvs1991.github.io/Project1/">
          <button type="button" className="btn btn-primary col-8">
            View Code
          </button>
        </Link>
        <Link  className="col-4 m-1 d-flex justify-content-center" to="https://github.com/SuperMVS1991/Project1">
          <button type="button" className="btn btn-secondary col-8">
            See More
          </button>
        </Link>
      </div> 
      </div> 
    </div>
  );
}

export default Homepage;

// "navbar navbar-expand-lg card"
