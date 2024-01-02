import React, { useState } from "react";

const NavigationBar = () => {
  return (
    <>
      <div className="nav-version">
        <h2>
          Introducing Dev Empire v2! We&apos;re currently in early release 🚀
        </h2>
      </div>

      <div className="navigation">
        <div className="github-button">
          <a
            className="github"
            href="https://github.com/swapnilsparsh/DevEmpire"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../assets/share-img/Github-share.webp"
              alt="Github-Share-Button"
            />
          </a>
        </div>
        <div className="product-hunt-button ">
          <a
            className="product-hunt"
            href="https://www.producthunt.com/posts/developer-empire?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-developer-empire"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=315221&theme=light"
              alt="Developer Empire - All in one place where you can find all the resources | Product Hunt"
            />
          </a>
        </div>
        <div className="twitter-button">
          <a
            className="twitter"
            href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20having%20a%20collection%20of%20all%20the%20campus%20ambassador%20and%20fellowship%20programs&url=https://devempire.netlify.app&via=swapnilsparsh"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../assets/share-img/Twitter-share.webp"
              alt="Twitter-Share-Button"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
