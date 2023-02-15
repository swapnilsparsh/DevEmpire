import React, { useRef, useState } from "react";
import Home from "../public/assets/svg/Home.svg";
import homeDark from "../public/assets/svg/homeDark.svg";
// import JS from "../public/assets/svg/JSToolkit.svg";
import Ambassador from "../public/assets/svg/Ambassador.svg";
import WebDev from "../public/assets/svg/WebDev.svg";
import Programs from "../public/assets/svg/Programs.svg";
import Games from "../public/assets/svg/Gaming.svg";
import Image from "next/image";
import Link from "next/link";

const Landingpage = () => {
  const ambassadorSectionRef = useRef(null);
  const callToActionScroll = () => {
    ambassadorSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="landingpage">
        <div className="container-landing">
          <div className="landing-page-header">
            <div className="header-details">
              <h1>Developer Empire</h1>
              <p>
                All in one place where you can find all the resources and
                details of ambassador/fellowship, open source events, web dev
                sites, js toolkits and etc. that are available across different
                sites.
              </p>
              <div className="landing-page-btn-container">
                <div className="discord-button">
                  <a
                    className="discord"
                    href="https://discord.com/invite/V4W4Z4sTmh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="../assets/share-img/Discord-share.png" alt="" />
                  </a>
                </div>
                <div className="explore-all-btn">
                  <div
                    className="call-to-action-btn"
                    onClick={callToActionScroll}
                  >
                    Explore all
                  </div>
                </div>
              </div>
            </div>

            
            <div className="homesvg">
              <img id="home" alt="website logo" />
            </div>
          </div>
        </div>

        <div
          ref={ambassadorSectionRef}
          className="container-landing ambassador-section"
        >
          <div className="landing-page-details">
            <div className="header-image ambassador">
              <img alt="Ambassador Illustration" />
            </div>
            <div className="heading-text">
              <Link href="/ambassador">
                <h1>
                  <u> Ambassador </u>
                </h1>
              </Link>
              <p>
                Place where you can find all the resources and details of
                ambassador/fellowship that are available across different
                countries and companies.
              </p>
            </div>
          </div>
          <div className="landing-page-details">
            <div className="heading-text second">
              <Link href="/programs">
                <h1>
                  <u> Programs </u>
                </h1>
              </Link>
              <p>
                Here you can find all the resources and details of Open Source
                Programs and event that are available across different
                countries.
              </p>
            </div>
            <div className="header-image program">
              <img alt="Programs Illustration" />
            </div>
          </div>
          <div className="landing-page-details">
            <div className="header-image web">
              <img alt="Web Dev Illustration" />
            </div>
            <div className="heading-text">
              <Link href="/webdev">
                <h1>
                  <u> Web Dev Tools </u>
                </h1>
              </Link>
              <p>
                A collection of all the tools that are required in web
                development made by the community to ease the process of web
                development like CSS Generators, Icons, Illustration, etc.
              </p>
            </div>
          </div>
          <div className="landing-page-details">
            <div className="heading-text second">
              <Link href="/games">
                <h1>
                  <u> Games </u>
                </h1>
              </Link>
              <p>
                A collection of fun games that help you learn web technologies
                in an enjoyable way.
              </p>
            </div>
            <div className="header-image gaming">
              <img alt="Games Illustration" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
