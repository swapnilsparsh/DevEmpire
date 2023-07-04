import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "../ThemeToggle";




const Links = () => {
  const [menuopen, setmenuopen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { pathname } = useRouter();

  const isActive = (href) => {
    return pathname === href ? "active" : "";
  };

  //Routing to results page and passing search word
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (searchTerm.length) {
        router.replace(
          { pathname: "/results", query: { term: searchTerm } },
          "/results"
        );
      } else {
        if (pathname === "/results") {
          // router.push("/");
          // router.back();
        }
      }
    }, 0);
    return () => clearTimeout(timeOutId);
  }, [searchTerm]);

  return (
    <nav>
      <div className="navWide">
        <div className="wideDiv">
          <div className="logo-containter">
            <Link href="/">
              <p>Dev Empire</p>
            </Link>
            <div className="theme-toggle-button" id="toggle-button">
              <ThemeToggle />
            </div>
          </div>

          <div className="links-container">
            <Link href="/">
              <a className={`current-nav-link ${isActive("/")}`}>
                <i className="fa fa-home" aria-hidden="true" />
                Home
              </a>
            </Link>
            <Link href="/ambassador">
              <a className={`current-nav-link ${isActive("/ambassador")}`}>
                <i className="fa fa-users" aria-hidden="true" /> Ambassador
              </a>
            </Link>
            <Link href="/programs">
              <a className={`current-nav-link ${isActive("/programs")}`}>
                <i className="fa fa-calendar" aria-hidden="true" /> Programs
              </a>
            </Link>
            <Link href="/webdev">
              <a className={`current-nav-link ${isActive("/webdev")}`}>
                <i className="fa fa-code" aria-hidden="true" /> Web Dev
              </a>
            </Link>
            <Link href="/games">
              <a className={`current-nav-link ${isActive("/games")}`}>
                <i className="fa fa-gamepad" aria-hidden="true" /> Games
              </a>
            </Link>
            <Link href="/backend">
              <a className={`current-nav-link ${isActive("/backend")}`}>
                <i className="fa fa-server" aria-hidden="true" /> Backend
              </a>
            </Link>
            {/* Global search bar starts */}
            <div className="global-search">
              <div className="search-container">
                <i
                  className="fa fa-search search-icon"
                  onClick={() => {
                    document
                      .querySelector(".search-container")
                      .classList.add("open");
                    document.querySelector(".search").focus();
                    document.querySelector(".search").classList.add("open");
                  }}
                ></i>
                <input
                  className="search"
                  text="type"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                  onBlur={() => {
                    if (searchTerm === "") {
                      document
                        .querySelector(".search-container")
                        .classList.remove("open");
                    }
                  }}
                />
                <i
                  className="fa fa-times search-clear"
                  role="button"
                  onClick={() => setSearchTerm("")}
                  style={{ display: searchTerm.length ? "block" : "none" }}
                ></i>
              </div>
            </div>
            {/* Global search bar ends */}
          </div>
        </div>
      </div>
      <div className="navNarrow-container" onMouseLeave={() => { setmenuopen(!menuopen) }} >
        <div className="navNarrow-Bar"

        >
          <i
            id="icon"
            className={`fa ${menuopen ? "fa-times" : "fa-bars"} fa-2x`}
            aria-hidden="true"
            onClick={() => { setmenuopen(!menuopen) }}
          />
          <div
            style={{
              width: "100%",
              textAlign: "center",
            }}
            className="logo-containter"
          >
            <Link href="/">
              <p>Dev Empire</p>
            </Link>
          </div>
          {/* Global search bar for collapsed nav starts */}
          <div className="global-search-navNarrow">
            <div className="search-container-navNarrow">
              <i
                className="fa fa-search search-icon"
                onClick={() => {
                  document
                    .querySelector(".search-container-navNarrow")
                    .classList.add("open");
                  document.querySelector(".search-navNarrow").focus();
                  document
                    .querySelector(".search-navNarrow")
                    .classList.add("open");
                }}
              ></i>
              <input
                className="search-navNarrow"
                text="type"
                placeholder="Search"
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
                onBlur={() => {
                  if (searchTerm === "") {
                    document
                      .querySelector(".search-container-navNarrow")
                      .classList.remove("open");
                    setSearchTerm("");
                  }
                }}
              />
              <i
                className="fa fa-times search-clear-navNarrow"
                role="button"
                onClick={() => setSearchTerm("")}
                style={{ display: searchTerm.length ? "block" : "none" }}
              ></i>
            </div>
          </div>
          {/* Global search bar for collapsed nav ends */}
        </div>
        <div className="navNarrow">
          <div className={`narrowLinks ${menuopen ? '' : 'hidden'}`} >
            <Link href="/" >
              <a className="current-nav-link" onClick={() => { setmenuopen(false) }}>
                <i className="fa fa-home" aria-hidden="true" />
                Home
              </a>
            </Link>
            <Link href="/ambassador"  >
              <a className="current-nav-link" onClick={() => { setmenuopen(false) }}>
                <i className="fa fa-users" aria-hidden="true" />
                Ambassador
              </a>
            </Link>
            <Link href="/programs" >
              <a className="current-nav-link" onClick={() => { setmenuopen(false) }}>
                <i className="fa fa-calendar" aria-hidden="true" /> Programs
              </a>
            </Link>
            <Link href="/webdev" >
              <a className="current-nav-link" onClick={() => { setmenuopen(false) }}>
                <i className="fa fa-code" aria-hidden="true" /> Web Dev
              </a>
            </Link>
            <Link href="/games" >
              <a className="current-nav-link" onClick={() => { setmenuopen(false) }}>
                <i className="fa fa-gamepad" aria-hidden="true" /> Games
              </a>
            </Link>
            <Link href="/backend" >
              <a className="current-nav-link" onClick={() => { setmenuopen(false) }}>
                <i className="fa fa-server" aria-hidden="true" /> Backend
              </a>
            </Link>
            <div className="theme-toggle-collapsed-navbar" >
              <ThemeToggle onClick={() => { setmenuopen(false) }} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Links;
