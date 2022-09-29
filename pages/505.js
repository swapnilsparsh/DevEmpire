// import Error from "../public/assets/svg/Error505.svg";
import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';

import Error from "./lottie/Error.json"
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
      animationData: require('./lottie/Error.json')
    })
  }, [])
 
  return (
    <div>
      <div className='Container' ref={container} style={{height:'75vh'}}></div>
       {/* <Lottie 
	    options={defaultOptions}
        height={300}
        width={300}
      /> */}
    </div>
  );
}

export default Error505;