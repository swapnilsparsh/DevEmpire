import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("../ThemeToggle"), {
  ssr: false,
});

const Links = () => {
  const [menuopen, setmenuopen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { pathname } = useRouter();

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
          router.push("/");
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
            <Link href="/games">
              <a className="current-nav-link">
                <i className="fa fa-gamepad" aria-hidden="true" /> Games
              </a>
            </Link>
            {/* Global search bar starts */}
            <div className="global-search ">
              <i className="fa fa-search search-icon"></i>
              <input
                className="search"
                text="type"
                placeholder="Search"
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
            <i
              className="fa fa-times search-clear"
              role="button"
              onClick={() => setSearchTerm("")}
              style={{ visibility: searchTerm.length ? "visible" : "hidden" }}
            ></i>
            {/* Global search bar ends */}
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
        <i id="icon" className="fa fa-bars fa-2x" aria-hidden="true" />
        {/* Global search bar for collapsed nav starts */}
        <div
          className="global-search global-search-collapsed"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="fa fa-search search-icon"></i>
          <input
            className="search"
            text="type"
            placeholder="Search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <i
          className="fa fa-times search-clear-collapsed"
          role="button"
          onClick={(e) => {
            setSearchTerm("");
            e.stopPropagation();
          }}
          style={{ visibility: searchTerm.length ? "visible" : "hidden" }}
        ></i>
        {/* Global search bar for collapsed nav ends */}
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
          <Link href="/games">
            <a className="current-nav-link">
              <i className="fa fa-gamepad" aria-hidden="true" /> Games
            </a>
          </Link>
        </div>
      </div>
      <div className="theme-toggle-button" id="toggle-button">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Links;
