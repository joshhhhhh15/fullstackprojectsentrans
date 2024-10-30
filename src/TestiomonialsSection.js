import React from 'react';
import './styles/TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
      <h2 className="testimonials-header">What Our Clients Say</h2>
      <div className="testimonials-cards">
        
        <div className="testimonial-card">
          <p className="testimonial-text">“Whitespace is designed as a collaboration tool for businesses that is a full project management solution.”</p>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="testimonial-author">
            <img src="./person1.jpg" alt="Oberon Shaw" className="author-image" />
            <div className="author-info">
              <p className="author-name">Oberon Shaw, MCH</p>
              <p className="author-position">Head of Talent Acquisition, North America</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">“Whitespace is designed as a collaboration tool for businesses that is a full project management solution.”</p>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="testimonial-author">
            <img src="./person2.jpg" alt="Oberon Shaw" className="author-image" />
            <div className="author-info">
              <p className="author-name">Oberon Shaw, MCH</p>
              <p className="author-position">Head of Talent Acquisition, North America</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">“Whitespace is designed as a collaboration tool for businesses that is a full project management solution.”</p>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="testimonial-author">
            <img src="./person3.jpg" alt="Oberon Shaw" className="author-image" />
            <div className="author-info">
              <p className="author-name">Oberon Shaw, MCH</p>
              <p className="author-position">Head of Talent Acquisition, North America</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestimonialsSection;
