import React from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async';
const Contact = () => {
  return (
    <HelmetProvider>
    <Helmet>
    <title>Contact</title>
    </Helmet>
    <div>Contact</div>

</HelmetProvider>
  )
}

export default Contact