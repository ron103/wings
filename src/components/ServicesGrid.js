import React from 'react';

function ServicesGrid() {
  const services = [
    { name: 'Visa Assistance', icon: 'https://via.placeholder.com/60' },
    { name: 'Counseling', icon: 'https://via.placeholder.com/60' },
    { name: 'Accommodation', icon: 'https://via.placeholder.com/60' },
    { name: 'Application Processing', icon: 'https://via.placeholder.com/60' },
    { name: 'Pre-Departure Briefing', icon: 'https://via.placeholder.com/60' },
    { name: 'Career Guidance', icon: 'https://via.placeholder.com/60' },
    { name: 'Financial Consultation', icon: 'https://via.placeholder.com/60' },
    { name: 'Language Courses', icon: 'https://via.placeholder.com/60' },
  ];

  return (
    <div className="container">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card hover-transition" key={i}>
            <img src={s.icon} alt={s.name} />
            <h4>{s.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesGrid;