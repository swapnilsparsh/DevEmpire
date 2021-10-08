import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <div>
      <NavLink exact to="/" activeClassName="current-nav-link">
        <i class="fa fa-home"></i>&nbsp; Home
      </NavLink>
      <NavLink to="/ambassador" activeClassName="current-nav-link">
        <i class="fa fa-users"></i>&nbsp; Ambassador
      </NavLink>
      <NavLink to="/programs" activeClassName="current-nav-link">
        <i class="fa fa-calendar"></i>&nbsp; Programs
      </NavLink>
      <NavLink to="/webdev" activeClassName="current-nav-link">
        <i class="fa fa-code"></i>&nbsp; Web Dev
      </NavLink>
      <NavLink to="/jstoolkits" activeClassName="current-nav-link">
        <i class="fa fa-wrench"></i>&nbsp; JS Toolkits
      </NavLink>
    </div>
  );
};

export default Links;
