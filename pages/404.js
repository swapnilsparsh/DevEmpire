// import { Link } from "react-router-dom";
import styles from "../styles/404.module.css";
import Error from "../public/assets/lottie/Error.json";
import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
const Error404 = () => {
  const container404 = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container404.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../public/assets/lottie/Error.json')
    })
  }, [])
  return (
    <div className={styles.error_page}>
      <h2>Error 404!  Page Not Found!</h2>
      <div className='Container404' ref={container404} style={{height:'65vh'}}></div>

      {/* <Image src={Error} width={500} height={500} className="error-svg" alt="404 Not Found Image" /> */}
      <Link href="/">
        Back to Home
      </Link>
    </div>
  );
};

export default Error404;
