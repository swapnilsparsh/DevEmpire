import React from "react";
import "../sass/style.css";
import Footer from "./Footer";
import BackToTop from "./Backtotop";
import Navbar from "./Menu";


const App = () => {
  return (
    <>
      <Navbar />
      <BackToTop />
      <Footer />
    </>
  );
};

export default App;
