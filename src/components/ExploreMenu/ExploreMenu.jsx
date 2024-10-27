import React from "react";
import "./ExploreMenu.css";
import {menu_list} from '../../assets/assets'; 
function ExploreMenu({category,setCategory}){
    return(
       <div className="explore-menu" id="about">
       <div className="intro">
       <div>
        <h2>INTRODUCTION</h2>
        <h1>TO HYDRA VR</h1>
       </div>
       <p>Don’t leave any point or sentence hanging loose without any substantiation or explanation. Every statement you make should be backed by logical reasoning that stays in one paragraph.</p> 
       </div>
        <div className="explore-menu-list">
          <img src="https://plus.unsplash.com/premium_photo-1661771007822-317c7c6c35f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dnIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"/>
          <div className="content">
          <h2>ABOUT</h2>
          <h1>HYDRA VR</h1>
          <p>Knowing how to write a paragraph is incredibly important. It’s a basic aspect of writing, and it is something that everyone should know how to do. There is a specific 
          structure that you have to follow when you’re writing a paragraph. This structure helps make it easier for the reader to understand what is going on. Through writing 
          good paragraphs, a person can communicate a lot better through their writing.</p>       
          <button>Let's Get In Touch</button>
         </div>
        </div>
       </div>
    );
}
export default ExploreMenu;