import React from "react";
import "../sass/style.css";
import Footer from "./Footer";
import BackToTop from "./Backtotop";
import Navbarhere from "./Menu";


const App = () => {
  return (
    <div className="main">
      <Navbarhere />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;
