import React from "react";
import "../styles/contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>
        Contact <span className="highlight">Info</span>
      </h2>

      <div className="contact-container">
        {/* Info Cards */}
        <div className="contact-info">
          <div className="info-card phone">
  <FaPhoneAlt className="contact-icon phone-icon" />
  <div>
    <h4>Phone</h4>
    <p>+91 6361697944</p>
  </div>
</div>

<div className="info-card email">
  <FaEnvelope className="contact-icon email-icon" />
  <div>
    <h4>Email</h4>
    <p>rakeshchandru21@gmail.com</p>
  </div>
</div>

<div className="info-card location">
  <FaMapMarkerAlt className="contact-icon location-icon" />
  <div>
    <h4>Address</h4>
    <p>Tiptur, Karnataka, India</p>
  </div>
</div>
        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message Sent! (Form handling not yet implemented)");
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
