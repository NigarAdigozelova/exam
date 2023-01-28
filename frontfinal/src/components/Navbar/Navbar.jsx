import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left-nav'>
                <div>Nitro</div> <div>.</div>
        </div>
        <div className='right-nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us <i className="fa-solid fa-chevron-down"></i></Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/testimonial">Testimonial</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar