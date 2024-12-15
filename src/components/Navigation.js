import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Navigation({ onMBBSClick }) {
  const [showDestinations, setShowDestinations] = useState(false);

  const navigate = useNavigate();

  const handleDestinationClick = (country) => {
    navigate(`/country/${country.toLowerCase()}`);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>Wings International</div>
      <div className="navbar-menu">
        <div
          className="navbar-item"
          onMouseEnter={() => setShowDestinations(true)}
          onMouseLeave={() => setShowDestinations(false)}
        >
          Study Destinations <FiChevronDown />
          {showDestinations && (
            <div className="dropdown">
              <div className="dropdown-item" onClick={() => handleDestinationClick('russia')}>Russia</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('georgia')}>Georgia</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('kyrg')}>Kyrgyzstan</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('kazakh')}>Kazakhstan</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('belarus')}>Belarus</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('philippines')}>Philippines</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('armenia')}>Armenia</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('india')}>India</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('bosnia')}>Bosnia</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('japan')}>Japan</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('korea')}>South Korea</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('uk')}>UK</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('usa')}>USA</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('canada')}>Canada</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('australia')}>Australia</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('ireland')}>Ireland</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('italy')}>Italy</div>
              <div className="dropdown-item" onClick={() => handleDestinationClick('germany')}>Germany</div>
            </div>
          )}
        </div>
        <div className="navbar-item navbar-cta" onClick={onMBBSClick}>MBBS In Abroad</div>
        <div className="navbar-item navbar-phone">+91 9922755575</div>
      </div>
    </div>
  );
}

export default Navigation;