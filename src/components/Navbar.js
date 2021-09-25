import React from "react";
import "../sass/style.css";

class Links extends React.Component {
  render() {
    return (
      <div>
        <a href="#">Ambassador</a>
        <a href="#">Events</a>
        <a href="#">WebDev Sites</a>
        <a href="#">JS Frameworks</a>
      </div>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        
        <div className="navWide">
          <div className="wideDiv">
            <Links />
          </div>
        </div>
        
        <div className="navNarrow" onClick={this.toggle}>
          <i className="fa fa-bars fa-2x" />
          <div className="narrowLinks hidden">
            <Links />
          </div>
        </div>
      </nav>
    );
  }

  toggle() {
    let narrowLinks = document.querySelector(".narrowLinks");
    narrowLinks.classList.toggle("hidden");
  }
  
}

export default Navbar;