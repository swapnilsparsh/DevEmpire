import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <div>
      <NavLink exact to="/" activeClassName="current-nav-link">
        <i className="fa fa-home"></i> Home
      </NavLink>
      <NavLink to="/ambassador" activeClassName="current-nav-link">
        <i className="fa fa-users"></i> Ambassador
      </NavLink>
      <NavLink to="/programs" activeClassName="current-nav-link">
        <i className="fa fa-calendar"></i> Programs
      </NavLink>
      <NavLink to="/webdev" activeClassName="current-nav-link">
        <i className="fa fa-code"></i> Web Dev
      </NavLink>
      <NavLink to="/jstoolkits" activeClassName="current-nav-link">
        <i className="fa fa-wrench"></i> JS Toolkits
      </NavLink>
    </div>
  );
};

export default Links;
