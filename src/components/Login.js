import React from 'react';
import  { Component } from "react";
import Slider from 'react-slick';
// import Link from '../components/Link';
import { Outlet, Link } from "react-router-dom";
import {useState ,useEffect, useRef} from 'react';
import axios from 'axios';
import {Route, useNavigate} from 'react-router-dom';


  
 
function Login(){

      
     const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
//    useEffect(()=>{
// 
//       if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
//         
//       window.location.href = "/";  
//    } 
//    
//     },[]);

    const loginAction = (e) => {

        setValidationErrors({})
        e.preventDefault();
        setIsSubmitting(true)
        let payload = {
            email:email,
            password:password,
        }
        axios.post('https://code.rashidashraf.com/54connect/api/login', payload)
        .then((r) => {
            setIsSubmitting(false)

              localStorage.setItem('token', r.data.tokan);
              localStorage.setItem('currentUser', JSON.stringify(r.data.user));

             navigate('/');


               //window.location.href = "/";
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
         
       <section className="login-screen">
         <div className="container">
            <div className="login-wrapper">
               <div className="login-logo">
               <a href="index.html">  <img src="/assets/images/home-logo.png" /> </a>
               </div>
               <div className="login-content">
                  <div className="block-element2">
                     <div className="login-actions">
                        
                        <Link to="/login" className="active btn-link">Login</Link>  
                        <Link to="/sign-up" className="  btn-link"> Sign Up </Link>  
                     </div>
                     <div className="login-info m-b-20">
                        <p className="col-white montserrat-font"> Get login to Enjoy more features  </p>
                     </div>
                     <div className="login-form">
                        <form onSubmit={(e)=>{loginAction(e)}}>
                        {Object.keys(validationErrors).length != 0 &&
                                   <h6 className='text-center '><span className='text-danger'>Incorrect Email or Password</span></h6>
                                }
                           <div className="form-field7">
                              <label className="col-white"> Email/Phone Number  </label>   
                              <div className="related">
                                 <input
                                       type="text"
                                       className="field-style7"
                                       placeholder="Type Email/Phone Number"
                                       name="email"
                                       value={email}
                                       onChange={(e)=>{setEmail(e.target.value)}}
                                      />

                              </div>
                           </div>
                           <div className="form-field7 m-b-30">
                              <label className="col-white"> Password  </label>   
                              <div className="related">
                                 <input 
                                    type="password" 
                                    className="field-style7 password-field1" 
                                    placeholder="***********" 
                                    name="password"
                                    value={password}
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                 />
                                 <button type="button" className="pass-btn1"> <img className="eye-close" src="/assets/images/eye-close-icon.png" /> <img className="eye-open" src="/assets/images/eye-open-icon.png" /> </button>
                                 <div className="block-element2 text-right">
                                    <a href="" className="forgot-pass-btn"> Forget Password? </a>
                                 </div>
                              </div>
                           </div>
                           <div className="block-element2 text-center">
                               

                              <button 
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="submit-btn6">Login</button>
                                     
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
                              <span className="col-white montserrat-font"> Didn’t have an account? <Link to="/sign-up"> Sign Up </Link>   </span>
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

export default Login;