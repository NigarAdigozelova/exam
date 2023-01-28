import React from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async';
const Testimonials = () => {
  return (
    <HelmetProvider>
    <Helmet>
    <title>Testimonial</title>
    </Helmet>
    <div>Testimonial</div>

</HelmetProvider>
  )
}

export default Testimonials