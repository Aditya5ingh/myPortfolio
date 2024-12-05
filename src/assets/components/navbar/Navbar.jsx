import logo1 from "../../images/logo blue.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import resume from "../../images/dummy.pdf";
import "./Navbar.css";
import Dropdown from "../dropdown1/Dropdown";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const myRef = useRef(null);

  // useEffect(() => {
  //   myRef.current.addEventListener("click", ClickedIn);
  //   return () => {
  //     myRef.current.removeEventListener("click", ClickedIn);
  //   };
  // }, []);

  // const ClickedIn = (event) => {
  //   if (myRef.current.checked == true) {
  //     console.log("Checked");
  //   } else if (myRef.current.checked == false) {
  //     console.log("Unchecked");
  //   }
  // };
  const myRef = useRef(null);
  const [drop, setdrop] = useState(false);

  useEffect(() => {
    document.addEventListener("click", ClickedIn);
    return () => {
      document.removeEventListener("click", ClickedIn);
    };
  }, []);

  const ClickedIn = (event) => {
    if (myRef.current && !event.composedPath().includes(myRef.current)) {
      setdrop(false);
      document.getElementsByClassName("dropper")[0].style.display = "none";
    }
  };
  const showDropdown = (e) => {
    e.preventDefault();
    if (drop == false) {
      document.getElementsByClassName("dropper")[0].style.display = "block";
      setdrop(true);
    } else {
      document.getElementsByClassName("dropper")[0].style.display = "none";
      setdrop(false);
    }
  };

  // ---------------------------TOggle----------------------------------
  const handleClick = () => {
    document.body.classList.toggle("dark");
  };

  //----------------------------Responsive--------------------------
  function myFunction(e) {
    e.preventDefault();

    document
      .getElementsByClassName("logo-menu")[0]
      .classList.toggle("responsive");
    // if (document.getElementsByClassName("")= "topnav") {
    //   x.className += " responsive";
    // } else {
    //   x.className = "topnav";
    // }
  }

  return (
    <div className="nav-bar">
      <div className="container">
        <div className="menu-wrapper">
          <div className="logo icon">
            <img src={logo1} alt="" />
          </div>
          <div className="logo-menu">
            <div className="logo logo1">
              <img src={logo1} alt="" />
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/link">About</Link>
                </li>
                <li className="dropdown1" ref={myRef} onClick={showDropdown}>
                  Skills
                  <div className="dropper">
                    <Dropdown />
                  </div>
                  {/* </a> */}
                </li>

                <li>
                  <Link to="/">Projects</Link>
                </li>
                <li>
                  <Link to="/link">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="button-menu">
            <div className="button">
              <button>
                <a href={resume} download="Aditya's resume">
                  Download resume
                </a>
              </button>
            </div>
            <div className="toggle">
              <input
                type="checkbox"
                // ref={myRef}
                className="checkbox"
                id="checkbox"
                onClick={handleClick}
              />
              <label htmlFor="checkbox" className="checkbox-label">
                <FontAwesomeIcon icon={faSun} className="fa-sun" />
                <FontAwesomeIcon icon={faMoon} className="fa-moon" />

                <span className="ball"></span>
              </label>
            </div>
          </div>
          <a href="" className="icon" onClick={myFunction}>
            <FontAwesomeIcon icon={faBars} className="fa-bars" />
          </a>
        </div>
      </div>
    </div>
  );
}
