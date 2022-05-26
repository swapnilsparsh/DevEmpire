import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import Head from "next/head";

import "../styles/globals.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <meta charset="utf-8" />
        <meta
          name="google-site-verification"
          content="Z70nuxlfRajrcIVmpDJ7iQnm6ppobITKcbhdhWzywfU"
        />

        <link
          rel="shortcut icon"
          href="assets/icon/favicon.png"
          type="image/x-icon"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Primary Meta Tags */}
        <title>Developer Empire</title>
        <meta name="title" content="Developer Empire" />
        <meta
          name="description"
          content="All in one place where you can find all the resources and details of 
    ambassador/fellowship, open-source events, web dev sites, js toolkits and etc."
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devempire.netlify.app/" />
        <meta property="og:title" content="Developer Empire" />
        <meta
          property="og:description"
          content="All in one place where you can find all the resources and details of 
      ambassador/fellowship, open-source events, web dev sites, js toolkits and etc."
        />
        <meta
          property="og:image"
          content="https://devempire.netlify.app/assets/meta-img/Meta.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta propert="twitter:creator" content="@swapnilsparsh" />
        <meta property="twitter:url" content="https://devempire.netlify.app/" />
        <meta property="twitter:title" content="Developer Empire" />
        <meta
          property="twitter:description"
          content="All in one place where you can find all the resources and details of 
      ambassador/fellowship, open-source events, web dev sites, js toolkits and etc."
        />
        <meta
          name="twitter:image:src"
          content="https://devempire.netlify.app/assets/meta-img/Meta.png"
        />
        <meta
          property="twitter:image"
          content="https://devempire.netlify.app/assets/meta-img/Meta.png"
        />
        <title>DevEmpire</title>
      </Head>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
