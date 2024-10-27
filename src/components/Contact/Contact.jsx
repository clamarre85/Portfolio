import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'  // Correct icon for the call section
import location_icon from '../../assets/location_icon.svg'  // Only one import for location_icon

function Contact() {
  return (
    <div className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>I'm currently available...</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt=''/> <p>clamarre85@outlook.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt=''/> <p>705-494-0673</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt=''/> <p>BC, Canada</p>
            </div>
          </div>
        </div>
        <form className='contact-right'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' placeholder='Enter Your Name' name='name'/>
          <label htmlFor='email'>Your Email</label>
          <input type='email' placeholder='Enter Your Email' name='email'/>
          <label htmlFor='message'>Write your message here</label>
          <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
