import React, { Component} from "react";
import Slider from 'react-slick';
import Link from '../components/Link';
import {useState ,useEffect, useRef} from 'react';

 
function ContactUs(){
 
    const [data, setData] = useState({});

	   const handleChange = (event) =>{

         event.preventDefault();
              setData({
                  ...data,
                  [event.target.name]: event.target.value,
               });

          
      }

      const handleSubmit = (event) => {

         event.preventDefault(); 
         console.log(data);


         //  let res = await fetch("http://127.0.0.1:8000/api/contect-us", {
         //    method: "POST",
         //     headers: {
         //        "Content-Type" : "application/json",
         //        "accept" : "application/json"},
         //    body: JSON.stringify({
         //      name: data.name,
         //      email: data.email,
         //      phone: data.phone,
         //      message: data.message,
         //    }),
         //  }).then(async response => {
         //    
         //    if (response.status == 200) {
         // 
         //     toast.success("data insert successfuly");
         //     event.target.reset(); 
         //   
         //   }else{
         //        
         //         toast.error("some thing wrong"); 
         //   }

      }


  return (
      
      <>
         
         <section className="page-banner1 contact-bg">
         <div className="container">
            <div className="page-banner-text">
               <h4 className="col-white mont-font"> 54CONNECTS </h4>
               <p className="col-white montserrat-font"> 54 Connects is the top destination for high-end lifestyle, travel, and 
                  entertainment globally. Stream TV shows, documentaries, 
                  and other programming. Online, at home or on the 
                  road, you may watch, learn, laugh, interact, 
                  and explore.  
               </p>
            </div>
         </div>
      </section>
      
      <section className="pad-top-60 pad-bot-80">
         <div className="container">
            <div className="row center-row1">
               <div className="col-md-6 col-lg-6 col-sm-12 col-12 order-lg-2 order-md-2 order-1 oder-sm-1">
                  <div className="contact-image">
                     <img src="/assets/images/contact-us.png" /> 
                  </div>
               </div>
               <div className="col-md-6 col-lg-6 col-sm-12 col-12 order-lg-1 order-md-1 order-2 order-sm-2">
                  <div className="block-element m-b-30">
                     <div className="sec-head1">
                        <h3 className="col-orange1 mont-font"> Contact Us </h3>
                     </div>
                  </div>
                  <div className="block-element">
                     <div className="form-1">
                        <form onSubmit={handleSubmit}>
                           <div className="form-field1">
                              <input type="text" onChange={handleChange} placeholder="Name" className="field-style1" name="name" />   
                           </div>
                           <div className="form-field1">
                              <input type="email" onChange={handleChange} placeholder="Email" className="field-style1" name="email" />   
                           </div>
                           <div className="form-field1">
                              <textarea className="field-style1" onChange={handleChange} placeholder="Message" name="message"></textarea> 
                           </div>
                           <div className="form-field1">
                              <input type="submit" value="Submit" className="submit-btn2" name="submit" />  
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
     
      </>

  );
}

export default ContactUs;