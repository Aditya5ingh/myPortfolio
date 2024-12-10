import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = (props) => {
  let location = useLocation();
  const [state, setState] = useState([]);

  useEffect(() => {
    const x = location.pathname.split("/");
    setState(x.slice(1));
    // console.log(x);
  }, []);
  // console.log(Object.values(state));
  return (
    <div className="hero-banner">
      <div className="hero-container">
        <div className="content-area">
          <div className="breadcrums">
            <ul>
              {console.log(Object.values(state))}
              <li>
                <Link to="/" className="linktag">
                  Home
                </Link>
              </li>

              {Object.values(state).map((path, i) => {
                return (
                  <li key={path}>
                    <Link to={`/${path}`} className="linktag">
                      {console.log(`/${path}`)}/ {path}
                    </Link>
                  </li>
                );
              })}
              {/* <li>
                <Link to={state} className="linktag">
                  {" "}
                  {state}{" "}
                </Link>
              </li> */}
            </ul>
          </div>
          <h3 className="titleArea">{props.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
