import React, { useState } from 'react';
import belarusl from '../assets/landmarks/belarusl.jpg'; 
import { FaChevronDown } from 'react-icons/fa';

function Belarus() {
  const [activeIndex, setActiveIndex] = useState(null);

  const universities = [
    {
      name: 'Vitebsk State Medical University',
      fees: [
        { year: '1st Year', inr: 'INR 329000.00', usd: '$4700.00' },
        { year: '2nd Year', inr: 'INR 280000.00', usd: '$4000.00' },
        { year: '3rd Year', inr: 'INR 280000.00', usd: '$4000.00' },
        { year: '4th Year', inr: 'INR 280000.00', usd: '$4000.00' },
        { year: '5th Year', inr: 'INR 280000.00', usd: '$4000.00' },
        { year: 'Full Price', inr: 'INR 1729000.00', usd: '$24700.00' },
      ],
    },
    {
      name: 'Belarusian State Medical University',
      fees: [
        { year: '1st Year', inr: 'INR 329000.00', usd: '$4700.00' },
        { year: '2nd Year', inr: 'INR 280000.00', usd: '$4000.00' },
        { year: '3rd Year', inr: 'INR 280000.00', usd: '$4000.00' },
        { year: '4th Year', inr: 'INR 280000.00', usd: '$4000.00' },
        { year: '5th Year', inr: 'INR 280000.00', usd: '$4000.00' },
        { year: 'Full Price', inr: 'INR 1729000.00', usd: '$24700.00' },
      ],
    },
    {
      name: 'Gomel State Medical University',
      fees: [
        { year: '1st Year', inr: 'INR 322000.00', usd: '$4600.00' },
        { year: '2nd Year', inr: 'INR 280000.00', usd: '$4000.00' },
        { year: '3rd Year', inr: 'INR 280000.00', usd: '$4000.00' },
        { year: '4th Year', inr: 'INR 280000.00', usd: '$4000.00' },
        { year: '5th Year', inr: 'INR 280000.00', usd: '$4000.00' },
        { year: 'Full Price', inr: 'INR 1442000.00', usd: '$20600.00' },
      ],
    },
    {
      name: 'Grodno State Medical University',
      fees: [
        { year: '1st Year', inr: 'INR 315000.00', usd: '$4500.00' },
        { year: '2nd Year', inr: 'INR 210000.00', usd: '$3000.00' },
        { year: '3rd Year', inr: 'INR 210000.00', usd: '$3000.00' },
        { year: '4th Year', inr: 'INR 210000.00', usd: '$3000.00' },
        { year: '5th Year', inr: 'INR 210000.00', usd: '$3000.00' },
        { year: 'Full Price', inr: 'INR 1155000.00', usd: '$16500.00' },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="belarus-page">
      <div 
        className="belarus-hero"
        style={{ 
          background: `linear-gradient(135deg, rgba(0,68,204,0.7) 30%, rgba(0,102,238,0.7) 70%), url(${belarusl}) center center/cover no-repeat`
        }}
      >
        <div className="belarus-hero-overlay">
          <h1>Study in Belarus</h1>
        </div>
      </div>
      <div className="belarus-content container">
        <p className="intro-text">
          Belarus, a charming Eastern European country, is known for its rich cultural heritage, safe environment, and
          well-established education system. With English-medium MBBS programs, globally recognized degrees, and
          affordable tuition, Belarus has become a top destination for aspiring medical students.
        </p>

        <h2 className="section-title">Why Study in Belarus?</h2>
        <ul className="benefits-list">
          <li>The medium is English that provides ease for students to study.</li>
          <li>
            There are 5 different faculties at BSMU: General Medicine, Preventive Medicine, Pediatrics, Dentistry, and
            Military Medicine.
          </li>
          <li>High-quality education at affordable fees, much cheaper than in India.</li>
          <li>Adopted practical-based education pedagogy focusing more on labs/tutorials than theory.</li>
          <li>MCI approved universities.</li>
          <li>
            For direct admission contact <strong style={{ color: '#0044cc' }}>Wings International</strong>.
          </li>
        </ul>

        <h2 className="section-title" style={{ marginTop: '60px' }}>Universities & Fee Structure</h2>
        <p className="section-subtitle">Click on a university to view detailed fee information</p>

        <div className="universities-accordion">
          {universities.map((uni, index) => (
            <div className="university-item" key={index}>
              <div className="university-header" onClick={() => toggleAccordion(index)}>
                <h3>{uni.name}</h3>
                <FaChevronDown
                  className={`chevron ${activeIndex === index ? 'rotated' : ''}`}
                />
              </div>
              {activeIndex === index && (
                <div className="university-content">
                  <table className="fee-table">
                    <thead>
                      <tr>
                        <th>Year</th>
                        <th>INR</th>
                        <th>USD</th>
                      </tr>
                    </thead>
                    <tbody>
                      {uni.fees.map((f, i) => (
                        <tr key={i}>
                          <td>{f.year}</td>
                          <td>{f.inr}</td>
                          <td>{f.usd}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Belarus;