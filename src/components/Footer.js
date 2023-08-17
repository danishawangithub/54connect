import React, { Component } from "react";
import Slider from 'react-slick';
import Link from '../components/Link';
 
 
function Footer(){
     
    
  return (
      
      <> 
         
          
      <footer>
         <div className="container">
            <div className="row">
               <div className="col-md-3 col-lg-3 col-sm-12 col-12">
                  <div className="footer-logo">
                     <a href="index.html"> <img src="/assets/images/home-logo.png" /> </a>   
                  </div>
               </div>
               <div className="col-md-9 col-lg-9 col-sm-12 col-12">
                  <div className="footer-grid">
                      <div className="footer-block">
                        <h5 className="footer-head"> Services </h5>
                        <ul className="footer-list1">
                           <li>  
                                 <Link to="/tv">TV54</Link>
                           </li>
                           <li>   <Link to="/news">News54</Link> </li>
                           <li>  <Link to="/radio">Radio54</Link>   </li>
                           <li> <Link to="/">54Studio Rental</Link>   </li>
                        </ul>
                     </div>
                     <div className="footer-block">
                        <h5 className="footer-head"> Useful Links </h5>
                        <ul className="footer-list1">
                           <li>
                           <Link to="/contact-us">Contact Us </Link> 
                            </li>
                           <li> 
                          
                            <Link to="/">Advertise With Us</Link> 
                           </li>
                           <li> 
                          
                              <Link to="/">FAQs</Link> 
                            </li>
                        </ul>
                     </div>
                     <div className="footer-block">
                        <h5 className="footer-head"> Get App  </h5>
                        <p className="col-black1 m-b-20"> 54COnnects apps keeps you updated with trending news and top stories from across the world. </p>
                        <a href="" className="store-btn"> <img src="/assets/images/google-store.png" /> </a>
                        <a href="" className="store-btn"> <img src="/assets/images/apple-store.png" /> </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
     
     
      </>

  );
}

export default Footer;