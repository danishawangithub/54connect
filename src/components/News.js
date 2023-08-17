import React, { Component } from "react";
import Slider from 'react-slick';
import Link from '../components/Link';
import {useState ,useEffect, useRef} from 'react';

 
function News({news,newsall,items}){

	 
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

    
      const poster = news.image;
      if (poster) {
         const img = poster.replace('54connect', '');
   
      } 
              
   const renderednews = newsall.map((news) => {
                
               const poster = news.image;
               const img = poster.replace('54connect', '');
             
               return(
                        <div key={news.id} className="col-md-4 col-lg-4 col-sm-6 col-6">
                           <div className="news-grid-box"> <img src={img}/>
                            <h4 className="col-black1"> {news.title}  </h4> </div>
                        </div>
                     );

      }); 

   const [expandedIndex, setExpanded] = useState(-1);

     const handleClick_faq = (nextIndex) => {
      
          
      if (expandedIndex === nextIndex){

            setExpanded(-1);

      }else{

            setExpanded(nextIndex);
      }
      
   }


       const renderedItems = items.map((item, index) => {

      const isExpanded = index === expandedIndex;

      const icon = <span>{isExpanded ? <i class="fa fa-caret-down"></i> : <i class="fa fa-caret-down"></i> }</span>;

      return (


         <div className="set" key={item.id}>
            <a onClick ={ () => handleClick_faq(index)}><i class="fa fa-caret-down"></i> {item.label}   
            </a>

            {isExpanded && <div className="content"> <ol className="list-5">
                  <li>
                     <Link to=""><i class="fa fa-caret-down"></i>{item.content1}</Link>
                   </li>
                  <li> 
                  <Link to=""><i class="fa fa-caret-down"></i>{item.content2}</Link> 
                  </li>
               </ol>  
               </div>}

             
         </div>

             

         );
      });



   return(
      <>
         
   <section className="news-bar">
         <div className="container">
            <div className="block-element">
               <div className="search-form">
                  <form style={{height:'36.5px'}}>
                     <input type="text" placeholder="Search News Updates here" className="field-style3" name="" />>
                     <button className="submit-btn3"> <i className="fa fa-search"> </i> </button>
                  </form>
               </div>
            </div>
            <div className="block-element">
               <div className="live-news-bar">
                  <div className="news-bar-head"> Live: Corona In USA </div>
                  <div className="news-bar-ticker">
                     <div> Total Cases <span> 3,000,000 </span> </div>
                     <div> Today's Cases <span> 3,000,000 </span> </div>
                     <div> Total Deaths <span> 3,000,000 </span> </div>
                     <div> Total Recovered <span> 3,000,000 </span> </div>
                     <div> Active Cases <span> 3,000,000 </span> </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
     
      <section className="pad-top-60 pad-bot-40">
         <div className="container">
            <div className="row">
               <div className="col-md-9 col-lg-9 col-sm-12 col-12 order-lg-2 order-md-2 order-sm-2 order-2">
                   <div className="block-element m-b-20">
                        <h4 className="sub-heading1 no-margin col-black1 montserrat-font"> Category: {news.category} </h4>
                     </div>

                  <div className="block-element m-b-20">
                     <div className="news-block" key={news.id}>

                        <img src={poster ? poster.replace('54connect', '') : ''} />
                          
                        <h3 className="col-black1">{news.title}</h3>
                     </div>
                  </div>
                  <div className="block-element">
                     <div className="row">
                    
                          
                     </div>
                       
                  </div>
                  <div className="block-element text-center m-b-40">
                     <a href="" className="load-more-btn"> Load More </a>
                  </div>
               </div>
               <div className="col-md-3 col-lg-3 col-sm-12 col-12 order-lg-3 order-md-3 order-sm-1 order-1">
                  <div className="block-element m-b-20">
                     <div className="block-element m-b-20">
                        <h4 className="sub-heading1 no-margin col-black1 montserrat-font"> Categories </h4>
                     </div>
                     <div className="news-categories">
                      
                     {renderedItems}
                      
                     </div>
                   
                  </div>
               </div>
            </div>
         </div>
      </section>
     
      </>

  );
}

export default News;