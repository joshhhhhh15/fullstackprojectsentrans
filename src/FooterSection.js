import React from 'react';
import './styles/FooterSection.css';

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="footer-top">
        <h2 className="footer-title">Try Whitespace today</h2>
        <p className="footer-subtitle">Get started for free. Add your whole team as your needs grow.</p>
        <button className="footer-button">Try Taskey free →</button>
        <p className="footer-contact">On a big team? Contact sales</p>
        <div className="footer-icons">
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-columns">
          <div className="footer-column">
            <img src='./logowhitepace.png' alt='whitepacefooter' className='footerlogo'></img>
            <p>Whitespace was created for the new ways we live and work.</p>
            <p> We make a better workspace around the world.</p>
          </div>
          <div className="footer-column">
            <h3>Product</h3>
            <p>Overview</p>
            <p>Pricing</p>
            <p>Customer stories</p>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <p>Blog</p>
            <p>Guides & tutorials</p>
            <p>Help center</p>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <p>About us</p>
            <p>Careers</p>
            <p>Media kit</p>
          </div>
          <div className="footer-column">
            <h3>Try It Today</h3>
            <p>Get started for free. Add your whole team as your needs grow.</p>
            <button className="footer-button-small">Start today →</button>
          </div>
        </div>
        <div className="footer-bottom-info">
          <p>©2021 Whitespace LLC.</p>
          <div className="footer-bottom-links">
            <p>English</p>
            <p>Terms & privacy</p>
            <p>Security</p>
            <p>Status</p>
          </div>
          <div className="footer-social-icons">
            <i className="icon-facebook"></i>
            <i className="icon-twitter"></i>
            <i className="icon-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
