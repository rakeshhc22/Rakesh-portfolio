import React from 'react';
import '../styles/educations.css';
import mceImg from '../assets/background/MCE.png';
import hksPuImg from '../assets/background/PU.png';
import hksSchoolImg from '../assets/background/School.png';

const Education = () => {
  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-box">
          <img 
            src={mceImg} 
            alt="Malnad College of Engineering front view" 
            className="education-image"
          />
          <h3>Bachelor of Engineering (BE)</h3>
          <p><strong>Institution:</strong> Malnad College of Engineering</p>
          <p><strong>Duration:</strong> 2021 – 2025</p>
          <p><strong>CGPA:</strong> 8.1</p>
          
        </div>

        <div className="education-box">
          <img 
            src={hksPuImg} 
            alt="HKS PU College front view" 
            className="education-image"
          />
          <h3>Pre-University (PU)</h3>
          <p><strong>Institution:</strong> HKS PU College</p>
          <p><strong>Board:</strong> State Board of Karnataka</p>
          <p><strong>Duration:</strong> 2019 – 2021</p>
          <p><strong>Percentage:</strong> 94.2%</p>
          
        </div>

        <div className="education-box">
          <img 
            src={hksSchoolImg} 
            alt="HKS International School front view" 
            className="education-image"
          />
          <h3>10th Grade</h3>
          <p><strong>Institution:</strong> HKS International School, Hassan</p>
          <p><strong>Board:</strong> CBSE</p>
          <p><strong>Year:</strong> 2019</p>
          <p><strong>Percentage:</strong> 82.1%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
