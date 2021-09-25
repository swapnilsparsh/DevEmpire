import React from "react";
import Home from "../assets/svg/Home.svg";
import Navbar from "./Navbar.js";

const Landingpage = () => {
  return (
    <div className="landingpage">
      <div>
        <Navbar />
      </div>
      <div className="container-landing">
        <div className="navigation">
          <div className="github-button">
            <a
              className="github"
              href="https://github.com/swapnilsparsh/DevEmpire"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../assets/share-img/Github-share.png" alt="" />
            </a>
          </div>
          <div className="twitter-button">
            <a
              className="twitter"
              href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20having%20a%20collection%20of%20all%20the%20campus%20ambassador%20and%20fellowship%20programs&url=https://github.com/swapnilsparsh/DevEmpire&via=swapnilsparsh"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../assets/share-img/Twitter-share.png" alt="" />
            </a>
          </div>
        </div>
        <div className="landing-page-header">
          <div className="header-details">
            <h1>Developer Empire</h1>
            <p>
              All in one place where you can find all the resources and details of
              ambassador/fellowship that are available across different countries
              and companies. These are verified and crowdsourced by the community.
            </p>
          </div>
          <div className="homesvg">
            <img id="home" src={Home} alt="website logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
