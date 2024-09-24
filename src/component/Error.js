import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <h1>{err?.status}</h1>
      <h2>{err?.statusText}</h2>
      <p>
        Sorry, but the page you are looking for does not exist, has been
        removed, or is temporarily unavailable.
      </p>
      <a href="/" className="home-button">
        Go to Homepage
      </a>
    </div>
  );
};

export default Error;
