
import React from 'react';
import './styles/ExtensionSection.css';

const ExtensionSection = () => {
  return (
    <div className="extension-section">
      <div className="top-section">
        <div className="text-container">
          <h2>
            Use as <span>Extension</span>
          </h2>
          <p>
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          <button>Let's Go →</button>
        </div>
        <div className="image-placeholder">
          <img src="./extensionimg.png" alt="Top Section" />
        </div>
      </div>
      
      <div className="bottom-section">
        <div className="image-placeholder">
          <img src="./pluginsimg.png" alt="Bottom Section" />
        </div>
        <div className="text-container">
          <h2>
            Customise it to <span>your needs</span>
          </h2>
          <p>
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <button>Let's Go →</button>
        </div>
      </div>
    </div>
  );
};

export default ExtensionSection;
