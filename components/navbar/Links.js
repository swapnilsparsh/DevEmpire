import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faUsers, faCalendar, faCode, faWrench} from "@fortawesome/free-solid-svg-icons";
const Links = () => {
  const [menuopen, setmenuopen] = useState(false);
  return (
    <nav>
      <div className="navWide">
        <div className="wideDiv">
          <div className="links-container">
            <Link href="/">
              <a className="current-nav-link">
              <FontAwesomeIcon className="icons" id="icon" icon={faHouse} size="1x" />Home
              </a>
            </Link>
            <Link href="/ambassador">
              <a className="current-nav-link">
                <FontAwesomeIcon className="icons" id="icon" icon={faUsers} size="1x" /> Ambassador
              </a>
            </Link>
            <Link href="/programs">
              <a className="current-nav-link">
                <FontAwesomeIcon className="icons" id="icon" icon={faCalendar} size="1x" /> Programs
              </a>
            </Link>
            <Link href="/webdev">
              <a className="current-nav-link">
                <FontAwesomeIcon className="icons" id="icon" icon={faCode} size="1x" /> Web Dev
              </a>
            </Link>
            <Link href="/jstoolkits">
              <a className="current-nav-link">
                <FontAwesomeIcon className="icons" id="icon" icon={faWrench} size="1x" /> JS Toolkits
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="navNarrow"
        onClick={function () {
          let narrowLinks = document.querySelector(".narrowLinks");
          narrowLinks.classList.toggle("hidden");
          let i = document.getElementById("icon");
          if (!menuopen) {
            i.classList.replace("fa-bars", "fa-times");
            setmenuopen(true);
          } else {
            i.classList.replace("fa-times", "fa-bars");
            setmenuopen(false);
          }
        }}
      >
        <FontAwesomeIcon className="icons" id="icon" icon={faBars } size="2x" />
        <div className="narrowLinks hidden">
          <Link href="/">
            <a className="current-nav-link">
            <FontAwesomeIcon className="icons" id="icon" icon={faHouse} size="1x" /> Home
            </a>
          </Link>
          <Link href="/ambassador">
            <a className="current-nav-link">
              <FontAwesomeIcon className="icons" id="icon" icon={faUsers} size="1x" /> Ambassador
            </a>
          </Link>
          <Link href="/programs">
            <a className="current-nav-link">
              <FontAwesomeIcon className="icons" id="icon" icon={faCalendar} size="1x" /> Programs
            </a>
          </Link>
          <Link href="/webdev">
            <a className="current-nav-link">
              <FontAwesomeIcon className="icons" id="icon" icon={faCode} size="1x" /> Web Dev
            </a>
          </Link>
          <Link href="/jstoolkits">
            <a className="current-nav-link">
              <FontAwesomeIcon className="icons" id="icon" icon={faWrench} size="1x" /> JS Toolkits
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Links;
