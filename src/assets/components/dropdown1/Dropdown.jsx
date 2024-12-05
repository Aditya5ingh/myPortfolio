import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="dropdown-section">
      <div className="dropdown-container">
        <div className="dropWrapper">
          <Link to="/link">
            <a href="#" className="link1">
              Link1
            </a>
          </Link>
          <Link to="/link">
            <a href="#" className="link1">
              Link2
            </a>
          </Link>
          <Link to="/link">
            <a href="#" className="link1">
              Link3
            </a>
          </Link>
          <Link to="/link">
            <a href="#" className="link1">
              Link4
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
