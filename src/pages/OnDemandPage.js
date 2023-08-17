import OnDemand from '../components/OnDemand';
import React, { Fragment , useState , useEffect} from 'react';
import axios, {isCancel, AxiosError} from 'axios';

function OnDemandPage() {

      const max_width = {'max-width': '800px'};

      const[movies , setmovie] = useState([]);


    useEffect(()=>{
       get_movies();
       comedy_movies();
       drama_movies();
       southafricavid();
       westvideos();
       eastafrica();
    },[]);

     const get_movies = async ()=>{
            
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/popular_movies', 
            
          }).then(function (data) {
 
               setmovie(data.data.response );
          });  

 
        }; 

      const[comdymovies , setcomdymovies] = useState([]);

         const comedy_movies = async ()=>{
            
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/comedy_movies', 
            
          }).then(function (data) {
 
               setcomdymovies(data.data.response );
          });  

 
        }

      const[dramavideos , setdramavideos] = useState([]);

         const drama_movies = async ()=>{
            
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/drama_videos', 
            
          }).then(function (data) {
 
               setdramavideos(data.data.response );
          });  

 
        }; 

        const[southafricavideos , setafricavideos] = useState([]);

         const southafricavid = async ()=>{
            
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/southafrica_videos', 
            
          }).then(function (data) {
 
               setafricavideos(data.data.response );
          });  

 
        }; 

        const[westafricavideos , setwestvideos] = useState([]);

         const westvideos = async ()=>{
            
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/westafrica_videos', 
            
          }).then(function (data) {
 
               setwestvideos(data.data.response );
          });  

 
        }; 
      
      const[eastafricavideos , seteastvideos] = useState([]);

      const eastafrica  = async ()=>{
            
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/eastafrica_videos', 
            
          }).then(function (data) {

               seteastvideos(data.data.response );
          });  


      }; 

 



    

     
 
      return(

            <OnDemand eastafricavideos={eastafricavideos} westafricavideos={westafricavideos} movies={movies} comdymovies={comdymovies} dramavideos={dramavideos} southafricavideos={southafricavideos} />
         );
}

export default OnDemandPage; 
