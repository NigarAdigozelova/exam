import React from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async';
import About from '../components/About/About';
import Add from '../components/Add/AddData';
import ContactPage from '../components/ContactPage/ContactPage';
import HeroSection from '../components/HeroSecton/HeroSection';
import OurServices from '../components/OurServices/OurServices';
import OurTeam from '../components/OurTeam/OurTeam';
const Home = () => {
  return (
    <HelmetProvider>
        <Helmet>
        <title>Home</title>
        </Helmet>
        <HeroSection/>
        <About/>
        <OurTeam/>
        <OurServices/>
        <Add/>
        <ContactPage/>
    
    </HelmetProvider>
  )
}

export default Home