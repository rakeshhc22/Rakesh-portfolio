import React, { useEffect } from "react";
import "../styles/educations.css";
import { aboutParticles } from "../utils/particles";

const Education = () => {
  useEffect(() => {
    // Load particles for Education section
    window.particlesJS("education-particles", {
      particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: "#f9a826" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 2.5, random: true },
        move: { enable: true, speed: 1, out_mode: "out" }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          grab: { distance: 120 },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <section id="education" className="education">
      <div id="education-particles" className="particles-section-bg"></div>

      <h2>EDUCATION</h2>

      <div className="education-container">
        <div className="education-box">
          <h3>Bachelor of Engineering (BE)</h3>
          <p>
            I am currently pursuing my Bachelor of Engineering (BE) from Malnad
            College of Engineering (2021–2025), with a CGPA of 7.97. My academic
            journey has equipped me with a solid foundation in engineering
            principles and hands-on experience in various technical domains.
          </p>
        </div>

        <div className="education-box">
          <h3>Pre-University (PUC)</h3>
          <p>
            I completed my Pre-University (PU) education from HKS PU College under
            the State Board of Karnataka (2019–2021), achieving a percentage of
            94.2%. This academic phase honed my analytical and problem-solving
            skills, laying a strong groundwork for my higher studies in
            engineering.
          </p>
        </div>

        <div className="education-box">
          <h3>High School</h3>
          <p>
            I completed my 10th grade in 2019 under the CBSE, HKS International
            School, Hassan, securing a percentage of 82.1%. This foundational
            stage helped shape my academic discipline and prepared me for further
            studies in the science and engineering fields.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
