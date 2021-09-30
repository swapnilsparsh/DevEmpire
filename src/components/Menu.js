import React from "react";
import JSToolkits from "../components/js-toolkits/JSToolkits";
import WebDev from "../components/web-dev/Web-dev";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Links from "./navbar/Links";
import Landingpage from "./Landingpage";
import Ambassador from "./ambassador/Ambassador";
import Programs from "./programs/Programs";
import ScrollToTop from "./ScrollToTop";

const NavigationBar = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <div className="navWide">
            <div className="wideDiv">
              <Links />
            </div>
          </div>

          <div
            className="navNarrow"
            onClick={function () {
              let narrowLinks = document.querySelector(".narrowLinks");
              narrowLinks.classList.toggle("hidden");
            }}
          >
            <i className="fa fa-bars fa-2x" />
            <div className="narrowLinks hidden">
              <Links />
            </div>
          </div>
        </nav>

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

        <ScrollToTop />

        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/ambassador" component={Ambassador} />
          <Route exact path="/landingpage" component={Landingpage} />
          <Route exact path="/programs" component={Programs} />
          <Route exact path="/webdev" component={WebDev} />
          <Route exact path="/jstoolkits" component={JSToolkits} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default NavigationBar;
