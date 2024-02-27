import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"], weight: "600" });

console.log(process.env.GA_TRACKING_ID);

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
            document
              .querySelector(".layout .filters a[href*=" + id + "]")
              ?.classList.add("active");
          });
        }
      });
    };
  });

  return (
    <div className={inter.className}>
      <Layout>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="google-site-verification"
            content="Z70nuxlfRajrcIVmpDJ7iQnm6ppobITKcbhdhWzywfU"
          />

          <link
            rel="shortcut icon"
            href="icon/favicon.ico"
            type="image/x-icon"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          {/* Primary Meta Tags */}
          <title>Developer Empire</title>
          <meta name="title" content="Developer Empire" />
          <meta
            name="description"
            content="All in one place where you can find all the resources and details of ambassador/fellowship, open-source events, web dev sites, js toolkits etc."
          />

          {/* Open Graph / Facebook  */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://devempire.netlify.app/" />
          <meta property="og:title" content="Developer Empire" />
          <meta
            property="og:description"
            content="All in one place where you can find all the resources and details of ambassador/fellowship, open-source events, web dev sites, js toolkits etc."
          />
          <meta
            property="og:image"
            content="https://devempire.netlify.app/images/meta-img/Meta.png"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:creator" content="@swapnilsparsh" />
          <meta
            property="twitter:url"
            content="https://devempire.netlify.app/"
          />
          <meta property="twitter:title" content="Developer Empire" />
          <meta
            property="twitter:description"
            content="All in one place where you can find all the resources and details of ambassador/fellowship, open-source events, web dev sites, js toolkits etc."
          />
          <meta
            name="twitter:image:src"
            content="https://devempire.netlify.app/images/meta-img/Meta.png"
          />
          <meta
            property="twitter:image"
            content="https://devempire.netlify.app/images/meta-img/Meta.png"
          />
          <title>DevEmpire</title>
        </Head>
        <GoogleAnalytics gaId="G-73HBZW00WR" />
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
