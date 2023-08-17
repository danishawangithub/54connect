import React, { Component } from "react";
import Slider from 'react-slick';
import Link from '../components/Link';
import {useState ,useEffect, useRef} from 'react';


//   const poster = news.image;
//       if (poster) {
//          const img = poster.replace('54connect', '');
//    
//       } 
//               
//    const renderednews = newsall.map((news) => {
//                 
//                const poster = news.image;
//                const img = poster.replace('54connect', '');
//              
//                return(
//                         <div key={news.id} className="col-md-4 col-lg-4 col-sm-6 col-6">
//                            <div className="news-grid-box"> <img src={img}/>
//                             <h4 className="col-black1"> {news.title}  </h4> </div>
//                         </div>
//                      );
// 
//       }); 

 
function Viral(){
 
    
  return (
      
      <>
         
              <section className="pad-top-20 pad-bot-80">
         <div className="container">
            <div className="block-element m-t-20 m-b-30">
               <div className="sec-head3">
                  <h3 className="col-orange2 mont-font"> Viral </h3>
               </div>
            </div>
            <div className="block-element">
               <div className="block-element m-b-15">
                  <div className="tabs-handler2">
                     <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                           <a className="nav-link active" data-toggle="tab" href="#viral-tab1" role="tab">Photos</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" data-toggle="tab" href="#viral-tab2" role="tab">Videos</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="block-element">
                  <div className="tab-content">
                     <div className="tab-pane active" id="viral-tab1" role="tabpanel">
                        <div className="block-element">
                           <div className="row">
                              <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                                 <div className="witness-box">
                                    <img src="/assets/images/witness-1.png" />
                                    <h3 className="col-black4 montserrat-font m-t-15"> Title  </h3>
                                 </div>
                              </div>
                              <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                                 <div className="witness-box">
                                    <img src="/assets/images/witness-2.png" />
                                    <h3 className="col-black4 montserrat-font m-t-15"> Title  </h3>
                                 </div>
                              </div>
                              <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                                 <div className="witness-box">
                                    <img src="/assets/images/witness-3.png" />
                                    <h3 className="col-black4 montserrat-font m-t-15"> Title  </h3>
                                 </div>
                              </div>
                              <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                                 <div className="witness-box">
                                    <img src="/assets/images/witness-4.png" />
                                    <h3 className="col-black4 montserrat-font m-t-15"> Title  </h3>
                                 </div>
                              </div>
                              <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                                 <div className="witness-box">
                                    <img src="/assets/images/witness-5.png" />
                                    <h3 className="col-black4 montserrat-font m-t-15"> Title  </h3>
                                 </div>
                              </div>
                              <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                                 <div className="witness-box">
                                    <img src="/assets/images/witness-6.png" />
                                    <h3 className="col-black4 montserrat-font m-t-15"> Title  </h3>
                                 </div>
                              </div>
                              <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                                 <div className="witness-box">
                                    <img src="/assets/images/witness-1.png" />
                                    <h3 className="col-black4 montserrat-font m-t-15"> Title  </h3>
                                 </div>
                              </div>
                              <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                                 <div className="witness-box">
                                    <img src="/assets/images/witness-2.png" />
                                    <h3 className="col-black4 montserrat-font m-t-15"> Title  </h3>
                                 </div>
                              </div>
                              <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                                 <div className="witness-box">
                                    <img src="/assets/images/witness-3.png" />
                                    <h3 className="col-black4 montserrat-font m-t-15"> Title  </h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="block-element text-center m-t-20">
                           <button className="submit-btn5"> Load More </button>
                        </div>
                     </div>
                     <div className="tab-pane" id="viral-tab2" role="tabpanel">
                        <div className="block-element">
                           <div className="row">
                              <div className="col-md-4 col-lg-4 col-sm-4 col-12">
                                 <div className="witness-box">
                                    <video controls="">
                                       <source src="/assets/images/dummy-video.mp4" type="video/mp4" />
                                    </video>
                                    <h3 className="col-black4 montserrat-font m-t-15"> Title  </h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="block-element text-center m-t-20">
                           <button className="submit-btn5"> Load More </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </>

  );
}

export default Viral;