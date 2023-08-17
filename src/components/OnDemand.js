import React, { Component } from "react";
import Slider from 'react-slick';
import Link from '../components/Link';
import {useState ,useEffect, useRef} from 'react';

 
function OnDemand({movies,comdymovies,dramavideos,southafricavideos,westafricavideos,eastafricavideos}){

	 
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
         
       
       
    } 

    const renderedmovies = movies.map((movie) => {


               // console.log('-----');
               // console.log(movie.video_url);
               const poster = movie.movie_poster;
               const img = poster.replace('54connect', '');
             
          return(
                  <div   >
                  <div className="stream-slide-view "  key={movie.movie_id} style={{backgroundImage: `url(${img})`}}>
                  
                     <div className="container" >
                        <div className="tv-banner-text">
                           <h6 className="montserrat-font m-b-20"> Action <span> CC </span> </h6>
                           <h3 className="col-white mont-font m-b-10"> {movie.movie_title} </h3>
                           <h5 className="col-white montserrat-font"> <span> <img src="/assets/images/hd-icon.png"/> 1080p </span> <span> {movie.movie_duration} </span> </h5>
                           <p className="col-white montserrat-font"> {movie.movie_info.length > 200 ? `${movie.movie_info.substring(0, 200)}...` : movie.movie_info} </p> <a data-toggle="modal" data-target="#modal-2" className="custom-btn3 mont-font mr-3 m-b-10"> Watch Trailer </a> <a href="" className="custom-btn4 mont-font"> Watch Full Video </a> </div>
                     </div>
                     
                  </div>
                  </div>
            
         )

      });


    const renderedcomedy_movies = comdymovies.map((cmdmovie) => {
 
               const poster = cmdmovie.movie_poster;
               const img = poster.replace('54connect', '');
             
          return(
                  
                  <div key={cmdmovie.movie_id} className="col-md-4 col-lg-4 col-sm-4 col-12">
                     <div className="show-box" data-toggle="modal" data-target="#modal-3"> 
                     <img src={img}/>
                        <h3 className="montserrat-font col-black"> {cmdmovie.movie_title} </h3> </div>
                  </div>
            
         )

      }); 

    const renderedimg = dramavideos.map((drama) => {
               
               console.log('-----');
              console.log(drama);

               const poster = drama.movie_poster;
               const img = poster.replace('54connect', '');
             
           
            return(
            <div key={drama.movie_id} className="col-md-4 col-lg-4 col-sm-4 col-12">
               <div className="show-box" data-toggle="modal" data-target="#modal-3"> 
               <img src={img}/>
               <h3 className="montserrat-font col-black"> {drama.movie_title} </h3> </div>
            </div>

            );
          
      });

       const renderedsouthafricavideos = southafricavideos.map((video) => {
 
               const poster = video.movie_poster;
               const img = poster.replace('54connect', '');
             
           
            return(

               <div className="container">
            <div className="block-element m-t-20 m-b-20">
               <div className="sec-head3">
                  <h3 className="col-orange2 mont-font"> South Africa </h3>
               </div>
            </div>
            <div className="block-element">
               <div className="row">
                 
                    <div key={video.movie_id} className="col-md-4 col-lg-4 col-sm-4 col-12">
               <div className="show-box" data-toggle="modal" data-target="#modal-3"> 
               <img src={img}/>
               <h3 className="montserrat-font col-black"> {video.movie_title} </h3> </div>
            </div>
                  
               </div>
            </div>
         </div>

               
            );
          
      });

     const renderedwestafricavideos = westafricavideos.map((video) => {
    
                  const poster = video.movie_poster;
                  const img = poster.replace('54connect', '');

              
               return(

                    <div className="container">
            <div className="block-element m-t-20 m-b-20">
               <div className="sec-head3">
                  <h3 className="col-orange2 mont-font"> West Africa </h3>
               </div>
            </div>
            <div className="block-element">
               <div className="row">
                  
                        <div key={video.movie_id} className="col-md-4 col-lg-4 col-sm-4 col-12">
                        <div className="show-box" data-toggle="modal" data-target="#modal-3"> 
                        <img src={img}/>
                        <h3 className="montserrat-font col-black"> {video.movie_title} </h3> </div>
                     </div>
               </div>
            </div>
         </div>
                    
               );
             
         });  

     const renderedeastafricavideos = eastafricavideos.map((video) => {
    
            const poster = video.movie_poster;
            const img = poster.replace('54connect', '');
         
 
        
          return(

             <div className="container">
            <div className="block-element m-t-20 m-b-20">
               <div className="sec-head3">
                  <h3 className="col-orange2 mont-font"> East Africa </h3>
               </div>
            </div>
            <div className="block-element">
               <div className="row">
                  
                   <div key={video.movie_id} className="col-md-4 col-lg-4 col-sm-4 col-12">
                  <div className="show-box" data-toggle="modal" data-target="#modal-3"> 
                  <img src={img}/>
                  <h3 className="montserrat-font col-black"> {video.movie_title} </h3> </div>
               </div>
                   
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
                
               {renderedmovies}
           </Slider>
         </div>
      </section>
     
      <section className="pad-bot-20">
         <div className="container">
            <div className="block-element m-t-20 m-b-20">
               <div className="sec-head3">
                  <h3 className="col-orange2 mont-font"> Drama </h3>
               </div>
            </div>
            <div className="block-element">
               <div className="row">
                     
                     {renderedimg}    
                 
               </div>
            </div>
         </div>
      </section>
      <section className="pad-bot-20">
         <div className="container">
            <div className="block-element m-t-20 m-b-20">
               <div className="sec-head3">
                  <h3 className="col-orange2 mont-font"> Comedy </h3>
               </div>
            </div>
            <div className="block-element">
               <div className="row">
                  
                  {renderedcomedy_movies}
                     
               </div>
                 
            </div>
         </div>
      </section>
      <section className="pad-bot-20">

         {renderedsouthafricavideos}
         
      </section>
      <section className="pad-bot-20">
         {renderedwestafricavideos}
      </section>
      <section className="pad-bot-80">
        
      </section>
     
      </>

  );
}

export default OnDemand;