import React, { Component } from "react";
import Slider from 'react-slick';
import {useState ,useEffect, useRef} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Link from '../components/Link';

 
function SignUp(){
   
   const [Otp, setOtp] = useState("");
   const [password, setpassword] = useState("");
   const [confirm_password, setconfirm_password] = useState("");
   const [verifyOtp, setverifyOtp] = useState("");

   //   if(localStorage.getItem('otp') == null){
   //      
   //    window.location.href = "/";  
   // }else{
   //       setverifyOtp(localStorage.getItem('otp'));
   // } 


    useEffect(()=>{

            if(localStorage.getItem('otp') == null){
              
            window.location.href = "/login";  
         } 
   
    },[]);

 
   const [isSubmitting, setIsSubmitting] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [validationSuccess, setValidationSuccess] = useState({});

     const registerAction = (e) => {
      setValidationSuccess({});
        setValidationErrors({})
        e.preventDefault();
        setIsSubmitting(true)
        let payload = {
            otp:Otp,
            password:password,
            confirm_password:confirm_password,
            verifyOtp:localStorage.getItem('otp'),
        }

        axios.post('https://code.rashidashraf.com/54connect/api/register_user', payload)
        .then((r) => {
            setIsSubmitting(false)
            
               console.log(r);


                  setValidationSuccess(r.data.message);

               localStorage.setItem('otp', r.data.otp);

               setTimeout(function() { 
               window.location.href = "/login"
               }, 3000);

        })
        .catch((e) => {
            setIsSubmitting(false)
            if (e.response.data.errors != undefined) {
                setValidationErrors(e.response.data.errors);
            }
            if (e.response.data.error != undefined) {
                setValidationErrors(e.response.data.error);
            }
        });
    };
   
  return (
      
      <>
        <section class="login-screen">
         <div class="container">
            <div class="login-wrapper">
               <div class="login-logo">
                 <a href="index.html">  <img src="images/home-logo.png" /> </a>
               </div>
               <div class="login-content">
                  <div class="block-element2">
                     <div class="login-actions">
                         
                        <Link to="/login"> Login</Link>   
                        <a href="sign-up.html" class="active"> Sign Up </a>   
                     </div>

                     <div class="login-info m-b-40">
                        <p class="col-white montserrat-font"> Join our community to enjoy all the features  <Link to="/sign-up" className="btn btn-secondary btn-small dd">Back</Link></p>

                     </div>

                     <div class="login-form">
                        <form  onSubmit={(e)=>{registerAction(e)}}>

                         {Object.keys(validationErrors).length != 0 &&
                                   <h6 className='text-center '><span className='text-danger'>Please enter a valid OTP</span></h6>
                                }
                           {Object.keys(validationSuccess).length != 0 &&
                                   <h6 className='text-center '><span className='text-success'>Your are successfully Register please login</span></h6>
                                }

                           <div class="form-field7">
                              <label class="col-white"> OTP  </label>   
                              <div class="related">
                                 <input 
                                 type="text" 
                                 class="field-style7" 
                                 placeholder="Type 6 digit code" 
                                 name="otp" 
                                 value={Otp}
                                 onChange={(e)=>{setOtp(e.target.value)}}
                                 />
                              </div>
                           </div>
                             

                           <div class="form-field7">
                              <label class="col-white"> Password  </label>   
                              <div class="related">
                                 <input 
                                 type="password" 
                                 class="field-style7" 
                                 placeholder="******" 
                                 name="password" 
                                 value={password}
                                 onChange={(e)=>{setpassword(e.target.value)}}
                                 />
                              </div>
                           </div>
 

                           {/* <input  */}
                           {/* type="hidden"  */}
                           {/* class="field-style7"  */}
                           {/* name="verifyOtp"  */}
                           {/* value={localStorage.getItem('otp')} */}
                           {/* /> */}
   
                           <div class="form-field7 m-b-30">
                              <label class="col-white"> Confirm Password </label>   
                              <div class="related">
                                 <input 
                                 type="password" 
                                 class="field-style7" 
                                 placeholder="******" 
                                 name="password" 
                                 value={confirm_password}
                                 onChange={(e)=>{setconfirm_password(e.target.value)}}
                                  />
                              </div>
                           </div>
                          
                           <div class="block-element2 text-center">
                              <input type="submit" value="Sign Up" class="submit-btn6" name=""/>  
                           </div>
                        </form>
                      
                        <div class="block-element2 m-t-35">
                           <div class="social-logins">
                              <a href=""> <img src="images/google-icon.png" /> </a>
                              <a href=""> <img src="images/fb-icon.png" /> </a>
                              <a href=""> <img src="images/apple-icon.png" /> </a>   
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

export default SignUp;