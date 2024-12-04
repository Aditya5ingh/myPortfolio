import React, { useState } from "react";
import "./Skills.css";
import image1 from "../../images/SKILLS.png";
import image2 from "../../images/Experinceposter.png";
import image3 from "../../images/Projectsposter.png";

const Skills = () => {
  const [activeElement, setActiveElement] = useState(0);

  const handleClick = (e) => {
    console.log(e);
    setActiveElement(e);
  };

  return (
    <div className="skills-section">
      <div className="skills-container">
        <div className="skill-wrapper">
          <div className="skillImage">
            <div className="image-container">
              <img
                style={{ objectFit: "fill" }}
                src={image1}
                alt=""
                className={`${activeElement === 0 ? "present" : ""} feature1`}
              />
              <img
                src={image2}
                alt=""
                className={`${activeElement === 1 ? "present" : ""} feature1`}
              />
              <img
                src={image3}
                alt=""
                className={`${activeElement === 2 ? "present" : ""} feature1`}
              />
            </div>
          </div>

          <div className="skill-options">
            <div
              onClick={() => handleClick(0)}
              className={` ${
                activeElement === 0 ? "active" : ""
              } skill-option option1`}
            >
              <h1 className="option-title">Skills Showcase</h1>
              <p className="option-details">
                Display your proficiency in various web development technologies
              </p>
              <a href="" className="linktogo">
                See more &rarr;
              </a>
            </div>

            <div
              onClick={() => handleClick(1)}
              className={` ${
                activeElement === 1 ? "active" : ""
              } skill-option option2`}
            >
              <h1 className="option-title">Experience and Expertise</h1>
              <p className="option-details">
                Highlight your experience and expertise
              </p>
              <a href="" className="linktogo">
                See more &rarr;
              </a>
            </div>

            <div
              onClick={() => handleClick(2)}
              className={` ${
                activeElement === 2 ? "active" : ""
              } skill-option option3`}
            >
              <h1 className="option-title">Project Showcase</h1>
              <p className="option-details">
                Showcase your projects in an interactive manner
              </p>
              <a href="" className="linktogo">
                See more &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
