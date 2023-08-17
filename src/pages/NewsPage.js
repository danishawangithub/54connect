 import News from '../components/News';
import React, { Fragment , useState , useEffect} from 'react';
import axios, {isCancel, AxiosError} from 'axios';

function NewsPage() {
  
    useEffect(()=>{
       
       get_news();
       get_allnews();
        
    },[]);

    const[news , setnews] = useState([]);

     const get_news = async ()=>{
            
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/news', 
            
          }).then(function (data) {
 
               setnews(data.data.response );
          });  

 
        };  

      const[newsall , setnewsall] = useState([]);

     const get_allnews = async ()=>{
            
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/allnews', 
            
          }).then(function (data) {
 
               setnewsall(data.data.response );
          }); 
 
        }; 


        const items = [

         {
               id: '12we',
             label: 'Entertainment',
            content1:'Flood',
            content2:'Earthquake',
         },
          {
               id: '13we',
             label: 'Politics',
            content1:'Flood',
            content2:'Earthquake',
         },
            {
               id: '14we',
             label: 'Sports',
            content1:'Flood',
            content2:'Earthquake',
         },
            {
               id: '15we',
             label: 'Culture',
            content1:'Flood',
            content2:'Earthquake',
         },
            {
               id: '16we',
             label: 'Health',
            content1:'Flood',
            content2:'Earthquake',
         },
            {
               id: '17we',
             label: 'Disasters',
            content1:'Flood',
            content2:'Earthquake',
         },
            {
               id: '18we',
             label: 'Regions',
            content1:'Flood',
            content2:'Earthquake',
         },
  

         ];
   
 
 
      return(

            <News news={news}  newsall={newsall} items={items} />
         );
}

export default NewsPage; 
