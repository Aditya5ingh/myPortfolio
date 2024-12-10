import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import React, { useRef, useState } from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import App from "../../../App";

const Footer = ({ count, clicked }) => {
  // const iconData = [
  //   {
  //     id: "icon1",
  //     refer: "https://www.instagram.com/aditya._singh11/",
  //     icon: "faInstagram",
  //   },
  //   {
  //     id: "icon2",
  //     refer: "https://www.instagram.com/aditya._singh11/",
  //     icon: "faTwitter",
  //   },
  //   {
  //     id: "icon3",
  //     refer: "https://www.instagram.com/aditya._singh11/",
  //     icon: "faFacebook",
  //   },
  // ];

  function swapDiv() {
    const elem = document.getElementsByClassName("iconif")[2];
    elem.parentNode.insertBefore(elem, elem.parentNode.firstChild);
  }
  return (
    <div id="footer" className="footer-section">
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="top-area">
            <p>You can also connect with me on social media: </p>
            <div className="socials">
              <a
                href="https://www.instagram.com/aditya._singh11/"
                target="_blank"
                className="iconif"
              >
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="" className="iconif">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="" className="iconif">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
            </div>
            <button onClick={swapDiv} className="buttonToSwap">
              swap
            </button>
            <div className="content-area-1">
              <h1>Contact Me</h1>
              <p>
                Feel free to reach out to me for any inquiries or project
                collaborations.
              </p>
            </div>
          </div>
          <div className="giveLikes">
            <h2>Like count till now: {count}</h2>
            <h5>Click on Like</h5>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="social-icon"
              onClick={clicked}
            />
          </div>
          <div className="contact-cards">
            <div className="email-card card1">
              <FontAwesomeIcon icon={faEnvelope} className="icon-contact" />
              <h2>Email</h2>
              <p>Follow me on:</p>
              <h5>
                <a href="mailto: adityaworkoff@gmail.com">
                  adityaworkoff@gmail.com &rarr;
                </a>
              </h5>
            </div>
            <div className="phone-card card1">
              <FontAwesomeIcon icon={faPhone} className="icon-contact" />
              <h2>Phone</h2>
              <p>For work requirement, you can call me on:</p>
              <h5>
                <a href="tel:+919928066559">+91-9928066559 &rarr;</a>
              </h5>
            </div>
            <div className="linked-card card1">
              <FontAwesomeIcon icon={faLinkedin} className="icon-contact" />
              <h2>LinkedIn</h2>
              <p>We can connect over :</p>
              <h5>
                <a href="https://www.linkedin.com/in/aditya-5ingh/">
                  https://www.linkedin.com/in/aditya-5ingh/ &rarr;
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
