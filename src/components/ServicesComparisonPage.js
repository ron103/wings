import React from 'react';
import { FaCheck, FaExchangeAlt, FaUniversity } from 'react-icons/fa';

function ServicesComparisonPage() {
  const services = [
    { name: 'Career Counselling', icon: <FaCheck />, description: 'We guide you to choose the best career path.', color: 'blue' },
    { name: 'University Shortlisting', icon: <FaUniversity />, description: 'We shortlist universities based on your preferences.', color: 'yellow' },
    { name: 'Application Documentation', icon: <FaCheck />, description: 'We assist in all documentation for your applications.', color: 'blue' },
    { name: 'Live Application Tracking', icon: <FaCheck />, description: 'Track your application status in real-time.', color: 'yellow' },
    { name: 'Interview Training', icon: <FaCheck />, description: 'Get trained to ace university interviews.', color: 'blue' },
    { name: 'Successful Admits', icon: <FaCheck />, description: 'Our process ensures successful admits abroad.', color: 'yellow' },
    { name: 'Visa Documentation', icon: <FaCheck />, description: 'Seamless visa processing support.', color: 'blue' },
    { name: 'Travel Package', icon: <FaCheck />, description: 'Arranging travel packages for a smooth journey.', color: 'yellow' },
    { name: 'Currency Exchange', icon: <FaExchangeAlt />, description: 'Hassle-free currency exchange assistance.', color: 'blue' },
    { name: 'Pre-Departure Orientation', icon: <FaCheck />, description: 'Orientation sessions before your departure.', color: 'yellow' },
    { name: 'Post Arrival Service', icon: <FaCheck />, description: 'Support after you arrive at your destination.', color: 'blue' },
    { name: 'Education Loan Assistance', icon: <FaCheck />, description: 'Hassle free education loan assistance.', color: 'yellow' },
  ];

  const mbbsComparison = [
    { parameter: 'Total Course Duration', india: '5.5 years', abroad: '6 years' },
    { parameter: 'Tuition/College Fees', india: '₹65L–₹90L total', abroad: '₹13.5L–₹18L total' },
    { parameter: 'Food & Accommodation', india: '₹10K–₹15K/month', abroad: '₹12K–₹15K/month' },
    { parameter: 'Hospital for Internship/Clerkship', india: 'Available', abroad: 'Available' },
    { parameter: 'Medium of Teaching', india: 'English', abroad: 'English' },
    { parameter: 'Exit Test', india: 'Required (NMC)', abroad: 'Required (NMC)' },
    { parameter: 'Accreditation', india: 'MCI, WHO, FAIMER Listed', abroad: 'MCI, WHO, FAIMER Listed' },
    { parameter: 'International Exposure', india: 'Limited to India', abroad: 'India, USA, UK, Europe' },
    { parameter: 'Residency Options After Course', india: 'Only in India', abroad: 'Global Opportunities' },
    { parameter: 'Total Cost (Tuition+Visa+Food)', india: 'Approx. ₹1 crore', abroad: '₹25–₹26 lakh approx.' },
  ];

  return (
    <div className="services-comparison-page container">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">Hover over a service tile to learn more</p>
      <div className="diamond-grid">
        {services.map((service, i) => (
          <div
            className={`diamond-tile ${service.color === 'blue' ? 'blue-tile' : 'yellow-tile'}`}
            key={i}
          >
            <div className="diamond-content-front">
              <div className="diamond-icon">{service.icon}</div>
              <h4>{service.name}</h4>
            </div>
            <div className="diamond-content-back">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: '60px' }}>MBBS in India vs. Abroad</h2>
      <p className="section-subtitle">Compare the key parameters before making a decision</p>
      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>India</th>
              <th>Abroad</th>
            </tr>
          </thead>
          <tbody>
            {mbbsComparison.map((row, i) => (
              <tr key={i}>
                <td>{row.parameter}</td>
                <td>{row.india}</td>
                <td>{row.abroad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServicesComparisonPage;