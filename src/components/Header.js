import React, { Component } from "react";
import Slider from 'react-slick';
// import Link from '../components/Link';
import { Outlet, Link } from "react-router-dom";
 import axios from 'axios';
 
function Header(){


   const url = new URL("http://localhost:3000/news");
   const news = url.pathname; 
  

    const url_home = new URL("http://localhost:3000/");
   const home = url_home.pathname; 

 

   const url_tv = new URL("http://localhost:3000/tv");
   const tv = url_tv.pathname;

     const style = ''; 

   if (window.location.pathname === '/radio') {
         //console.log(window.location.pathname);
      const  style = 'header-4';
   }

   if (window.location.pathname === '/news') {
         console.log(window.location.pathname);
       const   style = 'header-4 header-2';
       
   }

const locationStorage = localStorage.getItem('token');


 const logoutAction = () => {
        axios.get('https://code.rashidashraf.com/54connect/api/logout',{}, { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then((r) => {
            localStorage.setItem('token', "")
          window.location.href = "/login";
        })
        .catch((e) => {
            console.log(e)
        });
    }


         
    
  return (
      
      <>
   
         <header className={window.location.pathname === '/news' &&  'header-4 header-2' || 'header-4 header-2'} >
         <div className="container">
            <div className="header-row">
               <div className="logo">
                  <Link to="/"><img src="/assets/images/home-logo.png" /></Link> 
               </div>
               <div className="navbar-handler">
                  <button className="navbar-trigger">  <img src="/assets/images/hamburger.png" />  </button>
               </div>
               <div className="navbar-custom">
                  <div className="menu-item">
                      
                     <Link to="/"  className={home === '/' ?  'Active' : ' ' } >Home</Link> 
                  </div>
                  <div className="menu-item">
                     
                     <Link to="/tv">TV54</Link>
                  </div>
                  <div className="menu-item">
                      <Link to="/on-demand">On Demand</Link> 
                  </div>
                  <div className="menu-item">
                     <Link to="/news">News54</Link> 
                      
                  </div>
                  <div className="menu-item">
                      <Link to="/radio">Radio54</Link> 
                      
                  </div>
                  <div className="menu-item">
                      
                     <Link to="/i-witness">i-Witness54</Link>   
                  </div>
                  <div className="menu-item">
                      
                     <Link to="/viral">Viral</Link> 
                  </div>
                  <div className="menu-item">
                     <Link to="/contact-us">Contact Us </Link> 
                      
                  </div>
               </div>
               <div className="header-right">
                  <div className="user-profile">
                     <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="/assets/images/user-icon.png" />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                           {locationStorage ? (
                              <>
                                 <Link to="/profile" className="dropdown-item">Profile </Link>
                                <a onClick={()=>logoutAction()} className="dropdown-item">Logout </a>
                                 </>
                           ) : (
                           <>
                              <Link to="/login" className="dropdown-item">Login </Link>
                              <Link to="/sign-up" className="dropdown-item">Sign Up </Link>
                           </>
                           )}

                          
                            
                        </div>
                     </div>
                  </div>
                  <div className="cta-btn">
                     
                     <Link to="/tv-live" className="live-tv-btn"><img src="/assets/images/tv-icon.png" />  Live TV </Link>
                     <Link to="/tv-live" className="live-tv-btn"><img src="/assets/images/radio-icon.png" />  Live Radio </Link>
                   
                  </div>
               </div>
            </div>
         </div>
      </header>
     
     
      </>

  );
}

export default Header;