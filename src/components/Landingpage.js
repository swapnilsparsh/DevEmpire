import React from "react";
import Home from "../assets/svg/Home.svg";
import { Link } from "react-scroll";

const Landingpage = () => {
  return (
    <div className="landingpage">
      <div className="container-landing">
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

      <Link to="container" smooth={true} duration={1000}>
        <h4>Explore all</h4>
      </Link>

      <div className="container-landing">
        <div className="landing-page-details">
          <div className="header-image" >
            <img src="https://swapnilsparsh.github.io/images/portitem1.png" alt="" />
          </div>
          <div className="heading-text" >
            <h1>Ambassadors</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis fugiat praesentium in optio obcaecati porro atque autem reiciendis dolore voluptatem exercitationem cum laudantium animi, iste nostrum nam alias aut possimus!</p>
          </div>
        </div>
        <div className="landing-page-details">
          <div className="heading-text second" >
            <h1>Programs</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis fugiat praesentium in optio obcaecati porro atque autem reiciendis dolore voluptatem exercitationem cum laudantium animi, iste nostrum nam alias aut possimus!</p>
          </div>
          <div className="header-image" >
            <img src="https://swapnilsparsh.github.io/images/portitem1.png" alt="" />
          </div>
        </div>
        <div className="landing-page-details">
          <div className="header-image" >
            <img src="https://swapnilsparsh.github.io/images/portitem1.png" alt="" />
          </div>
          <div className="heading-text" >
            <h1>Web Development</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis fugiat praesentium in optio obcaecati porro atque autem reiciendis dolore voluptatem exercitationem cum laudantium animi, iste nostrum nam alias aut possimus!</p>
          </div>
        </div>
        <div className="landing-page-details">
          <div className="heading-text second" >
            <h1>JS Toolkits</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis fugiat praesentium in optio obcaecati porro atque autem reiciendis dolore voluptatem exercitationem cum laudantium animi, iste nostrum nam alias aut possimus!</p>
          </div>
          <div className="header-image" >
            <img src="https://swapnilsparsh.github.io/images/portitem1.png" alt="" />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Landingpage;
