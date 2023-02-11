import React from "react";
import "./header.css";
import CV from "../../assets/cv.pdf";
import Myself from "../../assets/profile-shirley-thompson.png";

const Header = () => {
  return (
    <header>
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
          <h2 className="text-light">Frontend Developer</h2>
          <div className="cta">
            <a href={CV} download className="btn">
              Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
