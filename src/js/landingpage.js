import React from "react";
import Home from "../svg/Home.svg";

const Landingpage = () => {
  return (
    <div className="container-landing">
      <div className="navigation">
        <div className="github-button">
          <a className="github" href="https://github.com/swapnilsparsh/DevSociety" target="_blank" rel="noreferrer">
            <img src="../img/github-share.png" alt="" />
          </a>
        </div>
        <div className="twitter-button">
          <a
            className="twitter"
            href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20%F0%9F%91%8D&url=https://github.com/swapnilsparsh/DevSociety&via=swapnilsparsh"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../img/twitter-share.png" alt="" />
          </a>
        </div>
      </div>
      <div className="landing-page-header">
        <div className="header-details">
          <h1>Developer Society</h1>
          <p>
            All in one place where you can find all the resources and details 
            of ambassador/fellowship that are available across different countries and
            companies.These are verified and crowdsourced by the community.
          </p>
          <a href="#container">
            <h4>Explore all</h4>
          </a>
        </div>
        <div className="homesvg">
          <img src={Home} alt="website logo" />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
