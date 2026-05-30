import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

function CountryPage() {
  const { country } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/countries.json')
      .then(res => res.json())
      .then(jsonData => {
        const countryData = jsonData[country.toLowerCase()];
        setData(countryData);
      });
  }, [country]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!data) {
    return <div>Loading...</div>; // Or handle no data scenario
  }
  const heroImage = require(`../assets/landmarks/${data.heroImage}`);
  // Copy EXACT layout from the Belarus template, only replacing static data with data from JSON
  return (
    <div className="belarus-page">
      <div 
        className="belarus-hero"
        style={{ 
          background: `linear-gradient(135deg, rgba(0,68,204,0.7) 30%, rgba(0,102,238,0.7) 70%), url(${heroImage}) center center/cover no-repeat`
        }}
      >
        <div className="belarus-hero-overlay">
          <h1>{data.title}</h1>
        </div>
      </div>
      <div className="belarus-content container">
        <p className="intro-text">
          {data.introText}
        </p>

        <h2 className="section-title">{data.benefitsTitle}</h2>
        <ul className="benefits-list">
          {data.benefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>

        <h2 className="section-title" style={{ marginTop: '60px' }}>{data.universitiesTitle}</h2>
        <p className="section-subtitle">{data.universitiesSubtitle}</p>

        <div className="universities-accordion">
          {data.universities.map((uni, index) => (
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

export default CountryPage;