
import React  from 'react';

// import Route from './components/Route'; 
import HomePage from './pages/HomePage'; 
import HeaderPage from './pages/HeaderPage'; 
import TvPage from './pages/TvPage'; 
import OnDemandPage from './pages/OnDemandPage'; 
import NewsPage from './pages/NewsPage'; 
import RadioPage from './pages/RadioPage'; 
import I_witnessPage from './pages/I_witnessPage'; 
import ViralPage from './pages/ViralPage'; 
import ContactUsPage from './pages/ContactUsPage'; 
import FooterPage from './pages/FooterPage'; 
import Tv_livePage from './pages/Tv_livePage'; 
import LoginPage from './pages/LoginPage'; 
import Sign_inPage from './pages/Sign_inPage'; 
import SignUpPage from './pages/SignUpPage'; 
import ProfilePage from './pages/ProfilePage'; 
import Upload_i_witnessPage from './pages/Upload_i_witnessPage'; 
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



  function App() {
  return (
    <div className="App">
        

        <Router>
            <Routes>
                 <Route path="/" element={ <> <HeaderPage/>  <HomePage /> <FooterPage />  </> } />
                 <Route path="/tv" element={ <>  <HeaderPage/> <TvPage /> <FooterPage/> </> }   />
                 <Route path="/on-demand" element={ <>  <HeaderPage/> <OnDemandPage /> <FooterPage/> </> }   />
                 <Route path="/news" element={ <>  <HeaderPage/> <NewsPage /> <FooterPage/> </> }   />
                 <Route path="/radio" element={ <>  <HeaderPage/> <RadioPage /> <FooterPage/> </> }   />
                 <Route path="/i-witness" element={ <>  <HeaderPage/> <I_witnessPage /> <FooterPage/> </> }   />
                 <Route path="/viral" element={ <>  <HeaderPage/> <ViralPage /> <FooterPage/> </> }   />
                 <Route path="/contact-us" element={ <>  <HeaderPage/> <ContactUsPage /> <FooterPage/> </> }   />
                 <Route path="/tv-live" element={ <>  <HeaderPage/> <Tv_livePage /> <FooterPage/> </> }   />
                 <Route path="/login" element={ <>  <LoginPage/>  </> } />
                 <Route path="/sign-up" element={ <>  <Sign_inPage/>  </> } />
                 <Route path="/signUp" element={ <>  <SignUpPage/>  </> } />
                 <Route path="/profile" element={ <>  <ProfilePage/>  </> } />
                 <Route path="/upload-i-witness" element={ <>  <Upload_i_witnessPage/>  </> } />
            </Routes>
         </Router>

 
 
    </div>
  );
}

export default App;
