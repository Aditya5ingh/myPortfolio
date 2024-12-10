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
              <li>
                <Link to="/" className="linktag">
                  Home&nbsp;
                </Link>
              </li>

              {/* -------------------------------MAPPING OF BREADCRUMPS USING USELOCATION-------------------------------- */}
              {Object.values(state).map((v, i) => {
                const path = i > 0 ? Object.values(state)[i - 1] + "/" + v : v;
                return (
                  <li key={i}>
                    <Link to={`/${path}`} className="linktag">
                      / {v}&nbsp;{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <h3 className="titleArea">{props.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
