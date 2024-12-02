import React from "react";
import project1 from "../../images/project (1).jpg";
import project2 from "../../images/project (2).jpg";
import project3 from "../../images/project (3).jpg";
import project4 from "../../images/project (4).jpg";
import project5 from "../../images/project (5).jpg";
import "./Project.css";

const Project = () => {
  return (
    <div className="project-slides">
      <div className="slider-container">
        <div className="slider">
          <img src={project1} alt="Image 1" />
          <img src={project2} alt="Image 2" />
          <img src={project4} alt="Image 4" />
          <img src={project5} alt="Image 5" />
          <img src={project3} alt="Image 3" />
          <img src={project1} alt="Image 1" />
          <img src={project2} alt="Image 2" />
          <img src={project4} alt="Image 4" />
          <img src={project5} alt="Image 5" />
          <img src={project3} alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default Project;
