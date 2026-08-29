import React from "react";
import "./RouteLoader.css";

// Suspense fallback shown while a route's code chunk downloads. Small and
// centered rather than a full-screen splash - it should barely be seen on a
// fast connection, and reassure rather than distract on a slow one.
const RouteLoader = () => (
  <div className="route-loader" role="status" aria-label="Loading">
    <svg className="route-loader-mark" viewBox="0 0 60 60" width="40" height="40">
      <g fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="16" y="16" width="28" height="28" />
        <rect x="16" y="16" width="28" height="28" transform="rotate(45 30 30)" />
      </g>
    </svg>
  </div>
);

export default RouteLoader;
