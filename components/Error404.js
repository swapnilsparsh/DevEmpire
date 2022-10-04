// import { Link } from "react-router-dom";
import Error from "../public/assets/lottie/Error.json";
import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";


const Error404 = () => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../public/assets/lottie/Error.json')
    })
  }, [])
  return (
    <div className="error-page">
      <h2>Error 404!  Page Not Found!</h2>
      <div className='Container' ref={container} style={{height:'100vh'}}></div>

      {/* <img src={Error} className="error-svg" alt="A dragon breathing fire over a village" /> */}
      {/* <Link to="/" className="call-to-action-btn error-back-to-home-btn">
        Back to Home
      </Link> */}
    </div>
  );
};

export default Error404;
