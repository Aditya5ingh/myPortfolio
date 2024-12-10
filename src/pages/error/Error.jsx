import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error_404">
      <hr />
      <br />
      <h1>
        Error <span>404</span>
      </h1>
      <p>Page not found!</p>

      <Link to="/">
        <h3>Take me home &rarr; </h3>
      </Link>
      <br />
      <hr />
    </div>
  );
};

export default Error;
