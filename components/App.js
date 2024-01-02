import React from "react";
import "../sass/style.css";
import Footer from "./Footer/Footer";
import BackToTop from "./TopButton/Backtotop";
import Navbar from "./Navbar/Menu";

const App = () => {

  return <>
      <Navbar />
      <BackToTop />
      <Footer />
    </>
};

export default App;
