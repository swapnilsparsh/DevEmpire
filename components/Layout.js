import React, { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import Menu from "./Menu";
import Navbar from "./navbar/Links";
import Footer from "./Footer";
import BackToTop from "../components/Backtotop";

export default function Layout({ children }) {
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
      <Menu />
      <main>{children}</main>
      <BackToTop />
      <Footer />
    </>
  );
}
