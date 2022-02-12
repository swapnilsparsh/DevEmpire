import React from "react";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
const Links = () => {
  return (
    <div className="links-container">
      <Link href="/" activeClassName="current-nav-link">
        <div>
          <i className="fa fa-home"></i> Home
        </div>
      </Link>
      <Link href="/ambassador" activeClassName="current-nav-link">
        <div>
          <i className="fa fa-users"></i> Ambassador
        </div>
      </Link>
      <Link href="/programs" activeClassName="current-nav-link">
        <div>
          <i className="fa fa-calendar"></i> Programs
        </div>
      </Link>
      <Link href="/webdev" activeClassName="current-nav-link">
        <div>
          <i className="fa fa-code"></i> Web Dev
        </div>
      </Link>
      <Link href="/jstoolkits" activeClassName="current-nav-link">
        <div>
          <i className="fa fa-wrench"></i> JS Toolkits
        </div>
      </Link>
    </div>
  );
};

export default Links;
