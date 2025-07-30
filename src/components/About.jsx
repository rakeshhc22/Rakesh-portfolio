import React, { useEffect } from "react";
import "../styles/about.css";
import { aboutParticles } from "../utils/particles";

import Tilt from "react-parallax-tilt";

const About = () => {
  useEffect(() => {
    // Load particles for About section
    window.particlesJS("about-particles", {
      particles: {
        number: { value: 120, density: { enable: true, value_area: 700 } },
        color: { value: "#f9a826" },
        shape: { type: "circle" },
        opacity: { value: 0.4, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 1.2, direction: "none", out_mode: "out" }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          grab: { distance: 150 },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <section id="about" className="about">
      <div id="about-particles" className="particles-section-bg"></div>

      <h2>About Me</h2>

      <div className="about-container">
        <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} transitionSpeed={1500}>
  <img
    src="/Image.jpg" // replace with your image path
    alt="My Profile"
    className="hero-image-3d"
  />
</Tilt>

        

        <div className="about-main">
          <p className="about-intro">
            I'm a Full-Stack Developer and Data Analytics enthusiast who thrives
            on building clean and efficient digital experiences.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <h3>🔧 Developer</h3>
              <p>
                Proficient in MERN stack, creating responsive, accessible UIs
                using React, Tailwind, and JavaScript.
              </p>
            </div>
            <div className="about-card">
              <h3>📊 Analyst</h3>
              <p>
                Skilled in data cleaning, visualization and interpretation using
                Python, Excel, Power BI & SQL.
              </p>
            </div>
            <div className="about-card">
              <h3>💻 Backend</h3>
              <p>
                Experienced in RESTful API development with Node.js, Express.js
                and working with PostgreSQL & MongoDB.
              </p>
            </div>
            <div className="about-card">
              <h3>🚀 Fast Learner</h3>
              <p>
                Driven by curiosity, strong in DS & Algo, and constantly learning
                to deliver user-focused solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
