import React, { useRef } from "react";
import Home from "../public/assets/svg/Home.svg";
import Ambassador from "../public/assets/svg/Ambassador.svg";
import Hackathon from "../public/assets/svg/Hackathon.png";
import WebDev from "../public/assets/svg/WebDev.svg";
import Programs from "../public/assets/svg/Programs.svg";
import Games from "../public/assets/svg/Gaming.svg";
import Backend from "../public/assets/svg/Backend.svg";
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
                It's time to close those extra tabs. Welcome to your one-stop solution for all
                resources and details on ambassador/fellowship programs, open source programs, web dev tools and so much more!
              </p>
              <div className="landing-page-btn-container">
                <div className="discord-button">
                  <a
                    className="discord"
                    href="https://discord.com/invite/V4W4Z4sTmh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="../assets/share-img/Discord-share.webp" alt="" />
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
                Find the perfect program for you from 75+ ambassador and fellowship programs from all over the world
              </p>
            </div>
          </div>
          <div className="landing-page-details">
            <div className="heading-text second">
              <Link href="/hackathons">
                <h1>
                  <u> Hackathons </u>
                </h1>
              </Link>
              <p>
              Participate in various hackathons to showcase your skills & get rewarded!              </p>
            </div>
            <div className="header-image">
              <Image id="home" src={Hackathon} alt="Hackathon Illustration" />
            </div>
          </div>
          <div className="landing-page-details">
            <div className="header-image">
              <Image id="home" src={Programs} alt="Programs Illustration" />
              </div>
            <div className="heading-text">
              <Link href="/programs">
                <h1>
                  <u> Programs </u>
                </h1>
              </Link>
              <p>
              Looking for an open-source program to apply to? You're just a click away. Find all details right here!
              </p>
              </div>
          </div>
          <div className="landing-page-details">
            <div className="heading-text second">
              <Link href="/webdev">
                <h1>
                  <u> Web Dev </u>
                </h1>
              </Link>
              <p>
              Power up your website with awesome tools from
                CSS generators and stock photos, to icons, illustrations, vectors and so much more, all at one place
              </p>
            </div>
            <div className="header-image">
              <Image id="home" src={WebDev} alt="Web Dev Illustration" />
            </div>
          </div>
          <div className="landing-page-details">
            <div className="header-image">
              <Image id="home" src={Games} alt="Games Illustration" />
            </div>
            <div className="heading-text">
              <Link href="/games">
                <h1>
                  <u> Games </u>
                </h1>
              </Link>
              <p>
              Ever heard of 'All work and no play makes the developer dull' ? Here's your chance to mix some play into your work !
              </p>
              </div>
          </div>
          <div className="landing-page-details">
            <div className="heading-text second"> 
              <Link href="/backend">
                <h1>
                  <u> Backend </u>
                </h1>
              </Link>
              <p>
              Looking for a backend service for your project? We've got you covered with a list of the best ones out there!
              </p>
              </div>
            <div className="header-image">
              <Image id="home" src={Backend} alt="Backend Illustration" />
              </div>
          </div>
        </div>
      </div>
      <AdBanner
        data-ad-slot="7434970023"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  );
};

export default Landingpage;
