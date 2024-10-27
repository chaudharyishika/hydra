import React from "react";
import './FoodDisplay.css';
function FoodDisplay(){
    
    return(
        <div className="food-display" id="food-display">
           <div className="into">
             <div>
              <h2>WHY BUILD</h2>
              <h1>WITH HYDRA?</h1>
             </div>
             <p>Although these ideas may look true in many instances, This is one of those subtle things in English writing that never 
             really gets explained on priority making it one of those commonly used things that are barely understood. Which is why this read is going to be great.</p>  
           </div>
           <div className="food-display-list">
            <div id="1">
             <img src="https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.webp?a=1&b=1&s=612x612&w=0&k=20&c=i8vHSeffMXOknM1iu8QDnSEDuNg0nOoLjJvP-KjdRoE="/>
             <h2>SIMULATION</h2>
             <hr/>
             <p>A paragraph is a group of sentences that are related to a single topic and are organized and coherent. Paragraphs are the building blocks of writing and are used to organize longer pieces of writing</p>
             <button>TRY IT NOW</button>
            </div>
            <div id="2">
             <img src="https://media.istockphoto.com/id/1054574096/photo/virtual-reality-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=8YdRgH_eGWGrOPlX7B69Sg8Zmp-f2i9BUXdFIovVpWo="/>
             <h2>EDUCATION</h2>
             <hr/>
             <p>A paragraph is a group of sentences that are related to a single topic and are organized and coherent. Paragraphs are the building blocks of writing and are used to organize longer pieces of writing</p>
             <button>TRY IT NOW</button>
            </div>
            <div id="3">
             <img src="https://media.istockphoto.com/id/1137271252/photo/digital-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ow6doAhwsi3Nvn8tKeVrY7zRztaf1xIDZXFtJC7d5hs="/>
             <h2>SELF CARE</h2>
             <hr/>
             <p>A paragraph is a group of sentences that are related to a single topic and are organized and coherent. Paragraphs are the building blocks of writing and are used to organize longer pieces of writing</p>
             <button>TRY IT NOW</button>
            </div>
            <div id="4">
             <img src="https://media.istockphoto.com/id/981901868/photo/cloud-computing.jpg?s=612x612&w=is&k=20&c=TV4roJzWxyZIFDL8DtuKbU8YGdPJWIenuGDPlZEh1AM="/>
             <h2>OUTDOOR</h2>
             <hr/>
             <p>A paragraph is a group of sentences that are related to a single topic and are organized and coherent. Paragraphs are the building blocks of writing and are used to organize longer pieces of writing</p>
             <button>TRY IT NOW</button>
            </div>

           </div>
        </div>
    )
}
export default FoodDisplay;