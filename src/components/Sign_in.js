import React, { Component } from "react";
import Slider from 'react-slick';
import {useState ,useEffect, useRef} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import Link from '../components/Link';
import { Outlet, Link } from "react-router-dom";
 
 
function Sign_in(){
   
   const [phone_number, setphone_number] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [validationSuccess, setValidationSuccess] = useState({});
    const [Btnclass, setBtnclass] = useState('d-none');
    const [BtnNext, setBtnNext] = useState('d-none');
 
   
   const sendotp_again = (e) => {
      setValidationSuccess({});
        setValidationErrors({})
        e.preventDefault();
        setIsSubmitting(true)
        let payload = {
            phone_number:phone_number,
         
        }
        axios.post('https://code.rashidashraf.com/54connect/api/sendotp_again', payload)
        .then((r) => {
            setIsSubmitting(false)
            
               console.log(r);
               setValidationSuccess(r.data.message);
             localStorage.setItem('otp', r.data.otp);

             const locationStorage = localStorage.getItem('otp');

             setBtnclass('text-white');
              
               setBtnNext('text-white submit-btn1 ff');
            
        })
        .catch((e) => { 
            setIsSubmitting(false);
               
               setBtnclass('text-white');
              
               setBtnNext('text-white submit-btn1 ff');

               if (e.response != undefined) {
                  setValidationSuccess('');
                  if (e.response.data.errors != undefined) {
                   setValidationErrors(e.response.data.errors);
                   }
                if (e.response.data.error != undefined) {
                   setValidationErrors(e.response.data.error);
                  }
 
             }
          
             
        });
    };


     const sendotp = (e) => {

        setValidationErrors({})
        e.preventDefault();
        setIsSubmitting(true)
        let payload = {
            phone_number:phone_number,
         
        }
        axios.post('https://code.rashidashraf.com/54connect/api/sendotp', payload)
        .then((r) => {
            setIsSubmitting(false);

              setValidationSuccess(r.data.message);

             localStorage.setItem('otp', r.data.otp);

             const locationStorage = localStorage.getItem('otp');
      
               setBtnclass('text-white');
              
               setBtnNext('text-white submit-btn1 ff');
            
 

         // setTimeout(function() { 
         //  window.location.href = "/signUp"
         // }, 3000);
                 

                
        }).catch((e) => {


            setBtnclass('text-white');
            setBtnNext('text-white submit-btn1 ff');
            setIsSubmitting(false);
              
                 if (e.response != undefined) {
                  setValidationSuccess('');
                  if (e.response.data.errors != undefined) {
                   setValidationErrors(e.response.data.errors);
                   }
                if (e.response.data.error != undefined) {
                   setValidationErrors(e.response.data.error);
                  }
 
             }
             
        });
    };
   
  return (
      
      <>
         <section className="login-screen">
         <div className="container">
            <div className="login-wrapper">
               <div className="login-logo">
                <a href="index.html">  <img src="/assets/images/home-logo.png" /> </a>
               </div>
               <div className="login-content">
                  <div className="block-element2">
                     <div className="login-actions">
                        <Link to="/login">Login</Link>
                        <Link to="/sign-up">Sign Up</Link>
                            
                     </div>
                     <div className="login-info m-b-40">
                        <p className="col-white montserrat-font"> Join our community to enjoy all the features  </p>
                     </div>
                     <div className="login-form">
                        <form onSubmit={(e)=>{sendotp(e)}}> 
                         {Object.keys(validationErrors).length != 0 &&
                                   <h6 className='text-center '><span className='text-danger'>{validationErrors}</span></h6>
                                }
                           {Object.keys(validationSuccess).length != 0 &&
                                   <h6 className='text-center '><span className='text-success'>{validationSuccess}</span></h6>
                                } 

                            

                           <div className="form-field7 m-b-50">
                              <label className="col-white"> Email/Phone Number  </label>   
                              <div className="related">
                                 <input 
                                 type="text" 
                                 className="field-style7" 
                                 placeholder="Type Email/Phone Number with your country code" 
                                 name="phone_number" 
                                 value={phone_number}
                                 onChange={(e)=>{setphone_number(e.target.value)}}
                                 />
                                
                                 <span class="col-white montserrat-font"> <a onClick={(e)=>{sendotp_again(e)}} className={Btnclass}> Rsend Code.. </a> </span> 
                              </div>
                           </div>

                          

                          
                           <div className="block-element2 text-center">
                              <input type="submit" value="Send OTP" className="submit-btn6" name="" />  
                              <Link to="/signUp" className={BtnNext}  >Next  </Link>
                           </div>

                           
                        </form>
                        
                        <div className="block-element2">
                           <div className="or-content text-center m-t-25 m-b-25">
                              <h5 className="col-white no-margin montserrat-font"> OR </h5>
                           </div>
                        </div>
                        <div className="block-element2 m-b-30">
                           <div className="social-logins">
                              <a href=""> <img src="/assets/images/google-icon.png" /> </a>
                              <a href=""> <img src="/assets/images/fb-icon.png" /> </a>
                              <a href=""> <img src="/assets/images/apple-icon.png" /> </a>   
                           </div>
                        </div>
                        <div className="block-element2">
                           <div className="already-login text-center">
                              <span className="col-white montserrat-font"> Already have an account? <a href="login.html"> Login </a> </span>
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

export default Sign_in;