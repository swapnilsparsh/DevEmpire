// import Error from "../public/assets/svg/Error505.svg";
import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';

import Error from "../public/assets/lottie/Error505.json"
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/404.module.css";



export function Error505() {

  
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../public/assets/lottie/Error505.json')
    })
  }, [])
 
  return (
    <div className={styles.error_page}>
      <h2>Error 505! Server-side error occurred!</h2>
      
      <div className='Container' ref={container} style={{height:'75vh'}}></div>
       
    </div>
  );
}

export default Error505;