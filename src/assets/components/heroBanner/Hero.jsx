import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = (props) => {
  const [state, setState] = useState("");

  useEffect(() => {
    const x = window.location.pathname;
    setState(x);
  }, []);

  return (
    <div className="hero-banner">
      <div className="hero-container">
        <div className="content-area">
          <div className="breadcrums">
            <ul>
              <li>
                <Link to="/" className="linktag">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={state} className="linktag">
                  {" "}
                  {state}{" "}
                </Link>
              </li>
            </ul>
          </div>
          <h3 className="titleArea">{props.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
