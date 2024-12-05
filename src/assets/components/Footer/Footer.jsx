import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="footer-section">
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="top-area">
            <p>You can also connect with me on social media: </p>
            <div className="content-area">
              <h1>Contact Me</h1>
              <p>
                Feel free to reach out to me for any inquiries or project
                collaborations.
              </p>
            </div>
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
