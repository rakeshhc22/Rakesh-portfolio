import React from "react";
import "../styles/contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! (Form handling not yet implemented)");
  };

  return (
    <section className="contact" id="contact">
      <h2>
        Get in <span className="highlight">Touch</span>
      </h2>

      <div className="contact-container">
        {/* Info Cards */}
        <div className="contact-info">
          <div className="info-card">
            <div className="contact-icon phone-icon">
              <FaPhoneAlt />
            </div>
            <div>
              <h4>Phone</h4>
              <p>+91 6361697944</p>
            </div>
          </div>

          <div className="info-card">
            <div className="contact-icon email-icon">
              <FaEnvelope />
            </div>
            <div>
              <h4>Email</h4>
              <p>rakeshchandru21@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="contact-icon location-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>Address</h4>
              <p>Tiptur, Karnataka, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
