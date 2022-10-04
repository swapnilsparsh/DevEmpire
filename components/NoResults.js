import React, { useEffect, useRef } from 'react';
import SearchNotFound from  "../pages/lottie/SearchNotFound.json";
import Image from "next/image";
import lottie from 'lottie-web';
import Link from "next/link";
import styles from "../styles/404.module.css";
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

// export default function NoResults({ search }) {
//   return (
//     <div>

//       <div className="noresult-description">
//         <h1>No Results found for &apos;{search}&apos;</h1>
//         <p>
//           Check your spelling and try again🙂
//         </p>
//       </div>
//       <br />
//       <Image src={SearchNotFound} alt="not-found" className='noresult-image' />
//     </div>
//   );
// }

export function NoResults({search}) {

  
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../pages/lottie/SearchNotFound.json')
    })
  }, [])
 
  return (
       <div>
    
         <div className="noresult-description">
           <h1>No Results found for &apos;{search}&apos;</h1>
           <p>
             Check your spelling and try again🙂
           </p>
         </div>
         <br />
      <div className='Container' ref={container} style={{height:'40vh'} }></div>

       </div>
     );
}

export default NoResults;
