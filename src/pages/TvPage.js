import Tv from '../components/Tv';
import React, { Fragment , useState , useEffect} from 'react';
import axios, {isCancel, AxiosError} from 'axios';

function TvPage() {

      const[tvs , settv] = useState([]);


          useEffect(()=>{

            get_tvs();
            get_latest();
            get_populars();

          },[])


       const get_tvs = async ()=>{
            
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/tv_live',
            
          }).then(function (data) {
            
              settv(data.data.response);
          });  

 
        }; 


      const[latests , setlatest] = useState([]);


    const get_latest = async ()=>{
            
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/latest_shows',
            
          }).then(function (data) {
           setlatest(data.data.response);
            // setlatest(data.response);
          });  


        }; 


       const[populars , setpopular] = useState([]);

       const get_populars = async ()=>{
            
         await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://code.rashidashraf.com/54connect/api/popular_shows',
            
          }).then(function (data) {

            
            setpopular(data.data.response);
             
          });  


        }; 

 
 
      return(

            <Tv tvs={tvs} latests={latests} populars={populars}/>
         );
}

export default TvPage; 
