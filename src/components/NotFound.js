import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./NotFound.css";

const NotFound = () => (
  <div className="not-found">
    <Helmet>
      <title>Page Not Found | Muslim Corporate Academy</title>
      <meta name="description" content="The page you're looking for doesn't exist or has moved." />
    </Helmet>
    <div className="not-found-content">
      <p className="not-found-code">404</p>
      <h1 className="not-found-title">Page not found</h1>
      <p className="not-found-subtitle">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="not-found-link">
        Back to Home
      </Link>
    </div>
  </div>
);

export default NotFound;
