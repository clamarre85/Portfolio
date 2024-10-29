import React from 'react'
import './footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p> I am a frontend developer from Canada with over 10 years experience in customer service excellence.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                  <img src="user_icon" alt=" />"
                  <input type="email" placeholder='Enter your email' />                
            </div>
            <div className=" footer-subscribe">Subscribe</div>    
        </div>          
      </div>
      <hr/>
    </div>
  )
}

export default footer