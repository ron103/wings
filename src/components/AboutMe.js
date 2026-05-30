import React from "react";
import founderImage from "../assets/misc/founder.jpg";

function AboutMe() {
  return (
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-me-content">
        {/* Left Column */}
        <div className="left-column">
          <img src={founderImage} alt="Chandrakant Waghmare - Founder" className="founder-image" />
          <p className="founder-caption">
            Inspired by the challenges faced by Indian students due to the high costs of medical education and the complexities of studying abroad, I, <strong>Chandrakant Waghmare</strong>, set out to simplify the process and make overseas education accessible to all.
          </p>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <p>
            Since 2018, I have been committed to assisting students in exploring and securing opportunities for overseas education. It is immensely gratifying to witness the success and satisfaction of both students and parents who have availed themselves of my services.
          </p>
          <p>
            My mission is to support academically capable students who possess the potential to excel on a global scale, overcoming the challenges they face in their home countries. I strive to be a guiding lighthouse on their educational journey, empowering them to achieve a superior life and career.
          </p>
          <p>
            There is no greater reward than seeing the positive impact I have on my students' lives, as reflected in their smiling faces and the positive feedback I receive after they are successfully placed in esteemed institutions abroad.
          </p>
          <p>
            My expertise lies in carefully placing students in institutions that align with their individual aspirations and the academic benchmarks they set for themselves. What distinguishes my approach is the firm belief in the significance of a Global Roadmap — selecting the most suitable country and university to ensure the best possible outcomes for each student’s future.
          </p>
          <p>
            At Wings International, I don’t just guide; I pave the way for brighter futures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;