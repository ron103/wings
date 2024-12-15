import React from 'react';
import engineeringIcon from '../assets/icons/engineering-icon.png';
import itIcon from '../assets/icons/it-icon.png';
import architectureIcon from '../assets/icons/architecture-icon.png';

function PopularCourses() {
  const courses = [
    { name: 'Engineering', icon: engineeringIcon },
    { name: 'Information Technology', icon: itIcon },
    { name: 'Architecture', icon: architectureIcon },
    { name: 'Business Management', icon: 'https://via.placeholder.com/60' },
    { name: 'Medicine', icon: 'https://via.placeholder.com/60' },
    { name: 'Law', icon: 'https://via.placeholder.com/60' },
    { name: 'Creative Arts', icon: 'https://via.placeholder.com/60' },
    { name: 'Data Science', icon: 'https://via.placeholder.com/60' },
    { name: 'Hospitality', icon: 'https://via.placeholder.com/60' },
  ];

  return (
    <div className="container">
      <h2 className="section-title">Popular Courses</h2>
      <div className="popular-courses">
        {courses.map((c, i) => (
          <div className="course-card hover-transition" key={i}>
            <img src={c.icon} alt={c.name} />
            <h4>{c.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCourses;