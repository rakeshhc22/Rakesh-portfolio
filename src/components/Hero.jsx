import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Hero = () => {
  const [typedText, setTypedText] = useState("");

  const phrases = [
    "I build real-world apps",
    "I analyze and tell stories with data",
    "I turn ideas into working code"
  ];

  useEffect(() => {
    let count = 0;
    let index = 0;
    let typingTimeout;

    const type = () => {
      if (count === phrases.length) count = 0;
      const currentText = phrases[count];
      const letter = currentText.slice(0, ++index);

      setTypedText(letter);

      if (letter.length === currentText.length) {
        typingTimeout = setTimeout(() => {
          index = 0;
          count++;
          type();
        }, 1800);
      } else {
        typingTimeout = setTimeout(type, 90);
      }
    };

    type();
    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-glass">
        <h1 className="hero-name">👋 Hi, I'm Rakesh H C</h1>
        <p className="hero-tagline">Full‑Stack Developer & Data Enthusiast</p>

        

        <p className="typing">{typedText}</p>

        <p className="hero-subtext">
          Passionate about building production‑ready web apps, data‑driven
          dashboards and automation tools that solve real problems and deliver
          clean user experiences.
        </p>

        <div className="hero-actions">
  <a
    href="/Rakesh-portfolio/Rakesh _HC.pdf"
    className="resume-btn"
    target="_blank"
    rel="noreferrer"
  >
    Check Resume
  </a>
          <a href="#projects" className="hero-secondary-btn">
            View Projects
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://www.linkedin.com/in/rakesh-h-c-7553b5229/"
            target="_blank"
            rel="noreferrer"
            className="social-icon linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rakeshhc22"
            target="_blank"
            rel="noreferrer"
            className="social-icon github"
          >
            
            <FaGithub />
          </a>
            <a
  href="https://leetcode.com/u/RakeshHC/"
  target="_blank"
  rel="noreferrer"
  className="social-icon leetcode"
>
  <SiLeetcode />
</a>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;
