// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../assets/foodtruck.png';
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';
import fb from '../assets/fb.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo">
          <img src={logo} alt="Food Truck Logo" className="footer-logo" />
        </div>
        <div className="footer-section contact-info">
          <h3 className='footer-heading'>Contact Us</h3>
          <p className='footer-text'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
          <p className='footer-text'>example2020@gmail.com</p>
          <p className='footer-text'>(904) 443-0343</p>
        </div>
        <div className="footer-section">
          <h3 className='footer-heading'>More</h3>
          <a className='footer-text' >About Us</a>
          <a className='footer-text' >Products</a>
          <a className='footer-text' >Career</a>
          <a className='footer-text' >Contact Us</a>
        </div>
        <div className="footer-section social-links">
          <div>
            <h3 className='footer-heading social-heading'>Social Links</h3>
            <div className="social-icons">
              <a href="#"><img className='social-logo' src={insta} alt="Instagram" /></a>
              <a href="#"><img className='social-logo' src={twitter} alt="Twitter" /></a>
              <a href="#"><img style={{width:'13px'}} className='social-logo' src={fb} alt="Facebook" /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2022 Food Truck Example</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
