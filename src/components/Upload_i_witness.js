import React, { Component } from "react";
import Slider from 'react-slick';
import Link from '../components/Link';
import {useState ,useEffect, useRef} from 'react';
import axios from 'axios';
 
 
function Upload_i_witness(){

 const [data, setData] = useState({});
 const [isSubmitting, setIsSubmitting] = useState(false);
const [validationErrors, setValidationErrors] = useState({});
const [validationSuccess, setValidationSuccess] = useState({});
 
      const handleChange = (event) =>{

        event.preventDefault();
          
         setData({
                  ...data,
                  [event.target.name]: event.target.value,
            });

      }
 
      const handleSubmit = (event) => {

         event.preventDefault();
          setValidationSuccess({});
          setValidationErrors({});
          setData({}); 
          
         axios.post('https://code.rashidashraf.com/54connect/api/upload_i_witness', data)
        .then((r) => {
            setIsSubmitting(false);
               setData({});
               console.log(r,'dani');
                setValidationSuccess('success');

             document.getElementById("dd").reset();

            
        }).catch((e) => { 
            
                  console.log(e,'danixcvxc');
                
                if (e.response.data.errors != undefined) {
                   console.log(e.response.data.errors); 
                setValidationErrors(e.response.data.errors);
            }
            // if (e.response.data.error != undefined) {
            //     setValidationErrors(e.response.data.error);
            // }
                
        });

      }
    
  return (
      
      <>
         
          <section class="pad-top-40 pad-bot-80">
         <div class="container">
            <div class="block-element m-b-20 text-center">
               <div class=" ">
                  <h2 class="col-orange2 mont-font"> Upload i-Witness </h2>
               </div>
            </div>
            <div class="block-element">
                  {Object.keys(validationErrors).length != 0 &&
                  <h6 className='text-center mb-2 notific'><span className='bg-danger text-white d-block fs-18 p-3 border-r-5'> Something want wrong</span></h6>
                  }
                  {Object.keys(validationSuccess).length != 0 &&
                  <h6 className='text-center mb-2 notific'><span className='bg-success text-white d-block fs-18 p-3 border-r-5'> I witness successfully submit</span></h6>
                  }
               <div class="content-block2">
                  <div class="block-element2">
                     <form onSubmit={handleSubmit} id="dd">

                         <div class="block-element2 m-b-40 uploader-2">
                           <div class="avatar-upload">
                              <div class="avatar-edit">
                                 <input 
                                 type='file'
                                  id="imageUpload"
                                   accept=".png, .jpg, .jpeg"
                                 onChange={handleChange} />
                                 <label for="imageUpload"></label>
                              </div>
                              <div class="avatar-preview">
                                 <div id="imagePreview" className="bg-a">
                                 </div>
                              </div>
                           </div>
                        </div>
                       
                        <div class="form-field4">
                           <label class="col-black"> Title </label>   
                           <div class="related">
                              <input
                               type="text" 
                               class="field-style4" 
                               placeholder="Enter Title" 
                               name="title" 
                               onChange={handleChange} />
                              <span class="info-tag2"> 0 / 200 </span>
                           </div>
                        </div>


                        <div class="form-field4">
                           <label class="col-black"> Date </label>   
                           <div class="related">
                              <input 
                              type="date" 
                              class="field-style4" 
                              placeholder="Enter Title" 
                              name="date" 
                             onChange={handleChange}
                              />
                           </div>
                        </div>

                         <div class="form-field4">
                           <label class="col-black"> Location </label>   
                           <div class="related">
                              <input 
                              type="text" 
                              class="field-style4" 
                              placeholder="Enter Location" 
                              name="location" 
                              onChange={handleChange}/>
                           </div>
                        </div>


                         <div class="form-field4">
                           <label class="col-black"> Description </label>   
                           <div class="related">
                              <textarea 
                              class="field-style4"
                               placeholder="Enter Description"
                              name="description" 
                              onChange={handleChange}
                               >
                                  
                               </textarea>
                              <span class="info-tag2"> 0 / 500 </span>
                           </div>
                        </div>
 
                        <div class="block-element2 text-center">
                           <input type="submit" value="Upload" class="submit-btn4" name="" />   
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </>

  );
}

export default Upload_i_witness;