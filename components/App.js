import React, { useState, useEffect } from "react";
import "../sass/style.css";
import Footer from "./Footer";
import BackToTop from "./Backtotop";
import Navbar from "./Menu";
import Preloader from "./Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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
    </>
  );
};

export default App;
