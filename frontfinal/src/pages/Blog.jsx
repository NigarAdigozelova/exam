import React from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async';
const Blog = () => {
  return (
    <HelmetProvider>
        <Helmet>
        <title>Blog</title>
        </Helmet>
        <div>Blog</div>
    
    </HelmetProvider>
  )
}

export default Blog