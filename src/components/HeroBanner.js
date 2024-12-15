import React from "react";
import dreamy from "../assets/misc/dreamy.jpg";
import italy from "../assets/misc/italy.jpg";
import mbbs from "../assets/misc/mbbs.avif";
import nurse from "../assets/misc/nurse.jpeg";
import scholar from "../assets/misc/scholar.png";


function HeroBanner() {
  const tiles = [
    { title: "Student Visa", img: dreamy },
    { title: "MBBS In Abroad", img: mbbs },
    { title: "Free Abroad Education", img: italy },
    { title: "Nursing In Abroad", img: nurse },
    { title: "Scholarship Guidance", img: scholar },
  ];

  return (
    <div className="hero spacer">


      <div className="hero-title">
        At Wings International, we simplify your journey
      </div>
      <div className="hero-p">
        with seamless Accommodation, Insurance, Forex, Travel Assistance, and
        Pre-Departure Support—your trusted partner for every step abroad
      </div>
      <div className="hero-tiles">
        {tiles.map((tile, index) => (
          <div className="hero-tile hover-transition" key={index}>
            <img src={tile.img} alt={tile.title} />
            <h4>{tile.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroBanner;
