import React from "react";
import "./projects.css";
import IMG1 from "../../assets/project-1-workday-scheduler.jpg";
import IMG2 from "../../assets/project-2-readme-generator.jpg";
import IMG3 from "../../assets/project-3-team-generator.jpg";
import IMG4 from "../../assets/project-4-find-my-artist.jpg";
import IMG5 from "../../assets/project-5-yedibeba.jpg";
import IMG6 from "../../assets/project-6-digital-stepping-stones.jpg";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Daily Planner App",
    github: "https://github.com/shirleyama/Daily-Planner-App",
    demo: "https://shirleyama.github.io/Daily-Planner-App/",
  },
  {
    id: 2,
    image: IMG2,
    title: "README Generator",
    github: "https://github.com/shirleyama/readme-generator",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Team Profile Generator",
    github: "https://github.com/shirleyama/team-profile-generator",
    demo: "https://watch.screencastify.com/v/Of34SPl8Fz4dE8REZEFl",
  },
  {
    id: 4,
    image: IMG4,
    title: "Find My Artist",
    github: "https://github.com/shirleyama/find-my-artist-app",
    demo: "https://shirleyama.github.io/find-my-artist-app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Yedibeba",
    github: "https://github.com",
    demo: "https://yedibeba.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Digital Stepping Stones",
    github: "https://digitalsteppingstones.com",
    demo: "https://digitalsteppingstones.com",
  },
];

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
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project_item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
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
