import logo1 from "../../images/logo blue.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import resume from "../../images/dummy.pdf";
import "./Navbar.css";
// import { useRef, useEffect } from "react";

export default function Navbar() {
  // const myRef = useRef(null);

  // useEffect(() => {
  //   myRef.current.addEventListener("change", handleClick);
  //   return () => {
  //     myRef.current.removeEventListener("change", handleClick);
  //   };
  // }, []);

  // const handleClick = (event) => {
  //   document.body.classList.toggle("dark");
  //   if (myRef.current.checked == true) {
  //     console.log("Checked");
  //   } else if (myRef.current.checked == false) {
  //     console.log("Unchecked");
  //   }
  // };

  const handleClick = () => {
    document.body.classList.toggle("dark");
  };

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
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Skills</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="button-menu">
            <div className="button">
              <button>
                <a href={resume} download>
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
        </div>
      </div>
    </div>
  );
}
