import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
function Footer(){
    return(
       <div className="footer" id="footer">
         <div className="footer-content">
          <div className="footer-content-left">
                 <h1>HYDRA</h1>
                 <p>Lorem Ispum is simply dummy text of the printing and typesetting industry</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
          </div>
         
          <div className="footer-content-center">
             <h2>COMPANY</h2>
             <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>TECHNOLOGIES</li>
                <li>PRIVACY POLICIES</li>
             </ul>
          </div>

          <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+1-212-456-7890</li>
                <li>contact@hydra.com</li>
             </ul>
          </div>
         </div>
         <hr/>
         <p className="footer-copyright">Copyright 2024 @ hydra.com - All Right Reserved.</p>
       </div>
    );
}
export default Footer;