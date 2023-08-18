import React, { Component } from "react";
import Slider from 'react-slick';
import { Outlet, Link } from "react-router-dom";
// import Link from '../components/Link';
import {useState ,useEffect, useRef} from 'react';

 
function Tv_live(){
 
   

  return (
      
      <>
         
          <section className="pad-top-40 pad-bot-80">
         <div className="container">
            <div className="block-element">
               <div className="row">
                  <div className="col-md-8 col-lg-8 col-sm-12 col-12">
                     <div className="block-element m-b-20">
                        <div className="sec-head3">
                           <h3 className="col-orange1 mont-font"> Live TV <img className="custom-icon1" src="/assets/images/tv-icon2.png" /> </h3>
                        </div>
                     </div>
                     <div className="player-box m-b-30">
                        <video controls="">
                           <source src="/assets/images/dummy-video.mp4" type="video/mp4" />
                        </video>
                        <h3 className="col-black montserrat-font"> A Poor Fruit Seller D Billionaire's Son Fell In Love With her At First Sight-Nigeria </h3>
                        <p className="col-black montserrat-font"> 395,744 People are watching </p>
                     </div>
                     <div className="block-element m-b-30">
                        <div className="comment-form">
                           <div className="comment-profile">
                              <img src="/assets/images/avatar-1.png" />
                              <span className="col-black4 montserrat-font"> Theodore Ngomba </span>
                           </div>
                           <form>
                              <input type="text" placeholder="Say Something" name="" />
                              <button> <img src="/assets/images/send-icon.png" /> </button>
                           </form>
                        </div>
                     </div>
                     <div className="block-element">
                        <div className="all-comments">
                           <div className="comment-box">
                              <div className="comment-image">
                                 <span className="bg-green1"> S </span>
                              </div>
                              <div className="comment-desc">
                                 <h4 className="col-black montserrat-font"> Smith </h4>
                                 <p className="col-black montserrat-font"> He criticized the government and people of Guyana and when </p>
                                 <div>
                                    <button className="comment-btn"> <i className="fa fa-thumbs-up"> </i> 6 </button>
                                    <button className="comment-btn"> <i className="fa fa-thumbs-down"> </i> 0 </button>
                                    <button className="comment-btn"> Reply </button>
                                 </div>
                              </div>
                           </div>
                           <div className="comment-box">
                              <div className="comment-image">
                                 <span className="bg-blue1"> A </span>
                              </div>
                              <div className="comment-desc">
                                 <h4 className="col-black montserrat-font"> Augin </h4>
                                 <p className="col-black montserrat-font"> a pure historian of political past and present 🎁 Mr naciement </p>
                                 <div>
                                    <button className="comment-btn"> <i className="fa fa-thumbs-up"> </i> 6 </button>
                                    <button className="comment-btn"> <i className="fa fa-thumbs-down"> </i> 0 </button>
                                    <button className="comment-btn"> Reply </button>
                                 </div>
                              </div>
                           </div>
                           <div className="comment-box">
                              <div className="comment-image">
                                 <span className="bg-green1"> S </span>
                              </div>
                              <div className="comment-desc">
                                 <h4 className="col-black montserrat-font"> Smith</h4>
                                 <p className="col-black montserrat-font"> He criticized the government and people of Guyana and when </p>
                                 <div>
                                    <button className="comment-btn"> <i className="fa fa-thumbs-up"> </i> 6 </button>
                                    <button className="comment-btn"> <i className="fa fa-thumbs-down"> </i> 0 </button>
                                    <button className="comment-btn"> Reply </button>
                                 </div>
                              </div>
                           </div>
                           <div className="comment-box">
                              <div className="comment-image">
                                 <span className="bg-blue1"> A </span>
                              </div>
                              <div className="comment-desc">
                                 <h4 className="col-black montserrat-font"> Agile </h4>
                                 <p className="col-black montserrat-font"> a pure historian of political past and present 🎁 Mr naciement </p>
                                 <div>
                                    <button className="comment-btn"> <i className="fa fa-thumbs-up"> </i> 6 </button>
                                    <button className="comment-btn"> <i className="fa fa-thumbs-down"> </i> 0 </button>
                                    <button className="comment-btn"> Reply </button>
                                 </div>
                                 <div>

                              <div className="panel-group" id="accordion">
                               <div className="panel panel-default">
                                 <div className="panel-heading m-b-10" role="tab" id="headingTwo">
                                   <h4 className="panel-title">
                                   <a className="collapsed reply-btn" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> <i className="fa fa-caret-down"> </i>
                                     View Reply
                                   </a>
                                 </h4>
                                 </div>
                                 <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                   <div className="panel-body">
                                     <div className="all-comments">
                                                      <div className="comment-box">
                                                         <div className="comment-image">
                                                            <span className="bg-green1"> S </span>
                                                         </div>
                                                         <div className="comment-desc">
                                                            <h4 className="col-black montserrat-font"> Smith </h4>
                                                            <p className="col-black montserrat-font"> He criticized the government and people of Guyana and when </p>
                                                            <div>
                                                               <button className="comment-btn"> <i className="fa fa-thumbs-up"> </i> 6 </button>
                                                               <button className="comment-btn"> <i className="fa fa-thumbs-down"> </i> 0 </button>
                                                               <button className="comment-btn"> Reply </button>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                   </div>
                                 </div>
                               </div>
                            </div>



                                   
                                 </div>
                              </div>
                           </div>
                           <div className="block-element text-center m-t-30">
                              <button className="submit-btn5"> Load More </button>  
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                     <div className="block-element">
                        <div className="block-element m-b-15 m-t-15">
                           <h4 className="sub-heading3 col-black montserrat-font"> Up Next </h4>
                        </div>
                        <div className="block-element">
                           <div className="show-box2">
                              <div className="show-image2">
                                 <img src="/assets/images/show-6.png" />
                              </div>
                              <div className="show-desc2">
                                 <h3 className="col-black montserrat-font"> Why East African Shea Butter Is So Expensive | So Expensive | </h3>
                                 <p className="col-black4 montserrat-font"> <i className="fa fa-clock"> </i> 9:00 PM </p>
                              </div>
                           </div>
                           <div className="show-box2">
                              <div className="show-image2">
                                 <img src="/assets/images/show-5.png" />
                              </div>
                              <div className="show-desc2">
                                 <h3 className="col-black montserrat-font"> Why East African Shea Butter Is So Expensive | So Expensive | </h3>
                                 <p className="col-black4 montserrat-font"> <i className="fa fa-clock"> </i> 10:00 PM </p>
                              </div>
                           </div>
                           <div className="show-box2">
                              <div className="show-image2">
                                 <img src="/assets/images/show-4.png" />
                              </div>
                              <div className="show-desc2">
                                 <h3 className="col-black montserrat-font"> Why East African Shea Butter Is So Expensive | So Expensive | </h3>
                                 <p className="col-black4 montserrat-font"> <i className="fa fa-clock"> </i> 10:30 PM </p>
                              </div>
                           </div>
                        </div>
                        <div className="block-element">
                           <h4 className="sub-heading4 col-black montserrat-font">  Do you want to see upcoming shows?</h4>
                        </div>
                        <div className="block-element">
                           <div className="content-block4">
                              <div className="search-form2">
                                 <form>
                                    <h3 className="col-black4 montserrat-font text-center m-b-15"> Select date and time </h3>
                                    <div className="block-element2 text-center">
                                       <select className="field-style6">
                                          <option> 1 </option>
                                          <option> 2 </option>
                                          <option> 3 </option>
                                       </select>
                                       <select className="field-style6">
                                          <option> 7:00 </option>
                                          <option> 7:00 </option>
                                          <option> 7:00 </option>
                                       </select>
                                       <select className="field-style6">
                                          <option> PM </option>
                                          <option> PM </option>
                                          <option> PM </option>
                                       </select>
                                    </div>
                                    <div className="block-element2 text-center m-t-15">
                                       <input type="submit" value="See Result" className="submit-btn5" name="" />
                                    </div>
                                 </form>
                              </div>
                           </div>
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

export default Tv_live;