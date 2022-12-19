import React, { useRef } from "react";
import Link from "next/link";
import Lottie from 'react-lottie';
// import Lottie from "react-lottie-player";
import animationData0 from "../pages/lotties/Devempire.json";
import animationData1 from "../pages/lotties/Ambassador.json";
import animationData2 from "../pages/lotties/teamwork.json";
import animationData3 from "../pages/lotties/webdev.json";
import animationData4 from "../pages/lotties/jstoolkit.json";



const Landingpage = () => {
  const defaultOptions0 = {
    loop: true,
    autoplay: true,
    animationData: animationData0,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: animationData4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
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
              {/* <Image id="home" src={Home} alt="website logo" /> */}
              <Lottie 
	              options={defaultOptions0}
                height="100%"
                width={600}
            />
            </div>
          </div>
        </div>

        <div
          ref={ambassadorSectionRef}
          className="container-landing ambassador-section"
        >
          <div className="landing-page-details">
            <div className="header-image">
              {/* <Image id="home" src={Ambassador} alt="Ambassador Illustration" /> */}
            <Lottie 
	              options={defaultOptions1}
                height="100%"
                width={600}
            />
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
            <Lottie 
	              options={defaultOptions2}
                height="100%"
                width={400}
            />
            </div>
          </div>
          <div className="landing-page-details">
            <div className="header-image">
              {/* <Image id="home" src={WebDev} alt="Web Dev Illustration" /> */}
              <Lottie 
                id="home"
	              options={defaultOptions3}
                height={300}
                width={400}
            />
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
              {/* <Image id="home" src={JS} alt="JS Illustration" /> */}
              <Lottie 
	              options={defaultOptions4}
                height="100%"
                width={200}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
