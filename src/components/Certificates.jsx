import React from "react";
import "../styles/certificates.css";

const Certificates = () => {
  const certificates = [
    {
      icon: "fas fa-user-graduate",
      title: "Big Data Computing",
      issuer: "NPTEL",
      year: "2024",
      file: `${import.meta.env.BASE_URL}SoftSkills.pdf`
    },
    {
      icon: "fab fa-python",
      title: "Introduction to Python Programming",
      issuer: "Basics of Python Development",
      year: "2023",
      file: `${import.meta.env.BASE_URL}python.pdf`
    },
    {
      icon: "fas fa-chart-pie",
      title: "Power BI",
      issuer: "Simplilearn",
      year: "2025",
      file: `${import.meta.env.BASE_URL}Power-BI.pdf`
    },
    {
      icon: "fas fa-database",
      title: "SQL Advanced Developer",
      issuer: "HackerRank (Gold Badge)",
      year: "2025",
      file: `${import.meta.env.BASE_URL}SQL.pdf`
    },
    {
      icon: "fas fa-clipboard-check",
      title: "Data Analytics Internship",
      issuer: "DS-Edify",
      year: "2025",
      file: `${import.meta.env.BASE_URL}Data Analytics.pdf`
    },
    {
      icon: "fas fa-cloud",
      title: "Salesforce",
      issuer: "Simplilearn",
      year: "2025",
      file: `${import.meta.env.BASE_URL}Salesforce.pdf`
    }
  ];

  return (
    <section className="certificate-section-wrapper" id="certificates">
      <div className="certifications">
        <h2>Certificates</h2>

        <div className="certification-grid">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="cert-card"
            >
              <div className="icon-box">
                <i className={cert.icon}></i>
              </div>
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="year">{cert.year}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
