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
          <div className='footer-text' >About Us</div>
          <div className='footer-text' >Products</div>
          <div className='footer-text' >Career</div>
          <div className='footer-text' >Contact Us</div>
        </div>
        <div className="footer-section social-links">
          <div>
            <h3 className='footer-heading social-heading'>Social Links</h3>
            <div className="social-icons">
              <div><img className='social-logo' src={insta} alt="Instagram" /></div>
              <div><img className='social-logo' src={twitter} alt="Twitter" /></div>
              <div><img style={{width:'13px'}} className='social-logo' src={fb} alt="Facebook" /></div>
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
