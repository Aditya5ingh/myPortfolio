import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="dropdown-section">
      <div className="dropdown-container">
        <div className="dropWrapper">
          <Link to="/skills/skill1" className="link1">
            Link1
          </Link>
          <Link to="/skills/skill2" className="link1">
            Link2
          </Link>
          <Link to="/skills/skill3" className="link1">
            Link3
          </Link>
          <Link to="/skills/slill4" className="link1">
            Link4
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
