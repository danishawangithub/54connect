import React, { Component } from "react";
import Slider from 'react-slick';
// import Link from '../components/Link';
import { Outlet, Link } from "react-router-dom";
import {useState ,useEffect, useRef} from 'react';
const locationStorage_tokan = localStorage.getItem('token');
const currentUser = localStorage.getItem('currentUser');
const obj = JSON.parse(currentUser);
 



function I_witness(){
 
    
  return (
      
      <>
         
            <section className="pad-top-20 pad-bot-80">
         <div className="container">
            <div className="block-element m-t-20 m-b-30">
               <div className="row">
                  <div className="col-md-8 col-lg-8 col-sm-12 col-12">
                     <div className="sec-head3">
                        <h3 className="col-orange2 mont-font"> i-Witnesses </h3>
                     </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                     <div className="block-element text-right mob-text-left">

                      {locationStorage_tokan ? (
                              <>
                                <Link to="/upload-i-witness" className="submit-btn5"><img src="/assets/images/upload-icon.png" /> Upload</Link>
                                 </>
                           ) : (
                           <>
                             <Link to="/login" className="submit-btn5"><img src="/assets/images/upload-icon.png" /> Upload</Link>
                           </>
                           )}

                        
                        
                     </div>
                  </div>
               </div>
            </div>
            <div className="block-element">
               <div className="block-element">
                  <div className="witness-heading">
                     <h4 className="col-orange1 montserrat-font"> Africa </h4>
                  </div>
               </div>
               <div className="block-element">
                  <div className="row">
                     <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                        <div className="witness-box">
                           <a href="#">
                           <img src="/assets/images/witness-1.png" />
                           <h5> 28-Aug-2022 </h5>
                           <h3 className="col-black4 montserrat-font"> Muezzin stabbed in neck at London  mosque  </h3>
                        </a>
                        </div>
                     </div>
                     <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                        <div className="witness-box">
                           <a href="#">
                           <img src="/assets/images/witness-2.png" />
                           <h5> 28-Aug-2022 </h5>
                           <h3 className="col-black4 montserrat-font"> Central Mosque sealed off after Regent's Park stabbing </h3>
                        </a>
                        </div>
                     </div>
                     <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                        <div className="witness-box">
                           <a href="#">
                           <img src="/assets/images/witness-3.png" />
                           <h5> 28-Aug-2022 </h5>
                           <h3 className="col-black4 montserrat-font"> Central Mosque surrounded by police after attack  </h3>
                        </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="block-element">
                  <div className="witness-heading">
                     <h4 className="col-orange1 montserrat-font"> Cameroon </h4>
                  </div>
               </div>
               <div className="block-element">
                  <div className="row">
                     <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                        <div className="witness-box">
                           <a href="#">
                           <img src="/assets/images/witness-1.png" />
                           <h5> 15-Aug-2022 </h5>
                           <h3 className="col-black4 montserrat-font"> Rebels kill five gendermes in Cameroon   </h3>
                        </a>
                        </div>
                     </div>
                     <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                        <div className="witness-box">
                           <a href="#">
                           <img src="/assets/images/witness-2.png" />
                           <h5> 16-Aug-2022 </h5>
                           <h3 className="col-black4 montserrat-font"> Ambazonia fighters gun down Gendarme officer in restive </h3>
                        </a>
                        </div>
                     </div>
                     <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                        <div className="witness-box">
                           <a href="#">
                           <img src="/assets/images/witness-3.png" />
                           <h5> 27-Aug-2022 </h5>
                           <h3 className="col-black4 montserrat-font"> Cameroonian Troops Displays Separatist Leader's Corpse  </h3>
                        </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="block-element">
                  <div className="witness-heading">
                     <h4 className="col-orange1 montserrat-font"> Cameroon </h4>
                  </div>
               </div>
               <div className="block-element">
                  <div className="row">
                     <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                        <div className="witness-box">
                           <a href="#">
                           <img src="/assets/images/witness-1.png" />
                           <h5> 15-Aug-2022 </h5>
                           <h3 className="col-black4 montserrat-font"> Rebels kill five gendermes in Cameroon   </h3>
                        </a>
                        </div>
                     </div>
                     <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                        <div className="witness-box">
                           <a href="#">
                           <img src="/assets/images/witness-2.png" />
                           <h5> 16-Aug-2022 </h5>
                           <h3 className="col-black4 montserrat-font"> Ambazonia fighters gun down Gendarme officer in restive </h3>
                        </a>
                        </div>
                     </div>
                     <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                        <div className="witness-box">
                           <a href="#">
                           <img src="/assets/images/witness-3.png" />>
                           <h5> 27-Aug-2022 </h5>
                           <h3 className="col-black4 montserrat-font"> Cameroonian Troops Displays Separatist Leader's Corpse  </h3>
                        </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="block-element text-center m-t-20">
                  <button className="submit-btn5"> Load More </button>
               </div>
            </div>
         </div>
      </section>
      </>

  );
}

export default I_witness;