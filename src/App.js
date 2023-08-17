
import React  from 'react';

import Route from './components/Route'; 
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


  function App() {
  return (
    <div className="App">
       
        <Route path="/">

          <HeaderPage />
            <HomePage />
            <FooterPage />
          
        </Route> 

         <Route path="/tv">

           <HeaderPage />
            <TvPage />
            <FooterPage />
          
        </Route> 

         <Route path="/on-demand">

            <HeaderPage />
            <OnDemandPage />
            <FooterPage />
          
        </Route>

        <Route path="/news">

            <HeaderPage />
            <NewsPage />
            <FooterPage />
          
        </Route>

         <Route path="/radio">

            <HeaderPage />
            <RadioPage />
            <FooterPage />
          
        </Route> 

        <Route path="/i-witness">

            <HeaderPage />
            <I_witnessPage />
            <FooterPage />
          
        </Route>
        <Route path="/viral">

            <HeaderPage />
            <ViralPage />
            <FooterPage />
          
        </Route>

         <Route path="/contact-us">

            <HeaderPage />
            <ContactUsPage />
            <FooterPage />
          
        </Route>

        <Route path="/tv-live">

            <HeaderPage />
            <Tv_livePage />
            <FooterPage />
          
        </Route>

        <Route path="/login">
            <LoginPage />
        </Route>
        
        <Route path="/sign-up">
            <Sign_inPage />
        </Route>
         

          <Route path="/signUp">
            <SignUpPage />
        </Route>

        <Route path="/profile">
            <ProfilePage />
        </Route>

        <Route path="/upload-i-witness">
            <Upload_i_witnessPage />
        </Route>
       

    </div>
  );
}

export default App;
