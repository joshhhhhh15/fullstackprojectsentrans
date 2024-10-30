import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import './App.css';
import ExtensionSection from './ExtensionSection';
import PlanSection from './PlanSection';
import SyncDataSection from './SyncDataSection';
import SponsorsSection from './SponsorSection';
import TestimonialsSection from './TestiomonialsSection';
import FooterSection from './FooterSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-wrapper">
        <HeroSection />
        <FeaturesSection />
        <ExtensionSection />
        <PlanSection />
        <SyncDataSection />
        <SponsorsSection />
        <TestimonialsSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
