import React, { useEffect, useState } from "react";
import ParticlesComponent from "../particles/Particles";
// import ParticlesBackground from "../particles/particlesBackground";
import profileimg from "../../images/profile.jpg";
import handwave from "../../images/helloimg.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-section">
      <div className="container">
        <ParticlesComponent id="particles1" />

        <div className="banner-wrapper">
          <div className="intro-section">
            <img src={profileimg} alt="profile pic" />
            <h1>
              Hello! <img src={handwave} alt="" />
            </h1>
            <p className="salute">
              I am&nbsp;<span className="typewriter"></span>
            </p>
            <p className="para">
              Welcome&nbsp;to&nbsp;My&nbsp;
              <span className="folio">Portfolio</span>
            </p>
            <button className="projects-button">
              <a href="">View Projects</a>
            </button>

            {/* <div className="cursor1"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
