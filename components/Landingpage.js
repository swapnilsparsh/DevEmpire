import React, { useRef } from "react";
import Home from "../public/assets/svg/Home.svg";
// import JS from "../public/assets/svg/JSToolkit.svg";
import Ambassador from "../public/assets/svg/Ambassador.svg";
import WebDev from "../public/assets/svg/WebDev.svg";
import Programs from "../public/assets/svg/Programs.svg";
import Games from "../public/assets/svg/Gaming.svg";
import Image from "next/image";
import Link from "next/link";
import AdBanner from "./AdBanner";

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
                sites, js toolkits, etc. that are available across different
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
              <Image id="home" src={Home} alt="website logo" />
            </div>
          </div>
        </div>

        <div
          ref={ambassadorSectionRef}
          className="container-landing ambassador-section"
        >
          <div className="landing-page-details">
            <div className="header-image">
              <Image id="home" src={Ambassador} alt="Ambassador Illustration" />
            </div>
            <div className="heading-text">
              <Link href="/ambassador">
                <h1>
                  <u> Ambassador </u>
                </h1>
              </Link>
              <p>
              A place where you can find all the resources and details of
                ambassador/fellowship that is available across different
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
                Programs and events that are available across different
                countries.
              </p>
            </div>
            <div className="header-image">
              <Image id="home" src={Programs} alt="Programs Illustration" />
            </div>
          </div>
          <div className="landing-page-details">
            <div className="header-image">
              <Image id="home" src={WebDev} alt="Web Dev Illustration" />
            </div>
            <div className="heading-text">
              <Link href="/webdev">
                <h1>
                  <u> Web Dev Tools </u>
                </h1>
              </Link>
              <p>
              A collection of all the tools that are required for web
                the development made by the community to ease the process of web
                development like CSS Generators, Icons, Illustrations, etc.
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
                A collection of fun games that help you learn web technologies in an enjoyable way.
              </p>
            </div>
            <div className="header-image">
              <Image id="home" src={Games} alt="Games Illustration" />
            </div>
          </div>
        </div>
      </div>
      <AdBanner data-ad-slot="7434970023"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  );
};

export default Landingpage;
