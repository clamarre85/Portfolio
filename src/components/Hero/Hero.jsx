import React from "react";
import './Hero.css'
/*use this to change picture*/ 
import profile_img from '../../assets/avatarme.jpg'
/*use this to change profile story*/
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt=""/>
      <h1><span>I am Charlaine La Marre,</span> full stack developer living out of British Columbia.</h1>
      <p>im a full stack developer from canada </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
     </div>
    </div>
  )
}

export default Hero;