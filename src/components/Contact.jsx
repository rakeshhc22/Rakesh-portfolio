import React, { useRef, useState } from "react";
import "../styles/contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_qfpnwhq",   // 🔁 Replace this
        "template_1znsr0t",  // 🔁 Replace this
        formRef.current,
        "Og1oJOUhZi426tJjZ"    // 🔁 Replace this
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
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
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
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

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-success">✅ Message sent! I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="form-error">❌ Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;