import React, { useState } from 'react';
import '../styles/projects.css';

import agriImg from '../assets/projects/Agri.png';
import canteenImg from '../assets/projects/Canteen.png';
import bookImg from '../assets/projects/Book.png';
import portfolioImg from '../assets/projects/Portfolio.png';
import churnImg from '../assets/projects/chrun.jpg';
import queueImg from '../assets/projects/Queue.png';
import eegImg from '../assets/projects/EEG.png';
import algoTradingImg from '../assets/projects/algo.png';
import aiChatImg from '../assets/projects/aiChat.png';
import opsImg from '../assets/projects/Nexaserv.png'; // 🔁 Add your image as Ops.png in assets/projects/
import financeBackendImg from '../assets/projects/Finance.png';
import scheduleFlowImg from '../assets/projects/Schedule.png';

const projectsData = [
  {
    img: agriImg,
    title: "Smart Agriculture System",
    desc: "A machine learning-powered platform for crop disease detection and yield prediction.",
    tech: "React.js, Flask, TensorFlow, PostgreSQL",
    link: "https://github.com/rakeshhc22/Smart-Agriculture"
  },
  {
    img: canteenImg,
    title: "Canteen Management System",
    desc: "A full-stack digital food ordering system for college canteens.",
    tech: "React.js, Flask, PostgreSQL",
    link: "https://github.com/rakeshhc22/Canteen-Management"
  },
  {
    img: bookImg,
    title: "Book Review Platform",
    desc: "Interactive platform for users to browse, rate, and review books.",
    tech: "React.js, MongoDB, Express.js, Node.js",
    link: "https://github.com/rakeshhc22/book-review-platform"
  },
  {
    img: portfolioImg,
    title: "Responsive Portfolio Website",
    desc: "Personal portfolio site with animations and particle backgrounds.",
    tech: "HTML, CSS, JavaScript, ScrollReveal",
    link: "https://rakeshhc22.github.io/Rakesh-portfolio"
  },
  {
    img: churnImg,
    title: "Customer Churn Prediction Model",
    desc: "ML model to predict customer churn using historical data.",
    tech: "Python, Pandas, Scikit-learn, Matplotlib",
    link: "https://github.com/rakeshhc22/Customer-Churn-Prediction"
  },
  {
    img: queueImg,
    title: "Queue Management System",
    desc: "Web app for managing customer queues with real-time updates.",
    tech: "React.js, Node.js, MongoDB, Socket.io",
    link: "https://github.com/rakeshhc22/queue-management-system"
  },
  {
    img: eegImg,
    title: "EEG Seizure Prediction System",
    desc: "ML system predicting epileptic seizures using EEG signals.",
    tech: "Python, TabNet, Scikit-learn, Matplotlib",
    link: "https://github.com/rakeshhc22/NeuroDetect"
  },
  {
    img: algoTradingImg,
    title: "Algo Trading Bot",
    desc: "Automated trading bot with Dhan API and WebSocket streaming.",
    tech: "Python, Dhan API, WebSockets, Pandas",
    link: "https://github.com/rakeshhc22/algo-trading-bot"
  },
  {
    img: aiChatImg,
    title: "AI Chat System",
    desc: "A full-stack AI chat application with real-time messaging and ML integration.",
    tech: "React.js, FastAPI, Python, WebSockets",
    link: "https://github.com/rakeshhc22/ai-chat-system"
  },
  {
    img: opsImg,
    title: "AI-Powered Unified Operations Platform",
    desc: "Full-stack SaaS platform centralizing booking, staff assignment, inventory tracking & customer communication.",
    tech: "Next.js, Node.js, PostgreSQL",
    link: "https://nexaserv-frontend.vercel.app/"
  },
  {
    img: financeBackendImg,
    title: "Finance Data Processing",
    desc: "A secure backend system for processing financial data with role-based access control, JWT and REST APIs.",
    tech: "Node.js, Express.js, MongoDB, JWT, RBAC",
    link: "https://github.com/rakeshhc22/Finance-Data-Processing-and-Access-Control-Backend"
  },
  {
    img: scheduleFlowImg,
    title: "ScheduleFlow",
    desc: "A modern full-stack scheduling application to manage tasks, events, and reminders with an intuitive calendar interface.",
    tech: "React.js, Node.js, Express.js, MongoDB",
    link: "https://github.com/rakeshhc22/ScheduleFlow"
  }
];

// Reusable card component — avoids repetition and makes transitions cleaner
const ProjectCard = ({ project, position }) => (
  <div className={`carousel-card ${position}`}>
    <img src={project.img} alt={project.title} />
    <h3>{project.title}</h3>
    <p>{project.desc}</p>
    <p><strong>Technologies:</strong> {project.tech}</p>
    <a href={project.link} target="_blank" rel="noreferrer" className="btn">View Project</a>
  </div>
);

const Projects = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const total = projectsData.length;
  const wrap = (i) => (i % total + total) % total;

  const moveSlide = (step) => {
    if (animating) return; // prevents rapid clicking glitch
    setAnimating(true);
    setSlideIndex((prev) => wrap(prev + step));
    setTimeout(() => setAnimating(false), 400); // matches CSS transition duration
  };

  return (
    <section id="projects" className="projects">
      <h2>PROJECTS</h2>
      <div className="carousel-container">
        <div className="carousel">
          <ProjectCard project={projectsData[wrap(slideIndex - 1)]} position="left" />
          <ProjectCard project={projectsData[slideIndex]} position="active" />
          <ProjectCard project={projectsData[wrap(slideIndex + 1)]} position="right" />
        </div>

        <div className="nav-arrows">
          <button className="nav-btn left" onClick={() => moveSlide(-1)}>❮</button>
          <button className="nav-btn right" onClick={() => moveSlide(1)}>❯</button>
        </div>

        <div className="dots">
          {projectsData.map((_, i) => (
            <span
              key={i}
              className={i === slideIndex ? 'dot active' : 'dot'}
              onClick={() => !animating && setSlideIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;