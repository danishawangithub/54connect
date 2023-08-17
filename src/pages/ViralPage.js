import Viral from '../components/Viral';
import React, { Fragment , useState , useEffect} from 'react';
import axios, {isCancel, AxiosError} from 'axios';

function ViralPage() {


//     const[news , setnews] = useState([]);
// 
//      const get_news = async ()=>{
//             
//          await axios({
//             method: 'get',
//             headers: { 'Content-Type': 'application/json'},
//             url: 'https://code.rashidashraf.com/54connect/api/news', 
//             
//           }).then(function (data) {
//  
//                setnews(data.data.response );
//           });  
// 
//  
//         };  


 
      return(

            <Viral />
         );
}

export default ViralPage; 
