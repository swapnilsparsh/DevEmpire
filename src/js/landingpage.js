import React from "react";

const Landingpage = () => {
  return (
    <div className="container-landing">
      <div className="top-navbar">
        <div className="navigation">
          <div className="dark-mode"></div>
          <div className="twitter-button">
            <a
              className="twitter"
              href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20%F0%9F%91%8D&url=https://github.com/swapnilsparsh/DevSociety&via=swapnilsparsh"
              target="_blank"
            >
              <img src="../img/twitter-share.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="landing-page-header">
        <h1>Developer Society</h1>
        <img src="../img/prizegif.gif" alt="" />
      </div>
    </div>
  );
};

export default Landingpage;
