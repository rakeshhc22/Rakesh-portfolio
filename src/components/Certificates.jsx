import React, { useEffect } from "react";
import "../styles/certificates.css";
import { aboutParticles } from "../utils/particles";

const Certificates = () => {
  useEffect(() => {
    // Star Dust Particle Effect for Certificates section
    window.particlesJS("Certificate-particles", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 900 } },
        color: { value: "#ffffff" },
        shape: { type: "star", stroke: { width: 0, color: "#000000" } },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: { value: 5, random: true },
        move: {
          enable: true,
          speed: 1,
          direction: "top",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "remove" },
          resize: true
        },
        modes: {
          repulse: { distance: 120, duration: 0.6 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true
    });
  }, []);

  const certificates = [
    { icon: "fas fa-user-graduate", title: "Big Data Computing", issuer: "NPTEL", year: "2024", file: "SoftSkills.pdf" },
    { icon: "fab fa-python", title: "Introduction to Python Programming", issuer: "Basics of Python Development", year: "2023", file: "python.pdf" },
    { icon: "fas fa-chart-pie", title: "Power BI", issuer: "Simplilearn", year: "2025", file: "Power-BI.pdf" },
    { icon: "fas fa-database", title: "SQL Advanced Developer", issuer: "HackerRank (Gold Badge)", year: "2025", file: "SQL.pdf" },
    { icon: "fas fa-clipboard-check", title: "Data Analytics Internship", issuer: "DS-Edify", year: "2025", file: "Data Analytics.pdf" },
    { icon: "fas fa-cloud", title: "Salesforce", issuer: "Simplilearn", year: "2025", file: "Salesforce.pdf" }
  ];

  return (
    <div className="certificate-section-wrapper">
      <div id="Certificate-particles"></div>
      <section id="certifications" className="certifications">
        <h2>CERTIFICATION</h2>
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
      </section>
    </div>
  );
};

export default Certificates;
