
import React from 'react';
import './styles/PlanSection.css';

const PlanSection = () => {
  return (
    <div className="plan-section">
      <h2>
        Choose <span>Your Plan</span>
      </h2>
      <p className="subtitle">
        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, we have the right plan for you.
      </p>
      <div className="plans">
        <div className="plan-card">
          <h3>Free</h3>
          <p className="price">$0</p>
          <ul>
            <li>Capture ideas and find them quickly</li>
            <li>Sync unlimited devices</li>
            <li>10 GB monthly uploads</li>
            <li>200 MB max. note size</li>
            <li>Customize home dashboard and access extra widgets</li>
            <li>Connect primary Google Calendar account</li>
            <li>Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button>Get Started</button>
        </div>
        
        <div className="plan-card highlighted">
          <h3>Personal</h3>
          <p className="price">$11.99</p>
          <ul>
            <li>Keep home and family on track</li>
            <li>Sync unlimited devices</li>
            <li>10 GB monthly uploads</li>
            <li>200 MB max. note size</li>
            <li>Customize home dashboard and access extra widgets</li>
            <li>Connect primary Google Calendar account</li>
            <li>Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className="plan-card">
          <h3>Organization</h3>
          <p className="price">$49.99</p>
          <ul>
            <li>Capture ideas and find them quickly</li>
            <li>Sync unlimited devices</li>
            <li>10 GB monthly uploads</li>
            <li>200 MB max. note size</li>
            <li>Customize home dashboard and access extra widgets</li>
            <li>Connect primary Google Calendar account</li>
            <li>Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
