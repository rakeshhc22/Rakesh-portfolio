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

const Projects = () => {
  const [slideIndex, setSlideIndex] = useState(0);

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
      tech: "React.js, Flask, PostgreSQL, JWT",
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
}
  ];

  const moveSlide = (step) => {
    setSlideIndex((prev) => (prev + step + projectsData.length) % projectsData.length);
  };

  const goToSlide = (index) => setSlideIndex(index);

  const getWrappedIndex = (index) => (index % projectsData.length + projectsData.length) % projectsData.length;

  return (
    <section id="projects" className="projects">
      <h2>PROJECTS</h2>
      <div className="carousel-container">
        <div className="carousel">
          {/* LEFT */}
          <div className="carousel-card left">
            <img src={projectsData[getWrappedIndex(slideIndex - 1)].img} alt={projectsData[getWrappedIndex(slideIndex - 1)].title} />
            <h3>{projectsData[getWrappedIndex(slideIndex - 1)].title}</h3>
            <p>{projectsData[getWrappedIndex(slideIndex - 1)].desc}</p>
            <p><strong>Technologies:</strong> {projectsData[getWrappedIndex(slideIndex - 1)].tech}</p>
            <a href={projectsData[getWrappedIndex(slideIndex - 1)].link} target="_blank" rel="noreferrer" className="btn">View Project</a>
          </div>

          {/* CENTER */}
          <div className="carousel-card active">
            <img src={projectsData[slideIndex].img} alt={projectsData[slideIndex].title} />
            <h3>{projectsData[slideIndex].title}</h3>
            <p>{projectsData[slideIndex].desc}</p>
            <p><strong>Technologies:</strong> {projectsData[slideIndex].tech}</p>
            <a href={projectsData[slideIndex].link} target="_blank" rel="noreferrer" className="btn">View Project</a>
          </div>

          {/* RIGHT */}
          <div className="carousel-card right">
            <img src={projectsData[getWrappedIndex(slideIndex + 1)].img} alt={projectsData[getWrappedIndex(slideIndex + 1)].title} />
            <h3>{projectsData[getWrappedIndex(slideIndex + 1)].title}</h3>
            <p>{projectsData[getWrappedIndex(slideIndex + 1)].desc}</p>
            <p><strong>Technologies:</strong> {projectsData[getWrappedIndex(slideIndex + 1)].tech}</p>
            <a href={projectsData[getWrappedIndex(slideIndex + 1)].link} target="_blank" rel="noreferrer" className="btn">View Project</a>
          </div>
        </div>

        <div className="nav-arrows">
          <button className="nav-btn left" onClick={() => moveSlide(-1)}>❮</button>
          <button className="nav-btn right" onClick={() => moveSlide(1)}>❯</button>
        </div>

        <div className="dots">
          {projectsData.map((_, i) => (
            <span key={i} className={i === slideIndex ? 'dot active' : 'dot'} onClick={() => goToSlide(i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
