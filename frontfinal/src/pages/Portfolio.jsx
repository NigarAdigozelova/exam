import React from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async';
const Portfolio = () => {
  return (
    <HelmetProvider>
        <Helmet>
        <title>Portfolio</title>
        </Helmet>
        <div>Portfolio</div>
    
    </HelmetProvider>
  )
}

export default Portfolio