import React from "react";
import "./PageHero.css";

// Shared title/subtitle block for simple page hero sections (title + subtitle,
// no extra hero content). The surrounding <section> - background image/gradient,
// spacing under the fixed nav, etc. - stays owned by each page, since those
// genuinely differ page to page. `titleClassName`/`subtitleClassName` let a page
// keep its own responsive (mobile breakpoint) font-size overrides working, since
// those are scoped to the page's original class name.
const PageHero = ({ eyebrow, title, subtitle, titleClassName = "", subtitleClassName = "" }) => (
  <>
    {eyebrow && <p className="page-hero-eyebrow animate-on-scroll">{eyebrow}</p>}
    <h1 className={`page-hero-title ${titleClassName} animate-on-scroll`}>{title}</h1>
    {subtitle && (
      <p className={`page-hero-subtitle ${subtitleClassName} animate-on-scroll`}>{subtitle}</p>
    )}
  </>
);

export default PageHero;
