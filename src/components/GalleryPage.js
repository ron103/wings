import React from 'react';
import '../styles/components.css';
import i1 from '../assets/gallery/i1.JPG';
import i2 from '../assets/gallery/i2.JPG';
import i3 from '../assets/gallery/i3.JPG';
import i4 from '../assets/gallery/i4.JPG';
import i5 from '../assets/gallery/i5.JPG';
import i6 from '../assets/gallery/i6.JPG';
import i7 from '../assets/gallery/i7.JPG';
import i8 from '../assets/gallery/i8.JPG';
import i9 from '../assets/gallery/i9.JPG';
import i10 from '../assets/gallery/i10.JPG';
import p1 from '../assets/gallery/p1.jpg';
import p2 from '../assets/gallery/p2.jpg';
import p3 from '../assets/gallery/p3.jpg';
import p4 from '../assets/gallery/p4.jpg';
import p5 from '../assets/gallery/p5.jpg';
import p6 from '../assets/gallery/p6.jpg';
import p7 from '../assets/gallery/p7.jpg';
import p8 from '../assets/gallery/p8.jpg';
import p9 from '../assets/gallery/p9.jpg';

const galleryItems = [
  { type: 'image', src: i1, alt: 'Landscape Image 1' },
  { type: 'image', src: i2, alt: 'Landscape Image 2' },
  { type: 'image', src: p1, alt: 'PDF Document 1' },
  { type: 'image', src: i3, alt: 'Landscape Image 3' },
  { type: 'image', src: p2, alt: 'PDF Document 2' },
  { type: 'image', src: i4, alt: 'Landscape Image 4' },
  { type: 'image', src: i5, alt: 'Landscape Image 5' },
  { type: 'image', src: p3, alt: 'PDF Document 3' },
  { type: 'image', src: i6, alt: 'Landscape Image 6' },
  { type: 'image', src: p4, alt: 'PDF Document 4' },
  { type: 'image', src: i7, alt: 'Landscape Image 7' },
  { type: 'image', src: p5, alt: 'PDF Document 5' },
  { type: 'image', src: i8, alt: 'Landscape Image 8' },
  { type: 'image', src: p6, alt: 'PDF Document 6' },
  { type: 'image', src: i9, alt: 'Landscape Image 9' },
  { type: 'image', src: p7, alt: 'PDF Document 7' },
  { type: 'image', src: i10, alt: 'Landscape Image 10' },
  { type: 'image', src: p8, alt: 'PDF Document 8' },
  { type: 'image', src: p9, alt: 'PDF Document 9' },
];

function GalleryPage() {
  return (
    <div>
    <h2 className="section-title">Gallery</h2>
    <div className="gallery-container">
      
      {galleryItems.map((item, index) => (
        <div key={index} className="gallery-item">
          <img src={item.src} alt={item.alt} className="gallery-image" />
        </div>
      ))}
    </div>
    </div>
  );
}

export default GalleryPage;