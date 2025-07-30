import React, { useEffect } from "react";
import "../styles/skills.css";
import { aboutParticles } from "../utils/particles";

const Skills = () => {
  useEffect(() => {
    // Load particles for Skills section
    window.particlesJS("skills-particles", {
      particles: {
        number: { value: 200, density: { enable: true, value_area: 1000 } },
        color: { value: ["#f9a826", "#ffffff", "#ffdd57"] },
        shape: { type: "circle" },
        opacity: {
          value: 0.6,
          random: true,
          anim: { enable: true, speed: 1.2, opacity_min: 0.2, sync: false }
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 2, size_min: 0.8, sync: false }
        },
        move: {
          enable: true,
          speed: 0.5,
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
          remove: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }, []);

  const skillsData =[
  { 
    icon: "fab fa-js-square", 
    name: "JavaScript", 
    desc: "Hands-on with ES6+ syntax, DOM manipulation, event handling, asynchronous programming using Promises and async/await. Experienced in client-side form validation, integrating third-party APIs, and building interactive UI components for modern web applications." 
  },
  { 
    icon: "fab fa-python", 
    name: "Python", 
    desc: "Extensive experience in data analysis, automation scripting, and backend development. Proficient with Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn for data processing and visualization. Developed REST APIs and microservices using Flask." 
  },
  { 
    icon: "fab fa-java", 
    name: "Java", 
    desc: "Strong knowledge of object-oriented programming principles, multithreading, JDBC, and collections framework. Built backend services, desktop applications, and academic projects using Java. Familiar with Spring Boot for web application development." 
  },
  { 
    icon: "fab fa-react", 
    name: "React", 
    desc: "Experienced in building dynamic SPAs using functional components, hooks (useState, useEffect, useContext), React Router, Axios, and state management libraries. Designed responsive UI using Bootstrap, Tailwind, and Material-UI." 
  },
  { 
    icon: "fas fa-laptop-code", 
    name: "Web Development", 
    desc: "Full-stack web development expertise with HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, Node.js, and Express.js. Built responsive, cross-browser compatible websites and implemented backend APIs to create complete web solutions." 
  },
  { 
    icon: "fas fa-server", 
    name: "Back-End & APIs", 
    desc: "Proficient in creating and managing RESTful APIs using Flask and Express.js. Skilled in handling JSON data, implementing authentication/authorization, CRUD operations, and integrating backend services with frontend applications." 
  },
  { 
    icon: "fas fa-database", 
    name: "SQL", 
    desc: "Expert in SQL query writing, joins, subqueries, aggregate functions, indexing, and optimization. Experienced with PostgreSQL and MySQL for schema design, stored procedures, and data analytics tasks." 
  },
  { 
    icon: "fas fa-chart-pie", 
    name: "Power BI", 
    desc: "Designed and developed interactive dashboards, KPIs, and reports. Skilled in connecting multiple data sources, creating DAX measures, and transforming raw data into meaningful visualizations for decision-making." 
  },
  { 
    icon: "fas fa-chart-line", 
    name: "Data Analytics", 
    desc: "Proficient in collecting, cleaning, and analyzing datasets using Python, Excel, and BI tools. Strong understanding of statistical analysis, data modeling, trend forecasting, and business insights generation." 
  },
  { 
    icon: "fas fa-file-excel", 
    name: "Excel", 
    desc: "Advanced Excel skills including pivot tables, VLOOKUP, INDEX-MATCH, conditional formatting, dynamic dashboards, and macros. Used for large dataset management, automation, and data visualization." 
  }
]


  return (
    <div className="skills-section-wrapper">
      <div id="skills-particles"></div>
      <section id="skills" className="skills">
        <h2>SKILLS</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <i className={skill.icon}></i>
                  <h3>{skill.name}</h3>
                </div>
                <div className="card-back">
                  <p>{skill.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
