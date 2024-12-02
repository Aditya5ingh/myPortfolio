import React from "react";
import "./Card.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Card = () => {
  return (
    <div className="cardArea">
      <div className="card-content">
        <div className="skillbar-container">
          <div className="skillbar">
            <div className="overlay">
              <h1 className="title">5/10</h1>
            </div>
          </div>
        </div>
        <div className="skill-details">
          <h1 className="skillTitle">HTML</h1>
          <p>
            I have been using HTML for past few years having hands on experience
            on may projects.
          </p>
          <a href="">View Projects &rarr;</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
