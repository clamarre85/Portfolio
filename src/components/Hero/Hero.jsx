import React from "react";
import './Hero.css'
/*use this to change picture*/ 
import profile_img from '../../assets/avatarme.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";
/*use this to change profile story*/

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile_img} alt=""/>
      <h1><span>I am Charlaine La Marre,</span> full stack developer living out of British Columbia.</h1>
      <p>I am a full stack developer from canada </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
     </div>
    </div>
  )
}

export default Hero;