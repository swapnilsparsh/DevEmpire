import React, { useState, useEffect } from "react";
import Menu from "./Navbar/Menu";
import Navbar from "./navbar/Links";
import Footer from "./Footer/Footer";
import BackToTop from "../components/TopButton/Backtotop";

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Navbar />
      <Menu />
      <main>{children}</main>
      <BackToTop />
      <Footer />
    </>
  );
}
