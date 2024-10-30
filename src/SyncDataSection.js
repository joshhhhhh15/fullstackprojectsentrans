import React from 'react';
import './styles/SyncDataSection.css';

const SyncDataSection = () => {
  return (
    <section className="sync-data-section">
      <div className="top-section">
        <div className="top-content">
          <h2>Your work, <span>everywhere you are</span></h2>
          <p>
            Access your notes from your computer, phone, or tablet by synchronizing with various services, including WebDAV, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
          </p>
          <button className="cta-button top-button">Try Taskey →</button>
        </div>
      </div>
      
      <div className="bottom-section">
        <div className="left-content">
          <h2>100% your data</h2>
          <p>
            The app is open source, and your notes are saved in an open format, so you’ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no one but yourself can access them.
          </p>
          <button className="cta-button bottom-button">Read more →</button>
        </div>
        
        <div className="right-image">
          <img src="./dataimg.png" alt="Data synchronization illustration" />
        </div>
      </div>
    </section>
  );
};

export default SyncDataSection;
