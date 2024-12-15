import React from 'react';
import { FaMoneyBillAlt, FaGlobe, FaLanguage, FaRegLightbulb } from 'react-icons/fa'; 
import { IoIosPeople } from 'react-icons/io';
import { BsShieldCheck } from 'react-icons/bs';
import { GiTeacher, GiPayMoney } from 'react-icons/gi';

function BenefitsAbroadPage() {
  const benefits = [
    {
      icon: <GiPayMoney />,
      title: 'Low Tuition Fees',
      text: 'Tuition abroad can start as low as ₹12 lakh, with flexible installment options.'
    },
    {
      icon: <GiTeacher />,
      title: 'No Donation',
      text: 'No hefty donations required, unlike many Indian private colleges.'
    },
    {
      icon: <FaGlobe />,
      title: 'Career Gateway',
      text: 'Global opportunities in the UK, Canada, and more, often without extra licensing exams.'
    },
    {
      icon: <FaLanguage />,
      title: 'English Medium Instruction',
      text: 'Study in English in Russia, Philippines, Kazakhstan, and more.'
    },
    {
      icon: <FaRegLightbulb />,
      title: 'Advanced Curriculum',
      text: 'Access cutting-edge curriculum, research, and technology.'
    },
    {
      icon: <BsShieldCheck />,
      title: 'MCI/WHO Approved',
      text: 'Universities are recognized by MCI and WHO, ensuring global practice eligibility.'
    },
    {
      icon: <IoIosPeople />,
      title: 'No Hidden Costs',
      text: 'Transparent consulting with no undisclosed fees.'
    },
    {
      icon: <FaMoneyBillAlt />,
      title: 'Global Job Opportunities',
      text: 'Practice anywhere in the world, given you meet the eligibility criteria.'
    },
  ];

  return (
    <div className="benefits-abroad-page container">
      <h2 className="section-title">Why Should I Study MBBS Abroad?</h2>
      <p className="section-subtitle">Explore the key benefits and make an informed decision</p>
      <div className="benefits-grid">
        {benefits.map((b, i) => (
          <div className="benefit-card" key={i}>
            <div className="benefit-icon">{b.icon}</div>
            <h4>{b.title}</h4>
            <p>{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BenefitsAbroadPage;