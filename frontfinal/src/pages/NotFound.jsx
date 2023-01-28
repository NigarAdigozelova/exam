import React from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async';
const NotFound = () => {
  return (
    <HelmetProvider>
    <Helmet>
    <title>NotFound</title>
    </Helmet>
    <div>NotFound</div>

</HelmetProvider>
  )
}

export default NotFound