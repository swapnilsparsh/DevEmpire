import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';
// import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

// const overscrollOptions = {
//     enable: true,
//     effect: 'bounce',
//     damping: 0.7,
//     maxOverscroll: 20,
//     renderByPixels: true
//     // glowColor: '#fff',
// };

//   const overscrollOptions = {
//     enable: true,
//     damping: 0.0,
//     maxOverscroll: 0,
//     glowColor: '#222a2d',
//   };

  
const options = {
    damping : 0.1,
    effect: 'bounce',
  }
  const Scroll = () => {
    useEffect(() => {
      // Scrollbar.use(OverscrollPlugin);
      Scrollbar.init(document.body, options);
  
      return () => {
        if (Scrollbar) Scrollbar.destroy(document.body)
      } 
    },[])

    return null;
}

export default Scroll;