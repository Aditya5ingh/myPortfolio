import logo1 from "../../images/logo blue.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="menu-wrapper">
          <div className="logo-menu">
            <div className="logo">
              <img src={logo1} alt="" />
            </div>
            <div className="menu">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="button-menu">
            <div className="button">
              <button>
                <a href="">Download resume</a>
              </button>
            </div>
            <div className="toggle">
              <input type="checkbox" className="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="checkbox-label">
                <FontAwesomeIcon icon={faMoon} className="fa-moon" />
                <FontAwesomeIcon icon={faSun} className="fa-sun" />
                <span className="ball"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
