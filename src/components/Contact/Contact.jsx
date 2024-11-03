import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "19a868f4-e613-446c-bcf0-6e08c33b1754");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  // Ensure the return statement is part of the Contact function
  return (
    <div id='contact' className='contact'>
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
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' placeholder='Enter Your Name' name='name' required/>
          <label htmlFor='email'>Your Email</label>
          <input type='email' placeholder='Enter Your Email' name='email' required/>
          <label htmlFor='message'>Write your message here</label>
          <textarea name='message' rows='8' placeholder='Enter your message' required></textarea>
          <button type='submit' className='contact-submit'>Submit</button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
}

export default Contact;
