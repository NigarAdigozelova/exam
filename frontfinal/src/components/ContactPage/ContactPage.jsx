import React from 'react'
import "./contact.scss"

const ContactPage = () => {
  return (
    <div className='contact-wrapper'>
        <h1 style={{color:"blue"}}>Contact Us</h1>
        <div className='contact-info'> 
            <div style={{width:300}}>203 Fake St. Mountain View, San Francisco, California, USA</div>
            <div>+1 232 3235 324</div>
            <div>youremail@domain.com</div>
        </div>
        <div className='form'>
            <h1 style={{textAlign:"center",color:"blue"}}>Contact Form</h1>
            <div >
                <label htmlFor=""style={{display:"block"}}>First Name</label>
            <input type="text" /> 
            <label style={{display:"block"}} htmlFor="">Last Name </label >
            <input type="text" /> 
            </div>
            <div><label style={{display:"block"}} htmlFor="">Email</label>
                <input type="text" /></div>
            <div><label style={{display:"block"}} htmlFor="">Subject</label><input type="text" /></div>
            <div><label style={{display:"block"}} htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button style={{backgroundColor:"blue",color:"white",padding:10,border:"none",borderRadius:20}}>Send Message</button>
        </div>
    </div>
  )
}

export default ContactPage