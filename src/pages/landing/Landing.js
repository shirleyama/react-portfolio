import React from "react";
import "./landing.css";
import CV from "../../assets/CV-Shirley-Thompson.pdf";
import Myself from "../../assets/profile-shirley-thompson.png";

const Landing = () => {
  return (
    <>
      <div className="container header__container">
        <div className="jumbotron" id="home">
          <h1>
            Hi i'm <br />
            Shirley
            <br />
            Thompson!
          </h1>

          <div className="jumboPic">
            <img src={Myself} alt="Shirley" />
          </div>
          <h2 className="text-light">your Front-End Web Developer</h2>
          <div className="cta">
            <a href={CV} download className="btn">
              Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
