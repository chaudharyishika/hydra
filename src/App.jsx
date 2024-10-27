import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';

import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPage/LoginPopup";
import How from "./components/How/How";
function App(){
  const [showLogin,setShowlogin] = useState(false);
  return(<>
   {showLogin?<LoginPopup setShowlogin={setShowlogin}/>:<></>}
   <div className="app">
   <Navbar setShowlogin={setShowlogin}/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/how" element={<How/>}/>
   </Routes>
   </div>
   
   </>
  );
}
export default App;




















