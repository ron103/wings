import React, { useState } from 'react';
import student1 from '../assets/testimonials/student1.jpg';
import student2 from '../assets/testimonials/student2.jpg';
import student3 from '../assets/testimonials/student3.jpg';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      img: student1,
      text: "Wings International guided me through every step of my admission process. I couldn't have done it without their support!",
      video: 'https://via.placeholder.com/200x150?text=Video+Thumbnail'
    },
    {
      img: student2,
      text: "Their team was extremely helpful and friendly. I secured a scholarship at a top university!",
      video: 'https://via.placeholder.com/200x150?text=Video+Thumbnail'
    },
    {
      img: student3,
      text: "My dream to study abroad came true thanks to Wings International. Highly recommended!",
      video: 'https://via.placeholder.com/200x150?text=Video+Thumbnail'
    },
  ];

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <h2 className="section-title">Student Testimonials</h2>
      <div className="testimonials-carousel">
        <div className="testimonial-slide" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((t, i) => (
            <div style={{ minWidth: '100%', display: 'flex', gap: '20px' }} key={i}>
              <div>
                <img src={t.video} alt="Video Thumbnail" />
              </div>
              <div>
                <p>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <span 
            key={i} 
            className={`testimonial-dot ${i === activeIndex ? 'active' : ''}`} 
            onClick={() => goToSlide(i)}>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;