document.addEventListener("DOMContentLoaded", () => {
  // Typing Effect in Hero Section
  const text = [
    "I build real-world apps",
    "I analyze data",
    "I turn ideas into code"
  ];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  function type() {
    if (count === text.length) count = 0;
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    const typingElement = document.querySelector(".typing");
    if (typingElement) typingElement.textContent = letter;

    if (letter.length === currentText.length) {
      setTimeout(() => {
        index = 0;
        count++;
        setTimeout(type, 500);
      }, 2000);
    } else {
      setTimeout(type, 100);
    }
  }

  type();

  // Scroll Reveal Animation
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navbar = document.querySelector(".navbar");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("show");
  });
}

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
}


//home
particlesJS("particles-js", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area:600
      }
    },
    color: {
      value: ["#ffffff", "#f9a826", "#00ffff", "#ff66cc"]
    },
    shape: {
      type: ["circle", "edge", "star"],
      stroke: {
        width: 1,
        color: "#f9a826"
      }
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 0.8,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 1.2,
        size_min: 0.8,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 0.9,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      attract: {
        enable: true,
        rotateX: 1200,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "remove"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 120,
        duration: 0.4
      },
      remove: {
        particles_nb: 3
      }
    }
  },
  retina_detect: true
});

  // ParticlesJS - About Section
  particlesJS("about-particles", {
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 700
        }
      },
      color: { value: "#f9a826" },
      shape: { type: "circle" },
      opacity: { value: 0.4, random: true },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        out_mode: "out"
      }
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

  // ParticlesJS - Education Section
  particlesJS("education-particles", {
    particles: {
      number: {
        value:120,
        density: {
          enable: true,
          value_area:800
        }
      },
      color: { value: "#f9a826" },
      shape: { type: "circle" },
      opacity: { value: 0.3, random: true },
      size: { value: 2.5, random: true },
      move: {
        enable: true,
        speed: 1,
        out_mode: "out"
      }
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

  //SKILLS
particlesJS("skills-particles", {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: ["#f9a826", "#ffffff", "#ffdd57"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 1.2,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.8,
        sync: false
      }
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
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "remove"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      remove: {
        particles_nb: 3
      }
    }
  },
  retina_detect: true
});

particlesJS("Experience-particles", {
  particles: {
    number: {
      value: 65,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: ["#f9a826", "#ffffff"]
    },
    shape: {
      type: "edge", // looks like small rotating rings when animated
      stroke: {
        width: 2,
        color: "#f9a826"
      }
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 0.8,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 1.2,
        size_min: 0.8,
        sync: false
      }
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
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "remove"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});


// Certificate - Star Dust Particle Effect
particlesJS("Certificate-particles", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "star",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true
    },
    move: {
      enable: true,
      speed: 1,
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
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "remove"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 120,
        duration: 0.6
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

  // Carousel Functionality
  const cards = document.querySelectorAll(".carousel-card");
  const dotsContainer = document.getElementById("carousel-dots");
  let slideIndex = 0;

  function updateCarousel() {
    cards.forEach((card, i) => {
      card.classList.remove("active", "left", "right");

      if (i === slideIndex) {
        card.classList.add("active");
      } else if (i === (slideIndex - 1 + cards.length) % cards.length) {
        card.classList.add("left");
      } else if (i === (slideIndex + 1) % cards.length) {
        card.classList.add("right");
      }
    });

    updateDots();
  }

  function moveSlide(step) {
    slideIndex = (slideIndex + step + cards.length) % cards.length;
    updateCarousel();
  }

  function updateDots() {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === slideIndex) dot.classList.add("active");
      dot.addEventListener("click", () => {
        slideIndex = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    }
  }

  updateCarousel();
  window.moveSlide = moveSlide;

  // Certificates Scroll Reveal
  const certCards = document.querySelectorAll(".cert-card");
  const certObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  certCards.forEach(card => {
    certObserver.observe(card);
  });
});
