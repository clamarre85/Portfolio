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
            <p>I am an experienced Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Ipsum possimus cum voluptatem nihil atque, totam exercitationem, corporis sunt earum, non neque molestias. 
              Ullam a delectus commodi laudantium autem quod atque.</p>
            <p>My passion for frontend development. Driven by Code, Fueled by Curiosity</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>ReactJS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Python</p><hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
        <h1>10+</h1>
        <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
      </div>  
    </div>
  );
}

export default About;
