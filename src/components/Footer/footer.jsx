import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/birdlogo.png'; // make sure this path is correct
import user_icon from '../../assets/user_icon.svg'; // make sure this path is correct

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
          <p>I am a frontend developer from Canada with over 10 years of experience in customer service excellence.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>    
        </div>          
      </div>
      <hr />
    <div className="footer-bottom">
    <p className='footer-bottom-left'>&copy; 2024 Charlaine La Marre. All rights reserved.</p>
    <div className='footer-bottom-right'>
      <p>Term of Services</p>
      <p>Privacy Policy</p>
      <p>Connect with Me</p>
    </div>
  </div>
  </div>
  )
}

export default Footer
