import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"], weight: "600" });

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let filterLinks = document.querySelectorAll(".layout .filters a");
    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          filterLinks.forEach((links) => {
            links.classList.remove("active");
            document.querySelector(".layout .filters a[href*=" + id + "]")?.classList.add("active");
          });
        }
      });
    };
  });

  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
