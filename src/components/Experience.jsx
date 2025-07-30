import React, { useEffect } from "react";
import "../styles/experience.css";
import { aboutParticles } from "../utils/particles";

const Experience = () => {
  useEffect(() => {
    // Load particles for Experience section
    window.particlesJS("Experience-particles", {
      particles: {
        number: { value: 65, density: { enable: true, value_area: 900 } },
        color: { value: ["#f9a826", "#ffffff"] },
        shape: { type: "edge", stroke: { width: 2, color: "#f9a826" } },
        opacity: {
          value: 0.6,
          random: true,
          anim: { enable: true, speed: 0.8, opacity_min: 0.2, sync: false }
        },
        size: {
          value: 4,
          random: true,
          anim: { enable: true, speed: 1.2, size_min: 0.8, sync: false }
        },
        move: {
          enable: true,
          speed: 0.7,
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
          repulse: { distance: 100, duration: 0.4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <div className="experience-section-wrapper">
      <div id="Experience-particles"></div>
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
