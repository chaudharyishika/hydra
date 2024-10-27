import React, { useContext, useState } from "react";
import "./Navbar.css";
import {assets} from '../../assets/assets';
import { Link } from "react-router-dom";
function Navbar({setShowlogin}){
  const [menu,setmenu] = useState("menu");
  
    return(
    <div className="navbar">
      <Link to="/"><h1 className="logo">HYDRA</h1></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>HOME</Link>
        <a href="#about" onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>ABOUT</a>
        <a href="#app-download" onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>TECHNOLOGIES</a>
        <a href="#how" onClick={()=>setmenu("how")} className={menu==="how"?"active":""}>HOW</a>
        <a href="#footer" onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>CONTACT US</a>
      </ul>
      <div className="navbar-right">
        
        <button onClick={()=>setShowlogin(true)}>Sign in</button>
      </div>
    </div>
    );
}
export default Navbar; 