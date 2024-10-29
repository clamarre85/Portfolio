import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/avatarme.jpg';


const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" className='profile'/>
        </div>
        <div className="about-right"> {/* Fixed casing */}
          <div className="about-para">
            <p>I am an experienced</p>
            <p>My passion for frontend development</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievement"><div className="about-achievement"><h1>10+</h1><p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement"><h1>90+</h1><p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement"><h1>10+</h1><p>Years of Experience</p>
        </div>
      </div>  
    </div>
  );
}

export default About;
