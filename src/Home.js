
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Copyright from './components/pages/Copyright';
import Datarepresentation from './components/pages/Datarepresentation';
import Footer from './components/pages/Footer';
import GoogleMap from './components/pages/GoogleMap';
import HeroSection from './components/pages/HeroSection';
import MeetOurTeam from './components/pages/MeetOurTeam';
import Responsive from './components/pages/OurPartners';
import Owl from './components/pages/Owl';
import Posts from './components/pages/Posts';
import SuccessfullStories from './components/pages/SuccessfullStories';
import Whatwedo from './components/pages/Whatwedo';


function App() {
  return (
    <div >
      <Header/>
       <HeroSection/> 
      <Datarepresentation/> 
       <Whatwedo/> 
       <Posts/>
       <MeetOurTeam/> 
       <SuccessfullStories/>
       <Owl/> 
       <Responsive/>  
      <GoogleMap/>
      <Footer/>
       <Copyright/> 
    </div>
  );
}

export default App;
