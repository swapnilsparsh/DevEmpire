import React, { useRef } from "react";
import Home from "../public/assets/svg/Home.svg";
import JS from "../public/assets/svg/JSToolkit.svg";
import Ambassador from "../public/assets/svg/Ambassador.svg";
import WebDev from "../public/assets/svg/WebDev.svg";
import Programs from "../public/assets/svg/Programs.svg";
// import { NavLink } from "react-router-dom";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

const Landingpage = () => {
  const ambassadorSectionRef = useRef(null);
  const callToActionScroll = () => {
    ambassadorSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="google-site-verification"
          content="Z70nuxlfRajrcIVmpDJ7iQnm6ppobITKcbhdhWzywfU"
        />

        <link
          rel="shortcut icon"
          href="assets/icon/favicon.png"
          type="image/x-icon"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Primary Meta Tags */}
        <title>Developer Empire</title>
        <meta name="title" content="Developer Empire" />
        <meta
          name="description"
          content="All in one place where you can find all the resources and details of 
    ambassador/fellowship, open-source events, web dev sites, js toolkits and etc."
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devempire.netlify.app/" />
        <meta property="og:title" content="Developer Empire" />
        <meta
          property="og:description"
          content="All in one place where you can find all the resources and details of 
      ambassador/fellowship, open-source events, web dev sites, js toolkits and etc."
        />
        <meta
          property="og:image"
          content="https://devempire.netlify.app/assets/meta-img/Meta.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta propert="twitter:creator" content="@swapnilsparsh" />
        <meta property="twitter:url" content="https://devempire.netlify.app/" />
        <meta property="twitter:title" content="Developer Empire" />
        <meta
          property="twitter:description"
          content="All in one place where you can find all the resources and details of 
      ambassador/fellowship, open-source events, web dev sites, js toolkits and etc."
        />
        <meta
          name="twitter:image:src"
          content="https://devempire.netlify.app/assets/meta-img/Meta.png"
        />
        <meta
          property="twitter:image"
          content="https://devempire.netlify.app/assets/meta-img/Meta.png"
        />
        <title>DevEmpire</title>
      </Head>
      
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
                A collection of all the tools that are required in web
                development made by the community to ease the process of web
                development like CSS Generators, Icons, Illustration, etc.
              </p>
            </div>
          </div>
          <div className="landing-page-details">
            <div className="heading-text second">
              <Link href="/jstoolkits">
                <h1>
                  <u> JS Toolkits </u>
                </h1>
              </Link>
              <p>
                While the number of ways to organize JavaScript is almost
                infinite, here are some collection of JS framework and libraries
                that can help you while you are working on a project or
                searching around the web.
              </p>
            </div>
            <div className="header-image">
              <Image id="home" src={JS} alt="JS Illustration" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
