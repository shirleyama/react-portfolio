import React from "react";
import "./about.css";
import MyImage from "../../assets/coding-the-future.jpg";

const About = () => {
  return (
    <>
      <article className="container" id="about">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="descriptionSection">
              <h2>About Me</h2>
              <h3>I'm a motivated, personable, web developer. </h3>
              <p>
                I have a natural talent for quickly mastering technology and a
                genuine willingness to learn; extremely productive and adaptive.{" "}
              </p>
              <p>
                I am looking for an exciting position with a challenging
                position where I can showcase my experience and professional
                skills, building and developing websites.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12"></div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 areaAbout">
            <div id="imgAbout">
              <img src={MyImage} height="220px;" alt="Shirley" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12"></div>
          <div className="col-lg-6 col-md-12 col-sm-12 contactAboutBox">
            <div className="contactAbout">
              <h4>Shirley Thompson</h4>
              <a href="mailto:quists@hotmail.com">
                <b>email</b> : quists@hotmail.com
              </a>
              <a href="tel:07985643395">
                <b>phone </b>: 07985 643 395
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default About;
