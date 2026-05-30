import React, { useState } from 'react';
import customer from '../assets/misc/customer.jpg';

function CTAForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    destination: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, destination } = formData;

    if (!name || !email || !mobile || !destination) {
      alert('Please fill out all fields.');
      return;
    }

    const mailtoLink = `mailto:info@wingsintedu.com?subject=Study Inquiry&body=Name: ${name}%0AEmail: ${email}%0AMobile: ${mobile}%0ADestination: ${destination}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="container">
      <div className="cta-section">
        <div className="cta-form-container">
          <h2 className="section-title">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            >
              <option value="">Study Destination</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="uk">UK</option>
              <option value="germany">Germany</option>
              <option value="italy">Italy</option>
              <option value="india">India</option>
              <option value="kyrgyzstan">Kyrgyzstan</option>
              <option value="kazakhstan">Kazakhstan</option>
              <option value="georgia">Georgia</option>
              <option value="philippines">Philippines</option>
              <option value="russia">Russia</option>
              <option value="ireland">Ireland</option>
              <option value="japan">Japan</option>
              <option value="korea">South Korea</option>
              <option value="bosnia">Bosnia & Herzegovina</option>
              <option value="not-sure">Not Sure Yet</option>
            </select>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        <div className="cta-image-container">
          <img src={customer} alt="Customer Inquiry" />
        </div>
      </div>
    </div>
  );
}

export default CTAForm;