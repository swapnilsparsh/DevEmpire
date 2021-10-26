import React, { useState, useEffect } from "react";
import "../sass/style.css";
import Footer from "./Footer";
import BackToTop from "./Backtotop";
import Navbar from "./Menu";
import Preloader from "./Preloader";
import Scroll from "./SmoothScroll";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);

  return loading ? (
    <Preloader />
    ) : (
    <>
      <Navbar />
      <BackToTop />
      <Footer />
      <Scroll/>
    </>
  );
};

export default App;
