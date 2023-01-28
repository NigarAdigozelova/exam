import React from 'react'
import "./hero.scss"

const HeroSection = () => {
  return (
    <div className='hero-wrapper'>
        <div className='hero-img'>
        <img src="https://preview.colorlib.com/theme/nitro/images/hero_2.jpg" alt="" />
        </div>
        <div className='hero-content'>
            <h1>WELCOME</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta eius error.</p>
            <button>Get In Touch</button>
        </div>
      
    </div>
  )
}

export default HeroSection