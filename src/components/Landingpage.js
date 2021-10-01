import React, { useRef } from "react";
import Home from "../assets/svg/Home.svg";
import JS from "../assets/svg/JSToolkit.svg";
import Ambassador from "../assets/svg/Ambassador.svg";
import WebDev from "../assets/svg/WebDev.svg";
import Programs from "../assets/svg/Programs.svg";
import { NavLink } from "react-router-dom";

const Landingpage = () => {
  const ambassadorSectionRef = useRef(null);
  const callToActionScroll = () => {
    ambassadorSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="landingpage">
      <div className="container-landing">
        <div className="landing-page-header">
          <div className="header-details">
            <h1>Developer Empire</h1>
            <p>
              All in one place where you can find all the resources and details
              of ambassador/fellowship, open source events, web dev sites, js
              toolkits and etc. that are available across different sites. These
              are verified and crowdsourced by the community.
            </p>
            <div className="landing-page-btn-container">
              <div className="discord-button">
                <a
                  className="discord"
                  href="https://discord.gg/djEezwwG"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="../assets/share-img/Discord-share.png" alt="" />
                </a>
              </div>
              <div className="call-to-action-btn" onClick={callToActionScroll}>
                Explore all
              </div>
            </div>
          </div>
          <div className="homesvg">
            <img id="home" src={Home} alt="website logo" />
          </div>
        </div>
      </div>

      <div
        ref={ambassadorSectionRef}
        className="container-landing ambassador-section"
      >
        <div className="landing-page-details">
          <div className="header-image">
            <img id="home" src={Ambassador} alt="Ambassador Illustration" />
          </div>
          <div className="heading-text">
            <NavLink to="/ambassador">
              <h1>
                <u> Ambassador </u>
              </h1>
            </NavLink>
            <p>
              Place where you can find all the resources and details of
              ambassador/fellowship that are available across different
              countries and companies.
            </p>
          </div>
        </div>
        <div className="landing-page-details">
          <div className="heading-text second">
            <NavLink to="/programs">
              <h1>
                <u> Programs </u>
              </h1>
            </NavLink>
            <p>
              Here you can find all the resources and details of Open Source
              Programs and event that are available across different countries.
            </p>
          </div>
          <div className="header-image">
            <img id="home" src={Programs} alt="Programs Illustration" />
          </div>
        </div>
        <div className="landing-page-details">
          <div className="header-image">
            <img id="home" src={WebDev} alt="Web Dev Illustration" />
          </div>
          <div className="heading-text">
            <NavLink to="/webdev">
              <h1>
                <u> Web Dev Tools </u>
              </h1>
            </NavLink>
            <p>
              A collection of all the tools that are required in web development
              made by the community to ease the process of web development like
              CSS Generators, Icons, Illustration, etc.
            </p>
          </div>
        </div>
        <div className="landing-page-details">
          <div className="heading-text second">
            <NavLink to="/jstoolkits">
              <h1>
                <u> JS Toolkits </u>
              </h1>
            </NavLink>
            <p>
              While the number of ways to organize JavaScript is almost
              infinite, here are some collection of JS framework and libraries
              that can help you while you are working on a project or searching
              around the web.
            </p>
          </div>
          <div className="header-image">
            <img id="home" src={JS} alt="JS Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
