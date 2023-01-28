import React from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async';
import AddData from '../components/Add/AddData';

const About = () => {
  return (
    <HelmetProvider>
        <Helmet>
        <title>About</title>
        </Helmet>
        <AddData/>
    
    </HelmetProvider>
  )
}

export default About