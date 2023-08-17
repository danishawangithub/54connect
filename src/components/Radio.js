import React, { Component } from "react";
import Slider from 'react-slick';
import Link from '../components/Link';
import {useState ,useEffect, useRef} from 'react';
import ReactAudioPlayer from 'react-audio-player';

  
function Radio(){


   const url = "https://code.rashidashraf.com/54connect/Jutt.mp3";

   const audioRef = useRef(new Audio(url));


//       const get_audio = async ()=>{
//             
//          await axios({
//             method: 'get',
//             headers: { 'Content-Type': 'application/json'},
//             url: 'https://code.rashidashraf.com/54connect/api/popular_movies', 
//             
//           }).then(function (data) {
//  
//                setmovie(data.data.response );
//           });  
// 
//  
//         }; 


  
 
   const settings = {
      
      className: 'stream-slider arrows-1',
       
       dots: true,
         infinite: true,
         speed: 300,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         focusOnSelect: false,
         pauseOnHover:false,
         autoplaySpeed: 2000,
         responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
             }
           },
         
           {
             breakpoint: 768,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
             }
           },
         
           {
             breakpoint: 700,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
             }
           },
         
           {
             breakpoint: 600,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
           },
           {
             breakpoint: 480,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
          
         ]
    } 

   

  return (
      
      <>
         
          <section class="page-banner2 radio-bg">
         <div class="container">
            <div class="row center-row1">

            

            <div class="col-md-6 col-lg-6 col-sm-12 col-12 order-lg-2 order-md-2 order-1 order-sm-1">
            <div class="custom-image3">
                     {/* <img src="/assets/images/player-2.png" />   */}

                  <ReactAudioPlayer src={url} autoPlay controls />
            </div>   
            </div> 

            <div class="col-md-6 col-lg-6 col-sm-12 col-12 order-lg-1 order-md-1 order-2 order-sm-2">
            <div class="page-banner-text page-banner-text2">
               <h4 class="col-white mont-font"> Radio54 </h4>
               <p class="col-white montserrat-font"> We Provide best radio shows live streaming. We havebest radio hosts and operating system to keep you updated any time.
               </p>
            </div>
            </div>  

            </div>

            
         </div>
      </section>
      
      <section class="pad-top-60 pad-bot-60">
         <div class="container">
            <div class="block-element m-b-30">
               <div class="sec-head2">
                  <h5 class="col-orange1 montserrat-font"> LIVE STREAMING </h5>
                  <h3 class="mont-font col-black2">  SHOWS </h3>
               </div>
            </div>
            <div class="block-element">
               <div class="row">
                  <div class="col-md-4 col-lg-4 col-sm-4 col-12">
                     <div class="show-box">
                        <img src="/assets/images/show-1.png" />
                        <h3 class="montserrat-font col-black"> Name </h3>
                     </div>
                  </div>
                  <div class="col-md-4 col-lg-4 col-sm-4 col-12">
                     <div class="show-box">
                        <img src="/assets/images/show-2.png" />
                        <h3 class="montserrat-font col-black"> Name </h3>
                     </div>
                  </div>
                  <div class="col-md-4 col-lg-4 col-sm-4 col-12">
                     <div class="show-box">
                        <img src="/assets/images/show-3.png" />
                        <h3 class="montserrat-font col-black"> Name </h3>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      <section class="pad-top-20 pad-bot-80">
         <div class="container">
            <div class="block-element pad-top-20 m-b-30">
               <div class="sec-head2">
                  <h3 class="mont-font col-orange1">  SCHEDULE </h3>
               </div>
            </div>
            <div class="block-element">
            <div class="schedule-table montserrat-font">

            <table>
               <thead>
                  <th class="off-box">  </th>
                  <th> MONDAY </th>
                  <th> TUESDAY </th>
                  <th> WEDNESDAY </th>
                  <th> THURSDAY </th>
                  <th> FRIDAY </th>
                  <th> SATUDAY </th>
                  <th> SUNDAY </th>
               </thead>
               <tbody>
                  <tr>
                     <th>  8:00 AM <br/>   9:00AM </th>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                  </tr>
                   <tr>
                     <th>  9:00 AM <br/>   10:00AM </th>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                  </tr>
                   <tr>
                     <th>  10:00 AM <br/>   11:00AM </th>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                  </tr>
                   <tr>
                     <th>  11:00 AM <br/>   12:00PM </th>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                  </tr>
                   <tr>
                     <th> 12:00 PM <br/>  01:00PM </th>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                  </tr>
                   <tr>
                     <th>  01:00 PM <br/>   02:00PM </th>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                  </tr>
                   <tr>
                     <th>  02:00 PM  <br/>  03:00PM </th>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                  </tr>
                   <tr>
                     <th>  03:00 PM <br/>   04:00PM </th>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                  </tr>
                   <tr>
                     <th> 04:00 PM <br/>  05:00PM </th>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                     <td>  </td>
                  </tr>
               </tbody>
            </table>   

            </div>
            </div>
         </div>
      </section>
      </>

  );
}

export default Radio;