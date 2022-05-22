import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
const Links = () => {
  const [menuopen, setmenuopen] = useState(false);
  return (
    <nav>
      {/* <div className="navWide">
        <div className="wideDiv">
          <div className="links-container">
            <Link href="/">
              <a className="current-nav-link">
                <i className="fa fa-home" aria-hidden="true" />
                Home
              </a>
            </Link>
            <Link href="/ambassador">
              <a className="current-nav-link">
                <i className="fa fa-users" aria-hidden="true" /> Ambassador
              </a>
            </Link>
            <Link href="/programs">
              <a className="current-nav-link">
                <i className="fa fa-calendar" aria-hidden="true" /> Programs
              </a>
            </Link>
            <Link href="/webdev">
              <a className="current-nav-link">
                <i className="fa fa-code" aria-hidden="true" /> Web Dev
              </a>
            </Link>
            <Link href="/jstoolkits">
              <a className="current-nav-link">
                <i className="fa fa-wrench" aria-hidden="true" /> JS Toolkits
              </a>
            </Link>
          </div>
        </div>
      </div> */}
      <div
        className="navNarrow"
        onClick={function () {
          
          let narrowLinks = document.querySelector(".narrowLinks");
          narrowLinks.classList.toggle("hidden");
          let i = document.getElementById("icon");
          if (!menuopen) {
            i.classList.replace("fa-bars", "fa-times");
            console.log(i.classList)
            setmenuopen(true);
          } else {
            i.classList.replace("fa-times", "fa-bars");
            console.log(i.classList)
            setmenuopen(false);
          }
        }}
      >
        <i id="icon" className="fa fa-bars fa-2x" aria-hidden="true" />
        <div className="narrowLinks hidden">
          <Link href="/">
            <a className="current-nav-link">
              <i className="fa fa-home" aria-hidden="true" /> Home
            </a>
          </Link>
          <Link href="/ambassador">
            <a className="current-nav-link">
              <i className="fa fa-users" aria-hidden="true" /> Ambassador
            </a>
          </Link>
          <Link href="/programs">
            <a className="current-nav-link">
              <i className="fa fa-calendar" aria-hidden="true" /> Programs
            </a>
          </Link>
          <Link href="/webdev">
            <a className="current-nav-link">
              <i className="fa fa-code" aria-hidden="true" /> Web Dev
            </a>
          </Link>
          <Link href="/jstoolkits">
            <a className="current-nav-link">
              <i className="fa fa-wrench" aria-hidden="true" /> JS Toolkits
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Links;
