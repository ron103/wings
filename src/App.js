import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import HeroBanner from './components/HeroBanner';
import PartnerLogosSlider from './components/PartnerLogosSlider';
import StudyDestinations from './components/StudyDestinations';
import CTAForm from './components/CTAForm';
import Testimonials from './components/Testimonials';
import AnimatedCounters from './components/AnimatedCounters';
import Footer from './components/Footer';
import AboutUsPage from './components/AboutUsPage';
import ServicesComparisonPage from './components/ServicesComparisonPage';
import BenefitsAbroadPage from './components/BenefitsAbroadPage';
import CountryPage from './components/CountryPage';
import AboutMe from './components/AboutMe';
import GalleryPage from './components/GalleryPage';

function App() {
  const ctaRef = useRef(null); // Ref for CTAForm
  const studyDestinationsRef = useRef(null); // Ref for StudyDestinations

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStudyDestinations = () => {
    studyDestinationsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navigation onMBBSClick={scrollToStudyDestinations} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <div className="container">
                <AboutUsPage onCTAClick={scrollToCTA} />

                <BenefitsAbroadPage />
                <ServicesComparisonPage />
                <div ref={studyDestinationsRef}>
                  <StudyDestinations />
                </div>
                <AboutMe onCTAClick={scrollToCTA} />
                <GalleryPage />
                <div ref={ctaRef}>
                  <CTAForm />
                </div>
                <AnimatedCounters />
              </div>
              <PartnerLogosSlider />
              <Footer />
            </>
          }
        />
        <Route path="/country/:country" element={<CountryPage />} />
      </Routes>
    </>
  );
}

export default App;