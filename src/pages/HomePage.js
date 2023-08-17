import Home from '../components/Home';
import React, { Fragment , useState , useEffect} from 'react';
import axios, {isCancel, AxiosError} from 'axios';
function HomePage() {


 const[setslider , setsliderPic] = useState([]);
 const[secondSlider , setsecondSlider] = useState([]);
 const[faq , setFaq] = useState([]);


       const get_home_slider = async ()=>{
            
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/index',
            
          }).then(function (response) {
           
               setsliderPic(response.data.data.slider);
          });  

 
        }; 

         const get_second_slider = async ()=>{
            
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/whoare',
            
          }).then(function (data) {
                
               setsecondSlider(data.data.response);
          });  

 
        };  

        const get_faq = async ()=>{
            console.log('ok');
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/faqs',
            
          }).then(function (response) {
               
                setFaq(response.data.response);
          });  

 
        };
 
         useEffect(() => {
              get_home_slider();
               get_faq();          
               get_second_slider();          
       }, []);

 
       const items = [

         {
               id: '12we',
             label: 'Why we cover only africa?',
               content:
             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tempus purus, sit amet dictum lacus. Phasellus sed rhoncus velit, a semper metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tempus purus, sit amet dictum lacus. Phasellus sed rhoncus velit, a semper metus.',

         },
         {  
            id: '13wb',
            label: 'Why we cover only africa?',
               content:
             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tempus purus, sit amet dictum lacus. Phasellus sed rhoncus velit, a semper metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tempus purus, sit amet dictum lacus. Phasellus sed rhoncus velit, a semper metus.',
         },
         {  
            id: '14wb',
            label: 'Why we cover only africa?',
               content:
             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tempus purus, sit amet dictum lacus. Phasellus sed rhoncus velit, a semper metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tempus purus, sit amet dictum lacus. Phasellus sed rhoncus velit, a semper metus.',
         },
         {  
            id: '15wb',
            label: 'Why we cover only africa?',
               content:
             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tempus purus, sit amet dictum lacus. Phasellus sed rhoncus velit, a semper metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tempus purus, sit amet dictum lacus. Phasellus sed rhoncus velit, a semper metus.',
         },
          {  
            id: '16wb',
            label: 'Why we cover only africa?',
               content:
             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tempus purus, sit amet dictum lacus. Phasellus sed rhoncus velit, a semper metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tempus purus, sit amet dictum lacus. Phasellus sed rhoncus velit, a semper metus.',
         },
         {  
            id: '17wb',
            label: 'Why we cover only africa?',
               content:
             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tempus purus, sit amet dictum lacus. Phasellus sed rhoncus velit, a semper metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tempus purus, sit amet dictum lacus. Phasellus sed rhoncus velit, a semper metus.',
         },

      ];

      return(

            <Home  items={items}  setslider={setslider} faq={faq} secondSlider={secondSlider} />
         );
}

export default HomePage; 
