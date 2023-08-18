import React, { Component } from "react";
import Slider from 'react-slick';
// import Link from '../components/Link';
import { Outlet, Link } from "react-router-dom";
import {useState ,useEffect, useRef} from 'react';

 
function Tv({tvs,latests,populars}){

	 
 	
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


        const renderedtvs= tvs.map((tv) =>{ 
             const poster = tv.tv_logo;
               const img = poster.replace('54connect', '');
           return(
              <div key={tv.tv_id} className="stream-box">
                  <div className="stream-image"> 
                     <img src={img} />
                   </div>
                  <div className="stream-overlay">
                      <img src="/assets/images/series-1-hover.png"/> 
                  </div>
              </div>
    
             )
      });
        
        const renderedlatests= latests.map((latest) =>{ 
            
                 const poster = latest.show_poster;
               const img = poster.replace('54connect', '');
           return(

              <div key={latest.show_id} className="col-md-4 col-lg-4 col-sm-4 col-12">
                <div className="show-box"> <img src={img}/>
                  <h6 className="montserrat-font col-black4"> <i className="fa fa-clock"> </i> Mon | 10:30 </h6>
                  <h5 className="col-black4 montserrat-font"> {latest.show_title} </h5>
                  <p className="col-black4 montserrat-font"> {latest.show_info.length > 200 ? `${latest.show_info.substring(0, 200)}...` : latest.show_info}  </p>
                </div>
              </div> 
         );


      });



        const renderedpopular = populars.map((popular) =>{ 
                
                 const poster = popular.show_poster;
               const img = poster.replace('54connect', '');
            
           return(
           
 
               <div   >
                     <div key={popular.show_id} className="stream-slide-view "   style={{backgroundImage: `url(${img})`}} >
                    <div className="container">
                      <div className="tv-banner-text">
                        <h3 className="col-white montserrat-font"> <b> {popular.show_title} </b> </h3>
                        <p className="col-white montserrat-font"> {popular.show_info.length > 200 ? `${popular.show_info.substring(0, 200)}...` : popular.show_info} </p> <a href="" className="custom-btn3 mont-font"> Watch Now </a> </div>
                    </div>
                  </div>
               </div>
               
             );

           


      });

   

  return (
      
      <>
         
    <section>
         <div className="block-element">
             <Slider {...settings}>
                  {renderedpopular}
            </Slider>
         </div>
      </section>
      
    

      <section class="pad-top-20">
         <div class="container">
            <div class="block-element m-t-10 m-b-20">
               <div class="sec-head3">
                  <h3 class="col-orange1 mont-font"> Now Streaming  </h3>
               </div>
            </div>
            <div class="block-element">
                 <div className="all-streams">
                   
                  {renderedtvs}
                   
               </div>
            </div>
         </div>
      </section>
    
      <section className="pad-bot-20 pad-top-20">
         <div className="container">
            <div className="block-element m-t-10 m-b-15">
               <div className="sec-head3">
                  <h3 className="col-orange1 mont-font"> Recomanded </h3>
               </div>
            </div>
            <div className="block-element">
               <div className="row">
                   {renderedlatests}
               </div>
            </div>
         </div>
      </section>
      
      <section className="pad-bot-60">
         <div className="container">
            <div className="block-element m-b-15">
               <div className="sec-head3">
                  <h3 className="col-orange1 mont-font"> Other Shows </h3>
               </div>
            </div>
            <div className="block-element">
               <div className="row">
                   {latests.map((latest)=>{
                     
                        const poster = latest.show_poster;
                        const img = poster.replace('54connect', '');

                     return(
                     <div key={latest.show_id} className="col-md-4 col-lg-4 col-sm-4 col-12">
                      <div className="show-box"> <img src={img}/>
                        <h6 className="montserrat-font col-black4"> <i className="fa fa-clock"> </i> Mon | 10:30 </h6>
                        <h5 className="col-black4 montserrat-font"> {latest.show_title} </h5>
                        <p className="col-black4 montserrat-font"> {latest.show_info.length > 200 ? `${latest.show_info.substring(0, 200)}...` : latest.show_info}  </p>
                      </div>
                     </div>
                  )
                  })}
                  
               </div>
            </div>
            <div className="block-element text-center m-t-20">
               <a href="" className="submit-btn5"> Load More </a>  
            </div>
         </div>
      </section>
    
      <section className="pad-bot-60">
         <div className="container">
            <div className="block-element content-block3">
               <div className="row">
                  <div className="col-md-8 col-lg-9 col-sm-12 col-12">
                     <div className="shows-search-wrapper block-element">
                        <div className="shows-search-title block-element m-b-50">
                           <h3 className="col-black4 montserrat-font"> Search shows according to the <br/> Date & Time  </h3>
                        </div>
                        <div className="show-search-form block-element">
                           <form>
                              <div className="block-element2">
                                 <select className="field-style5">
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                 </select>
                                 <select className="field-style5">
                                    <option> 7:00 </option>
                                    <option> 7:00 </option>
                                    <option> 7:00 </option>
                                 </select>
                                 <select className="field-style5">
                                    <option> PM </option>
                                    <option> PM </option>
                                    <option> PM </option>
                                 </select>
                              </div>
                              <div className="block-element2 m-t-60">
                                 <input type="button" value="See Result" name="" className="submit-btn5" />
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 col-lg-3 col-sm-6 col-12">
                     <div className="show-box">
                        <img src="/assets/images/show-8.png" />
                        <h6 className="montserrat-font col-black4"> <i className="fa fa-clock"> </i>  Mon | 10:30 </h6>
                        <h5 className="col-black4 montserrat-font"> The Mix Fun from Africa </h5>
                        <p className="col-black4 montserrat-font">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum tortor non  </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
     
      </>

  );
}

export default Tv;