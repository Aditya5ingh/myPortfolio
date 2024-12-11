import React from "react";
import "./ProjectCard.css";
import c1 from "../../images/project1.png";

const ProjectCard = () => {
  return (
    <div className="project-section">
      <div className="card-container">
        <div className="card-wrapper">
          <div className="project-image">
            <figure>
              <img src={c1} alt="" />
              <figcaption>Hello</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
