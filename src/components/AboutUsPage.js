import React from 'react';

function AboutUsPage({ onCTAClick }) {
  return (
    <div className="about-us-page container">
      <h2 className="section-title">Welcome to Wings | Best Education Consultant in Pune</h2>
      <p className="about-description">
        Wings International is a leading consultancy providing students with opportunities to pursue MBBS in top-rated universities abroad. 
        Recognized by MCI and WHO, we specialize in guiding students to Russian and other renowned medical universities globally. 
        Since 2020, our offices in Pune, Delhi, and other cities have provided ethical, reliable, and student-focused guidance.
      </p>
      <button className="cta-button" onClick={onCTAClick}>Get Free Consultation</button>
    </div>
  );
}

export default AboutUsPage;