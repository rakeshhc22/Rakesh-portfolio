import React from "react";
import "../styles/about.css";
import myImage from "../assets/projects/Image.jpg";

import { FaCode, FaDatabase } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { GiBrain } from "react-icons/gi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-bg-animation"></div>
      
      <div className="about-header">
        <h2>About Me</h2>
        <div className="section-glow-line"></div>
      </div>

      <div className="about-container">
        <div className="about-img-container">
          <div className="image-ring"></div>
          <img src={myImage} alt="Rakesh HC" className="profile-image" />
          <div className="image-glow"></div>
        </div>

        <div className="about-main">
          <div className="about-intro">
            <p>
              Motivated and detail-oriented engineering graduate with a strong passion for building efficient, user-friendly, and impactful software
              solutions. Skilled in writing clean, maintainable code and eager to apply problem-solving abilities to real-world projects. Enthusiastic
              about continuous learning, teamwork, and adapting to new technologies to contribute effectively in dynamic development environments.
            </p>
          </div>

          <div className="about-stats">
            
          </div>

          <div className="about-cards">
            <div className="about-card" data-skill="frontend">
              <div className="about-card-header">
                <FaCode className="about-icon" />
                <h3>Frontend</h3>
              </div>
              <p>
                Crafting responsive, accessible interfaces with React and the
                MERN stack using modern JavaScript and Tailwind.
              </p>
            </div>

            <div className="about-card" data-skill="analytics">
              <div className="about-card-header">
                <SiGoogleanalytics className="about-icon" />
                <h3>Data Analytics</h3>
              </div>
              <p>
                Cleaning, exploring and visualizing data with Python, Excel,
                Power BI and SQL to generate clear insights.
              </p>
            </div>

            <div className="about-card" data-skill="backend">
              <div className="about-card-header">
                <FaDatabase className="about-icon" />
                <h3>Backend</h3>
              </div>
              <p>
                Building secure RESTful APIs with Node.js & Express and managing
                data with PostgreSQL and MongoDB.
              </p>
            </div>

            <div className="about-card" data-skill="mindset">
              <div className="about-card-header">
                <GiBrain className="about-icon" />
                <h3>Mindset</h3>
              </div>
              <p>
                Curious, strong in DS & Algo and always iterating to ship
                solutions that genuinely help users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
