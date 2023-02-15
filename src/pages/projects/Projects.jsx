import React from "react";
import "./projects.css";
import data from "../../data.json";
import IMG1 from "../../assets/project-1-workday-scheduler.jpg";
import IMG2 from "../../assets/project-2-readme-generator.jpg";
import IMG3 from "../../assets/project-3-team-generator.jpg";
import IMG4 from "../../assets/project-4-find-my-artist.jpg";
import IMG5 from "../../assets/project-5-yedibeba.jpg";
import IMG6 from "../../assets/project-6-digital-stepping-stones.jpg";


const imageMap = {
  "IMG1": IMG1,
  "IMG2": IMG2,
  "IMG3": IMG3,
  "IMG4": IMG4,
  "IMG5": IMG5,
  "IMG6": IMG6,
};

const Projects = () => {
  return (
    <section className="container" id="projects">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="descriptionSection">
            <h2>Projects</h2>
            <h3>Some examples of recent projects. </h3>
            <p>
              Displayed below are some of the projects developed and deployed in
              GitHub.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12"></div>
      </div>

      <div className="project_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img src={imageMap[image]} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
