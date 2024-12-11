import React from "react";
import project1 from "../../images/project11.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project1.png";
import project4 from "../../images/project3.png";
import project5 from "../../images/project9.png";
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
