// src/utils/particles.js

export const homeParticles = {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 600 } },
    color: { value: ["#ffffff", "#f9a826", "#00ffff", "#ff66cc"] },
    shape: { type: ["circle", "edge", "star"], stroke: { width: 1, color: "#f9a826" } },
    opacity: { value: 0.6, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.1 } },
    size: { value: 5, random: true, anim: { enable: true, speed: 1.2, size_min: 0.8 } },
    move: { enable: true, speed: 0.9, direction: "top", random: true, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "remove" }, resize: true },
    modes: { repulse: { distance: 120, duration: 0.4 }, remove: { particles_nb: 3 } }
  },
  retina_detect: true
};

export const aboutParticles = {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 700 } },
    color: { value: "#f9a826" },
    shape: { type: "circle" },
    opacity: { value: 0.4, random: true },
    size: { value: 3, random: true },
    move: { enable: true, speed: 1.2, direction: "none", out_mode: "out" }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } },
    modes: { grab: { distance: 150 }, push: { particles_nb: 3 } }
  },
  retina_detect: true
};

export const educationParticles = {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 800 } },
    color: { value: "#f9a826" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 2.5, random: true },
    move: { enable: true, speed: 1, out_mode: "out" }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } },
    modes: { grab: { distance: 120 }, push: { particles_nb: 3 } }
  },
  retina_detect: true
};

export const skillsParticles = {
  particles: {
    number: { value: 200, density: { enable: true, value_area: 1000 } },
    color: { value: ["#f9a826", "#ffffff", "#ffdd57"] },
    shape: { type: "circle" },
    opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1.2, opacity_min: 0.2 } },
    size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.8 } },
    move: { enable: true, speed: 0.5, direction: "top", random: true, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "remove" }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 }, remove: { particles_nb: 3 } }
  },
  retina_detect: true
};

export const experienceParticles = {
  particles: {
    number: { value: 65, density: { enable: true, value_area: 900 } },
    color: { value: ["#f9a826", "#ffffff"] },
    shape: { type: "edge", stroke: { width: 2, color: "#f9a826" } },
    opacity: { value: 0.6, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.2 } },
    size: { value: 4, random: true, anim: { enable: true, speed: 1.2, size_min: 0.8 } },
    move: { enable: true, speed: 0.7, direction: "top", random: true, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "remove" }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 }, remove: { particles_nb: 2 } }
  },
  retina_detect: true
};

export const certificateParticles = {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 900 } },
    color: { value: "#ffffff" },
    shape: { type: "star", stroke: { width: 0, color: "#000000" } },
    opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
    size: { value: 5, random: true },
    move: { enable: true, speed: 1, direction: "top", random: true, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "remove" }, resize: true },
    modes: { repulse: { distance: 120, duration: 0.6 }, remove: { particles_nb: 2 } }
  },
  retina_detect: true
};
