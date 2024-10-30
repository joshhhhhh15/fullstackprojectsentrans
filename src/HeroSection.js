import React from 'react';
import Button from './Button';
import './styles/HeroSection.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Get More Done with Whitespace</h1>
        <p>Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.</p>
        <Button label="Try Whitespace free" />
      </div>
      <div className="hero-image">
        <CCarousel controls indicators transition className="ccarousel">
          <CCarouselItem>
            <CImage className="d-block w-100" src="/carouselpic1.jpg" alt="1st Picture" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src="/carouselpic2.jpg" alt="2nd Picture" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src="/carouselpic3.jpg" alt="3rd Picture" />
          </CCarouselItem>
        </CCarousel>
      </div>
    </div>
  );
}

export default HeroSection;
