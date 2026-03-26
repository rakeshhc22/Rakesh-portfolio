// src/components/Experience.jsx
import React from "react";
import "../styles/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">

      {/* Background orbs */}
      <span className="orb orb-1" />
      <span className="orb orb-2" />
      <span className="orb orb-3" />

      <h2>Experience</h2>

      <div className="experience-timeline">

        <div className="experience-entry">
          <div className="entry-accent" />
          <span className="role-tag">Internship</span>
          <h3>Python Developer Intern</h3>
          <div className="duration">Oct 2025 – Nov 2025</div>
          <div className="tech-list">
            {["Python", "NumPy", "Pandas", "Matplotlib", "Flask"].map(t => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
          <p>
            Worked on various Python-based projects focusing on automation and backend development.
            Gained hands-on experience with NumPy and Pandas for data manipulation and Matplotlib
            for data visualization. Also explored Flask for building lightweight web applications.
          </p>
        </div>

        <div className="experience-entry">
          <div className="entry-accent" />
          <span className="role-tag">Internship</span>
          <h3>Python & Data Analytics Intern — Dyashin Technosoft Pvt. Ltd., Bengaluru</h3>
          <div className="duration">Feb 2025 – May 2025</div>
          <div className="tech-list">
            {["Python", "Data Analytics", "Jupyter Notebook", "Excel", "SQL"].map(t => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
          <p>
            Contributed to real-time data analysis projects and a practical case study applying
            analytical methods. Used Python for data preprocessing, analysis, and visualization.
            Demonstrated skills in interpreting datasets, generating insights, and supporting
            decision-making processes.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;