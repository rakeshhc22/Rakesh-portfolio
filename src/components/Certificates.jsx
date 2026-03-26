import React from "react";
import "../styles/certificates.css";

/* ─── YOUR REAL CERTIFICATE DATA ──────────────────────────────── */
const certificates = [
  {
    icon: "fas fa-user-graduate",
    title: "Big Data Computing",
    issuer: "NPTEL",
    year: "2024",
    accent: "teal",
    file: `${import.meta.env.BASE_URL}SoftSkills.pdf`,
  },
  {
    icon: "fab fa-python",
    title: "Introduction to Python Programming",
    issuer: "Basics of Python Development",
    year: "2023",
    accent: "blue",
    file: `${import.meta.env.BASE_URL}python.pdf`,
  },
  {
    icon: "fas fa-chart-pie",
    title: "Power BI",
    issuer: "Simplilearn",
    year: "2025",
    accent: "coral",
    file: `${import.meta.env.BASE_URL}Power-BI.pdf`,
  },
  {
    icon: "fas fa-database",
    title: "SQL Advanced Developer",
    issuer: "HackerRank · Gold Badge",
    year: "2025",
    accent: "gold",
    file: `${import.meta.env.BASE_URL}SQL.pdf`,
  },
  {
    icon: "fas fa-clipboard-check",
    title: "Data Analytics Internship",
    issuer: "DS-Edify",
    year: "2025",
    accent: "green",
    file: `${import.meta.env.BASE_URL}Data Analytics.pdf`,
  },
  {
    icon: "fas fa-cloud",
    title: "Salesforce",
    issuer: "Simplilearn",
    year: "2025",
    accent: "purple",
    file: `${import.meta.env.BASE_URL}Salesforce.pdf`,
  },
];

/* ─── ARROW ICON ───────────────────────────────────────────────── */
const ArrowRight = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cert-arrow"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── COMPONENT ────────────────────────────────────────────────── */
const Certificates = () => {
  return (
    <section className="certificate-section-wrapper" id="certificates">
      <div className="certifications">
        <h2>
          My <span className="highlight">Certificates</span>
        </h2>

        <div className="certification-grid">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className={`cert-card accent-${cert.accent}`}
            >
              {/* ── Top row: icon + year pill ── */}
              <div className="cert-badge-row">
                <div className="cert-icon-wrap">
                  <i className={cert.icon}></i>
                </div>
                <span className="cert-year-pill">{cert.year}</span>
              </div>

              {/* ── Text ── */}
              <p className="cert-title">{cert.title}</p>
              <p className="cert-issuer">{cert.issuer}</p>

              {/* ── CTA ── */}
              <span className="cert-verify">
                View Certificate <ArrowRight />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;