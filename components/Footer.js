import React from "react";
import {
  FooterLink,
} from "./FooterStyles";
import dynamic from "next/dynamic";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});
const Footer = () => {

  let year = new Date().getFullYear();

  return (

   <div className="footerBox">
   <footer className="copyright">
   
    <div className="upper-footer-section">
    <div className="footer-first-section">
     <div className="footer-heading">
            
                <span>👑</span>DevEmpire
               
            </div>
             <div className="footer-about">
              Welcome to your one-stop solution for all resources and details on
              ambassador/fellowship programs, open source programs, web dev
              tools and so much more!
            </div>
             <div className="support-section">
              <div className="support-heading">Support</div>
              <div className="footer-support" >
              <div>
                <FooterLink
                  target="_blank"
                  href="https://github.com/swapnilsparsh/DevEmpire"
                >
                 <GitHubIcon sx={{ color: "black" }} />
                </FooterLink>
              </div>
              <div>
                <FooterLink
                  target="blank"
                  href="https://www.producthunt.com/products/developer-empire?utm_source=badge-featured&utm_medium=badge#developer-empire"
                >
                 <img src='../assets/footer-images/product-hunt.png'
                 alt = 'product-hunt'
                 className="product-hunt-img"
                 />
                </FooterLink>
              </div>
              
              <div>
                <FooterLink
                  target="blank"
                  href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20having%20a%20collection%20of%20all%20the%20campus%20ambassador%20and%20fellowship%20programs&url=https://devempire.netlify.app&via=swapnilsparsh"
                >
                  <TwitterIcon color="blue"/>
                </FooterLink>
              </div>
              </div>
            </div>
    </div>
    <div className="footer-second-section">
    <div className="footer-second1-section">
          <div className="heading-explore">Explore</div>
          <div className="explore-footer">
          <div>
          <Link href="/ambassador">
          <FooterLink>Ambasaddor</FooterLink>
         </Link>
         </div>
         <div>
         <Link href="/programs">
              <FooterLink>Programs</FooterLink>
            </Link>
            </div>
            <div>
            
            <Link href="/webdev">
              <FooterLink>WebDev</FooterLink>
            </Link>
            </div>
            <div>
           
            <Link href="/games">
              <FooterLink>Games</FooterLink>
            </Link>
            </div>
            </div>
          </div>
          <div className="footer-second2-component">
         <div className="heading-newsletter"> Newsletter</div> 
         <div> Don't miss to subscribe our new feeds, kindly fill the form below.</div>
         <div className="form-newsletter">
         <form action="#">
         <input type="email" placeholder="Email Address" className="input-newsletter"/>
         <button className="submit-newsletter"><SendIcon sx={{ backgroundColor: "white",marginBottom: "-0.5rem", paddingTop: '0rem'}}/></button>
     </form>
     </div>
     </div>
     </div>
         </div>
         <div className="footer-lower-section">
         <div className="made-by-footer">
         Made by{" "}
         <a
          href="https://swapnilsparsh.github.io"
          target="_blank"
          rel="noreferrer"
         >
          {" "}
          Swapnil Srivastava
          </a>{" "}
         </div>
         <div>
         <p className="copyright-footer"> DevEmpire © {year} </p>
         </div>
         <div className="maintain-by-footer">
         Maintain by
         <a
          href="https://jatiinyadav.github.io"
          target="_blank"
          rel="noreferrer"
         >
          {" "}
          Jatin Yadav
         </a>
         </div>
        
         </div>
         
        
  
   </footer>
   </div>

  );
};

export default Footer;
