import React from 'react';
import './styles/FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <div className="left-column">
        <div className="feature-content">
          <h2>Project <span>Management</span></h2>
          <p>Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
          <button className="feature-button">Get Started →</button>
        </div>
        <br></br>
        <br></br>
        <div className="collaboration-image">
          <img src='/Collabimg.png' alt="Collaboration" />
        </div>
      </div>

      <div className="right-column">
        <div className="feature-image">
          <img src="/featuressectionimg.jpg" alt="Project Management" />
        </div>
        <div className="collaboration-content">
          <h2>Work <span>together</span></h2>
          <p>With Whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
          <button className="feature-button">Try it now →</button>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
