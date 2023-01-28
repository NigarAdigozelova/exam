import React from 'react'
import "./about.scss"

const About = () => {
    return (
        <div className='about-wrapper'>
            <div className='about-title'><b>About Us</b></div>
            <div className='about-main'>
                <div className='about-img'>
                    <img src="https://preview.colorlib.com/theme/nitro/images/hero_1.jpg" alt="" />
                </div>
                <div className='about-article'>
                    <h1>For the next great business</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.</p>
                    <ul>
                        <li><i class="fa-solid fa-check"></i>   Officia quaerat eaque neque</li>
                        <li><i class="fa-solid fa-check"></i>   Possimus aut consequuntur incidunt</li>
                        <li><i class="fa-solid fa-check"></i>   Lorem ipsum dolor sit amet</li>
                        <li><i class="fa-solid fa-check"></i>   Consectetur adipisicing elits</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About