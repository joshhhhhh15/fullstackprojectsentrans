import React from 'react';
import './styles/SponsorsSection.css';

const SponsorsSection = () => {
  return (
    <div className="sponsors-section">
      <div className="sponsors-top">
        <h1 className="sponsors-h2">Our Sponsors!</h1>
        <img
          src="./sponsorimg.png" 
          alt="Our sponsors"
          className="sponsors-image"
        />
      </div>

      <div className="sponsors-bottom">
        <img
          src="./contentimg.png" 
          alt="Apps"
          className="apps-image"
        />
        <div className="sponsors-content">
          <h1 className="sponsors-title">Work with Your Favorite Apps Using Whitespace</h1>
          <p className="sponsors-text">
            Whitespace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>
          <button className="sponsors-button">Read more →</button>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
