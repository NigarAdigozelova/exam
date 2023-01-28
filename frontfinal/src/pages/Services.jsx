import React from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async';
const Services = () => {
  return (
    <HelmetProvider>
    <Helmet>
    <title>Services</title>
    </Helmet>
    <div>Services</div>

</HelmetProvider>
  )
}

export default Services