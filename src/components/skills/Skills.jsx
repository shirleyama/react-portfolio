import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section className="container" id="skills">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12">
        <div className="descriptionSection">
            <h2>Skills</h2>
            <h3>I have worked with a number of web industry tools </h3>
            <p>
              Below are some skills I have acquired over the years and some more
              recently.
            </p>
            <p></p>

            <h3>Frontend Development</h3>
            <div className="skills-container">
              <div className="skills-grid">
                <div className="skills-column">
                  <dl>
                    <dt>
                      <BsPatchCheckFill />
                      HTML
                    </dt>
                    <dd>Experienced</dd>
                    <dt>
                      <BsPatchCheckFill />
                      CSS
                    </dt>
                    <dd>Experienced</dd>
                    <dt>
                      <BsPatchCheckFill />
                      JavaScript
                    </dt>
                    <dd>Experienced</dd>
                    <dt>
                      <BsPatchCheckFill />
                      Git
                    </dt>
                    <dd>Experienced</dd>
                  </dl>
                </div>
                <div className="skills-column">
                  <dl>
                    <dt>
                      <BsPatchCheckFill />
                      GitHub
                    </dt>
                    <dd>Experienced</dd>
                    <dt>
                      <BsPatchCheckFill />
                      Bootstrap
                    </dt>
                    <dd>Experienced</dd>
                    <dt>
                      <BsPatchCheckFill />
                      jQuery
                    </dt>
                    <dd>Experienced</dd>
                    <dt>
                      <BsPatchCheckFill />
                      Node.js
                    </dt>
                    <dd>Experienced</dd>
                  </dl>
                </div>
                <div className="skills-column">
                  <dl>
                    <dt>
                      <BsPatchCheckFill />
                      React
                    </dt>
                    <dd>Experienced</dd>
                    <dt>
                      <BsPatchCheckFill />
                      Photoshop
                    </dt>
                    <dd>Experienced</dd>
                    <dt>
                      <BsPatchCheckFill />
                      Illustrator
                    </dt>
                    <dd>Experienced</dd>
                    <dt>
                      <BsPatchCheckFill />
                      Wordpress
                    </dt>
                    <dd>Experienced</dd>
                  </dl>
                </div>
                <div className="skills-column">
                  <dl>
                    <dt>
                      <BsPatchCheckFill />
                      React
                    </dt>
                    <dd>Experienced</dd>
                    <dt>
                      <BsPatchCheckFill />
                      Photoshop
                    </dt>
                    <dd>Experienced</dd>
                    <dt>
                      <BsPatchCheckFill />
                      Illustrator
                    </dt>
                    <dd>Experienced</dd>
                    <dt>
                      <BsPatchCheckFill />
                      Wordpress
                    </dt>
                    <dd>Experienced</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12"></div>
    </section>
  );
};

export default Skills;
