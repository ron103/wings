import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="container footer-content">

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Wings International, Shree Ganesh Galaxy, Alandi Rd, Wadmukhwadi, Charholi Budruk, Pune 412105</p>
          <a href="tel:+12345678900">+91-9922755575</a><br />
          <a href="mailto:info@lakshyaoverseas.com">info@wingsintedu.com</a>
        </div>
        <div className="footer-social">
          <a href="http://facebook.com"><FaFacebook /></a>
          <a href="http://instagram.com/wingsinternationaledu"><FaInstagram /></a>
          <a href="http://twitter.com"><FaTwitter /></a>
          <a href="http://linkedin.com/"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;