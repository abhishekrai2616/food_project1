// src/components/About.js
import React from 'react';
import './About.css';
import about from "../assets/about-us-image.png";


const About = () => {
  return (
    <div className="about">
      <div className="about-image">
        <img src={about} alt="About Us" />
      </div>
      <div className="about-content">
        <div>
          <h2 className='about-us-text'>About Us</h2>
          <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
