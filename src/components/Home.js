import React, {Fragment, Component } from "react";
import Slider from 'react-slick';
import Link from '../components/Link';
import {useState ,useEffect, useRef} from 'react';

 
function Home({items,setslider,faq,secondSlider}){


   const settings = {
      
      className: 'block-element banner-slider arrows-1',
       
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

    const settings2 = {
      
      className: 'serving-slider arrows-3',
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
           // You can unslick at a given breakpoint now by adding:
           // settings: "unslick"
           // instead of a settings object
         ]
        
         
    }   

     const settings3 = {
      
      className: 'introduction-slider arrows-2',
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
           // You can unslick at a given breakpoint now by adding:
           // settings: "unslick"
           // instead of a settings object
         ]
        
         
    }

    const [expandedIndex, setExpanded] = useState(-1);

     const handleClick_faq = (nextIndex) => {
      
          
      if (expandedIndex === nextIndex){

            setExpanded(-1);

      }else{

            setExpanded(nextIndex);
      }
      
   }


    const renderedItems = faq.map((item, index) => {
 
   const isExpanded = index === expandedIndex;

   const icon = <span>{isExpanded ? <i className="fa fa-caret-up"></i> :   <i className="fa fa-caret-down"></i> }</span>;
     
      return (

              
            <div className="set" key={item.id}>
                     <a onClick ={ () => handleClick_faq(index)}> {item.title}  {icon}
                     </a>
                     
                {isExpanded && <div className="content"> <p className="col-black4"> {item.content}</p> </div>}
                           
                 
             </div>

 
         );
   });
 
  
     const renderedSliders = setslider.map((slider) => {
         
        return(
            <div className="banner-slide-view banner-bg1"  key={slider.slider_post_id}  >
               <div className="container">
                  <div className="banner-text">
                    <h3 className="col-orange1 mont-font">
                      <div className="load-icon center">
                      <span></span>
                      <span></span>
                      <span></span>
                      </div> &nbsp;
                      {slider.slider_title} </h3> </div>
                  </div>
                  <div className="banner-arrow">
                     <a href="#serving-sec" className="arrow-btn scroll-link"> <i className="fa fa-angle-down"> </i> </a> 
                  </div>
               </div>
            
            );

      });  
// 
//             console.log('-----');
//             console.log(slidersecond);
       const renderedseconSliders = secondSlider.map((slidersecond) => {
               
        return(

             <div className="introduction-content" key={slidersecond.id}>
                     <h3 className="col-orange1 mont-font">  {slidersecond.title} </h3>
                     <p className="col-black3 montserrat-font"> {slidersecond.content}  </p>
                  </div>

                    
            );

      });

     

    



  return (
      
      <>
    <Fragment>
        <section className="">
          <Slider {...settings}>
          
               
            {renderedSliders}
             
         </Slider>
             
      </section>
      
      <section id="serving-sec" className="pad-top-60">
         <div className="container">
            <div className="block-element m-b-30">
               <div className="contribute-content">
                  <h2 className="col-orange1 mont-font text-center"> We Are Serving Africa With </h2>
               </div>
            </div>
            <div className="block-element">
              <Slider {...settings2}>
                    

                    <div class="serving-slide serving-bg1">
                    <div>
                    <h3 class="col-orange1 mont-font"> Radio54  </h3>
                    <p> Get to enjoy the rhythms of the African continent, blended
                    with contemporary conversations on developments in and outside Africa.  </p>
                    <a href=""> Visit Now </a>
                    </div>
                    </div>
                    <div class="serving-slide serving-bg2">
                    <div>
                    <h3 class="col-orange1 mont-font"> TV54  </h3>
                    <p> TV54   offers the best of television content from drama to
                    documentaries, series, comedies, and lots more.
                    </p>
                    <a href=""> Visit Now </a>
                    </div>
                    </div>
                    <div class="serving-slide serving-bg3">
                    <div>
                    <h3 class="col-orange1 mont-font"> News54  </h3>
                    <p> This is a platform that keeps updated with happenings within
                    and outside the African continent  </p>
                    <a href=""> Visit Now </a>
                    </div>
                    </div>
                   
               </Slider>
            </div>
         </div>
      </section>
      
      <section className="about-sec">
         <div className="container">
            <div className="block-element m-b-30">
               <div className="contribute-content">
                  <h2 className="col-black mont-font text-center"> Who We Are? </h2>
               </div>
            </div>
            <div className="block-element">
                 <Slider {...settings3}>

                 {renderedseconSliders}

                 
                 
              </Slider>
            </div>
         </div>
      </section>
       
      <section>
         <div className="container">
            <div className="block-element m-b-30">
               <div className="sec-head4">
                  <h3 className="col-orange1 mont-font"> FAQS </h3>
               </div>
            </div>
            <div className="block-element">
               <div className="faqs-accordion">
                   {renderedItems}
                   
               </div>
            </div>
         </div>
      </section>
     
      <section className="pad-top-60 pad-bot-80">
         <div className="container">
            <div className="row center-row1">
               <div className="col-md-6 col-lg-6 col-sm-12 col-12 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="custom-image1">
                     <img src="/assets/images/app-mockup.jpg" />   
                  </div>
               </div>
               <div className="col-md-6 col-lg-6 col-sm-12 col-12 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="app-text">
                     <h3 className="col-black3 mont-font"> Download App </h3>
                     <p className="montserrat-font col-black3"> Mining accidents are common in China’s dangerous and poorly regulated sector.Please visit the 54ConnectsNews website to get valuable content regarding real estate suggestions and further follow-ups </p>
                     <a href="" className="store-btn2"> <img src="/assets/images/google-store.png" /> </a> <a href="" className="store-btn2"> <img src="/assets/images/apple-store.png" /> </a>
                  </div>
               </div>
            </div>
         </div>
      </section>  
     
     </Fragment>
      </>

  );
}

export default Home;