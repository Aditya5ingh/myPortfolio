import React, { useEffect } from "react";
import "./Btt.css";

const Btt = () => {
  useEffect(() => {
    window.onscroll = function () {
      var top = document.documentElement.scrollTop == 0;
      console.log(document.documentElement.scrollTop);
      document.getElementsByClassName("bttcontainer")[0].style.display = top
        ? "none"
        : "block";
    };
  }, []);

  function takeToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="bttcontainer">
      <div className="arrow" onClick={takeToTop}>
        <h2>&uarr;</h2>
      </div>
    </div>
  );
};

export default Btt;
