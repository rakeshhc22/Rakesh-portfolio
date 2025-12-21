import React from 'react';
import '../styles/educations.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-box">
          <h3>Bachelor of Engineering (BE)</h3>
          <p><strong>Institution:</strong> Malnad College of Engineering</p>
          <p><strong>Duration:</strong> 2021 – 2025</p>
          <p><strong>CGPA:</strong> 8.1</p>
          <p>
            My academic journey has equipped me with a solid foundation in engineering 
            principles and hands-on experience in various technical domains.
          </p>
        </div>

        <div className="education-box">
          <h3>Pre-University (PU)</h3>
          <p><strong>Institution:</strong> HKS PU College</p>
          <p><strong>Board:</strong> State Board of Karnataka</p>
          <p><strong>Duration:</strong> 2019 – 2021</p>
          <p><strong>Percentage:</strong> 94.2%</p>
          <p>
            This academic phase honed my analytical and problem-solving skills, 
            laying a strong groundwork for my higher studies in engineering.
          </p>
        </div>

        <div className="education-box">
          <h3>10th Grade</h3>
          <p><strong>Institution:</strong> HKS International School, Hassan</p>
          <p><strong>Board:</strong> CBSE</p>
          <p><strong>Year:</strong> 2019</p>
          <p><strong>Percentage:</strong> 82.1%</p>
          <p>
            This foundational stage helped shape my academic discipline and prepared 
            me for further studies in the science and engineering fields.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
