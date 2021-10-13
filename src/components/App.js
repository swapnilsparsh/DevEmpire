import React, { useState, useEffect } from "react";
import "../sass/style.css";
import Footer from "./Footer";
import BackToTop from "./Backtotop";
import { css } from "@emotion/react";

import Navbarhere from "./Menu";
import HashLoader from "react-spinners/HashLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  text-align: center;
  display: flex;
  
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return loading ? (
    <HashLoader color={"#40aaff"} loading={loading} css={override} size={80} />
  ) : (
    <>
      <Navbarhere />
      <BackToTop />
      <Footer />
    </>
  );
};

export default App;
