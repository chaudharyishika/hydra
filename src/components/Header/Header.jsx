import React from 'react';
import './Header.css';
function Header(){
    return(
        <div className='header'>
            <div className='header-contents'>
                <h2>Dive Into The Depths Virtual Reality</h2>
                <p>Lorem ipsum dolor sit amet, consector adiprising rlit,wed do eiusmed tempot incidentt ut labore et dolre. </p>
                <button>BUILD YOUR WORLD </button>
               <div className='column'> 
                <div className='map'>
                   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0l4Wwt5PvTjrTdv7CicB-NTW87fVn7_FDQ&s'/>
                  <div>
                   <h1>Pay Us a Visit</h1>
                   <p>UnionSeatle,98101, United States</p> 
                  </div>
                </div>
                <div className='call'>
                    <img src='https://png.pngtree.com/png-clipart/20191120/original/pngtree-phone-icon-png-image_5065646.jpg'/>
                    <div>
                       <h1>Give Us a Call</h1>
                       <p>1101-110-1010</p> 
                    </div>
                </div>
                <div className='mail'>
                    <img src='https://icon2.cleanpng.com/20180505/ywq/avsssntsd.webp'/>
                    <div>
                        <h1>Send Us a Mail</h1>
                        <p>Contact@HydraVt.com</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
}
export default Header;