import React from 'react';
import { useNavigate } from 'react-router-dom';

import usaFlag from '../assets/flags/usa-flag.png';
import canadaFlag from '../assets/flags/canada-flag.png';
import australiaFlag from '../assets/flags/australia.png';
import bosniaf from '../assets/flags/bosnia-and-herzegovina.png';
import ukf from '../assets/flags/united-kingdom.png';
import georgiaf from '../assets/flags/georgia.png';
import belarusf from '../assets/flags/flag.png';
import russiaf from '../assets/flags/russia.png';
import irelandf from '../assets/flags/ireland.png';
import italyf from '../assets/flags/italy.png';
import germanyf from '../assets/flags/germany.png';
import japanf from '../assets/flags/japan.png'
import koreaf from '../assets/flags/korea.png'
import kazakhf from '../assets/flags/kazakh.png'
import kyrgf from '../assets/flags/kyrg.png'
import indiaf from '../assets/flags/india.png'
import armeniaf from '../assets/flags/armenia.png'

import usal from '../assets/landmarks/usal.jpg';
import russial from '../assets/landmarks/russial.jpg';
import georgial from '../assets/landmarks/georgial.jpg';
import bosnial from '../assets/landmarks/bosnial.jpg';
import belarusl from '../assets/landmarks/belarusl.jpg';
import philippinesl from '../assets/landmarks/philippinesl.jpg';
import ukl from '../assets/landmarks/ukl.jpg';
import canadal from '../assets/landmarks/canadal.jpg';
import australial from '../assets/landmarks/australial.jpg';
import irelandl from '../assets/landmarks/irelandl.jpg';
import italyl from '../assets/landmarks/italyl.jpg';
import germanyl from '../assets/landmarks/germanyl.jpg';
import japanl from '../assets/landmarks/japanl.jpg'
import koreal from '../assets/landmarks/koreal.jpg'
import kazakhl from '../assets/landmarks/kazakhl.jpg'
import kyrgl from '../assets/landmarks/kyrgl.jpg'
import indial from '../assets/landmarks/indial.jpg'
import armenial from '../assets/landmarks/armenial.jpg'

function StudyDestinations() {
  const navigate = useNavigate();

  const destinations = [
    { name: 'Study in Russia', flag: russiaf, landmark: russial, route: 'russia' },
    { name: 'Study in Georgia', flag: georgiaf, landmark: georgial, route: 'georgia' },
    { name: 'Study in Kyrgyzstan', flag: kyrgf, landmark: kyrgl, route: 'kyrg' },
    { name: 'Study in Kazakhstan', flag: kazakhf, landmark: kazakhl, route: 'kazakh' },
    { name: 'Study in Belarus', flag: belarusf, landmark: belarusl, route: 'belarus' },
    { name: 'Study in Philippines', flag: canadaFlag, landmark: philippinesl, route: 'philippines' },
    { name: 'Study in Armenia', flag: armeniaf, landmark: armenial, route: 'armenia' },
    { name: 'Study in India', flag: indiaf, landmark: indial, route: 'india' },
    { name: 'Study in Bosnia', flag: bosniaf, landmark: bosnial, route: 'bosnia' },
    { name: 'Study in Japan', flag: japanf, landmark: japanl, route: 'japan' },
    { name: 'Study in South Korea', flag: koreaf, landmark: koreal, route: 'korea' },
    { name: 'Study in UK', flag: ukf, landmark: ukl, route: 'uk' },
    { name: 'Study in USA', flag: usaFlag, landmark: usal, route: 'usa' },
    { name: 'Study in Canada', flag: canadaFlag, landmark: canadal, route: 'canada' },
    { name: 'Study in Australia', flag: australiaFlag, landmark: australial, route: 'australia' },
    { name: 'Study in Ireland', flag: irelandf, landmark: irelandl, route: 'ireland' },
    { name: 'Study in Italy', flag: italyf, landmark: italyl, route: 'italy' },
    { name: 'Study in Germany', flag: germanyf, landmark: germanyl, route: 'germany' },
  ];

  const handleCountryClick = (route) => {
    navigate(`/country/${route}`);
  };

  return (
    <div className="study-destinations container">
      <div className="destinations-list">
        <h2 className="section-title">Study Destinations</h2>
        {destinations.map((d, i) => (
          <div 
            className="destinations-list-item hover-transition" 
            key={i}
            onClick={() => handleCountryClick(d.route)}
          >
            <img src={d.flag} alt={d.name} />
            <span>{d.name}</span>
          </div>
        ))}
      </div>
      <div className="destinations-images">
        {destinations.map((d, i) => (
          <div className="destinations-image-container" key={i} onClick={() => handleCountryClick(d.route)}>
            <img src={d.landmark} alt={d.name} />
            <div className="destinations-image-caption">{d.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyDestinations;