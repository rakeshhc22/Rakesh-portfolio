// src/components/Experience.jsx
import React from "react";
import "../styles/experience.css";

const Experience = () => {
  return (
    <div className="experience-section-wrapper">
      
      <section id="experience" className="experience">
        <h2>EXPERIENCE</h2>

        <div className="experience-entry">
          <h3>Python Developer Intern</h3>
          <p><strong>Duration:</strong> Oct 2025 – Nov 2025</p>
          <p><strong>Technologies Used:</strong> Python, NumPy, Pandas, Matplotlib, Flask</p>
          <p>
            Worked on various Python-based projects focusing on automation and backend development.
            Gained hands-on experience with Python libraries like NumPy and Pandas for data manipulation
            and Matplotlib for data visualization. Also explored Flask for building lightweight web applications.
          </p>
        </div>

        <div className="experience-entry">
          <h3>Python & Data Analytics Intern – Dyashin Technosoft Pvt. Ltd., Bengaluru</h3>
          <p><strong>Duration:</strong> Feb 2025 – May 2025</p>
          <p><strong>Technologies Used:</strong> Python, Data Analytics, Jupyter Notebook, Excel, SQL</p>
          <p>
            Contributed to real-time data analysis projects and participated in a practical case study for applying
            analytical methods. Used Python for data preprocessing, analysis, and visualization. Demonstrated skills
            in interpreting datasets, generating insights, and supporting decision-making processes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
