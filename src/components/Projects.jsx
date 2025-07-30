import React, { useState } from "react";
import "../styles/projects.css";

import agriImg from "../assets/projects/Agri.png";
import canteenImg from "../assets/projects/Canteen.png";
import bookImg from "../assets/projects/Book.png";
import portfolioImg from "../assets/projects/Portfolio.png";
import churnImg from "../assets/projects/chrun.jpg";
import queueImg from "../assets/projects/Queue.png";

const Projects = () => {
  const projectsData = [
    {
      img: agriImg,
      title: "Smart Agriculture System",
      desc: "A machine learning-powered platform for crop disease detection and yield prediction. Helps farmers make informed decisions by analyzing soil data, weather conditions, and crop health.",
      tech: "React.js, Flask, TensorFlow, PostgreSQL",
      link: "https://github.com/rakeshhc22/Smart-Agriculture",
    },
    {
      img: canteenImg,
      title: "Canteen Management System",
      desc: "A full-stack digital food ordering system for college canteens. Includes a user app for ordering, an admin panel for menu updates, and a sales analytics dashboard.",
      tech: "React.js, Flask, PostgreSQL, JWT",
      link: "https://github.com/rakeshhc22/Canteen-Management",
    },
    {
      img: bookImg,
      title: "Book Review Platform",
      desc: "An interactive platform for users to browse, rate, and review books. Features include user authentication, search filters, and a recommendation system.",
      tech: "React.js, MongoDB, Express.js, Node.js",
      link: "https://github.com/rakeshhc22/book-review-platform",
    },
    {
      img: portfolioImg,
      title: "Responsive Portfolio Website",
      desc: "A personal portfolio site showcasing my skills, projects, and experience. Designed with animations, particle backgrounds, and smooth scrolling for a modern UI.",
      tech: "HTML, CSS, JavaScript, ScrollReveal",
      link: "https://rakeshhc22.github.io/Rakesh-portfolio/",
    },
    {
      img: churnImg,
      title: "Customer Churn Prediction Model",
      desc: "A machine learning model to predict customer churn for subscription services. Uses historical data to identify customers likely to leave and improve retention strategies.",
      tech: "Python, Pandas, Scikit-learn, Matplotlib",
      link: "https://github.com/rakeshhc22/Customer-Churn-Prediction",
    },
    {
      img: queueImg,
      title: "Queue Management System",
      desc: "A web app for managing customer queues in service centers. Provides real-time status updates and helps optimize wait times for better customer experience.",
      tech: "React.js, Node.js, MongoDB, Socket.io",
      link: "https://github.com/rakeshhc22/queue-management-system",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const moveSlide = (step) => {
    setSlideIndex(
      (prev) => (prev + step + projectsData.length) % projectsData.length
    );
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  // Helper to wrap index
  const getWrappedIndex = (index) => {
    return (index + projectsData.length) % projectsData.length;
  };

  return (
    <section id="projects" className="projects">
      <h2>PROJECTS</h2>
      <div className="carousel-container">
        <div className="carousel">
          {/* LEFT card */}
          <div className="carousel-card left">
            <img
              src={projectsData[getWrappedIndex(slideIndex - 1)].img}
              alt={projectsData[getWrappedIndex(slideIndex - 1)].title}
            />
            <h3>{projectsData[getWrappedIndex(slideIndex - 1)].title}</h3>
            <p>{projectsData[getWrappedIndex(slideIndex - 1)].desc}</p>
            <p>
              <strong>Technologies:</strong>{" "}
              {projectsData[getWrappedIndex(slideIndex - 1)].tech}
            </p>
            <a
              href={projectsData[getWrappedIndex(slideIndex - 1)].link}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View Project
            </a>
          </div>

          {/* CENTER card */}
          <div className="carousel-card active">
            <img
              src={projectsData[slideIndex].img}
              alt={projectsData[slideIndex].title}
            />
            <h3>{projectsData[slideIndex].title}</h3>
            <p>{projectsData[slideIndex].desc}</p>
            <p>
              <strong>Technologies:</strong> {projectsData[slideIndex].tech}
            </p>
            <a
              href={projectsData[slideIndex].link}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View Project
            </a>
          </div>

          {/* RIGHT card */}
          <div className="carousel-card right">
            <img
              src={projectsData[getWrappedIndex(slideIndex + 1)].img}
              alt={projectsData[getWrappedIndex(slideIndex + 1)].title}
            />
            <h3>{projectsData[getWrappedIndex(slideIndex + 1)].title}</h3>
            <p>{projectsData[getWrappedIndex(slideIndex + 1)].desc}</p>
            <p>
              <strong>Technologies:</strong>{" "}
              {projectsData[getWrappedIndex(slideIndex + 1)].tech}
            </p>
            <a
              href={projectsData[getWrappedIndex(slideIndex + 1)].link}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="nav-btn left" onClick={() => moveSlide(-1)}>
          &#10094;
        </button>
        <button className="nav-btn right" onClick={() => moveSlide(1)}>
          &#10095;
        </button>

        {/* Dots Navigation */}
        <div className="dots">
          {projectsData.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === slideIndex ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
