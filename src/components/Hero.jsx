import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Added icons

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const phrases = [
    "I build real-world apps",
    "I analyze data",
    "I turn ideas into code"
  ];

  useEffect(() => {
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let typingTimeout;

    const type = () => {
      if (count === phrases.length) count = 0;
      currentText = phrases[count];
      letter = currentText.slice(0, ++index);
      setTypedText(letter);

      if (letter.length === currentText.length) {
        typingTimeout = setTimeout(() => {
          index = 0;
          count++;
          type();
        }, 2000);
      } else {
        typingTimeout = setTimeout(type, 100);
      }
    };

    type();
    return () => clearTimeout(typingTimeout);
  }, []);

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 120, density: { enable: true, value_area: 600 } },
          color: { value: ["#ffffff", "#f9a826", "#00ffff", "#ff66cc"] },
          shape: { type: ["circle", "edge", "star"], stroke: { width: 1, color: "#f9a826" } },
          opacity: { value: 0.6, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.1, sync: false } },
          size: { value: 5, random: true, anim: { enable: true, speed: 1.2, size_min: 0.8, sync: false } },
          move: {
            enable: true, speed: 0.9, direction: "top", random: true,
            straight: false, out_mode: "out",
            attract: { enable: true, rotateX: 1200, rotateY: 600 }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "remove" }, resize: true },
          modes: { repulse: { distance: 120, duration: 0.4 }, remove: { particles_nb: 3 } }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div id="particles-js"></div>

      <div className="hero-glass">
        <h1>Hi, I'm Rakesh H C</h1>
        <p><span className="typing">{typedText}</span></p>

        <a href="Rakesh HC.pdf" className="resume-btn" target="_blank" rel="noreferrer">
          Check Resume
        </a>

        {/* Social Icons */}
        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/rakesh-h-c-7553b5229/" target="_blank" rel="noreferrer" className="social-icon linkedin">
            <FaLinkedin />
          </a>
          <a href="https://github.com/rakeshhc22" target="_blank" rel="noreferrer" className="social-icon github">
            <FaGithub />
          </a>
        </div>
      </div>
      

      <div className="scroll-down"></div>
    </section>
  );
};

export default Hero;
