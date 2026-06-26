import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const SITE_KEY = "6LfuIaErAAAAAPwUqfVMKMGRtFpE0TExTENN-gDi"; // your reCAPTCHA v3 site key

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  // Get reCAPTCHA v3 token
  const getRecaptchaToken = () =>
    new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject("reCAPTCHA not loaded");
        return;
      }
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(SITE_KEY, { action: "submit" })
          .then(resolve)
          .catch(reject);
      });
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkboxChecked) {
      alert("Please check the terms checkbox before submitting.");
      return;
    }
    setIsSubmitting(true);

    try {
      const token = await getRecaptchaToken();
      if (!token) {
        alert("Failed to get reCAPTCHA token.");
        setIsSubmitting(false);
        return;
      }

      const form = e.target;
      const formData = new FormData(form);
      formData.append("g-recaptcha-response", token);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw08OWQeKnUrHfbDTUcNQy6BjTehwJ9SJnMRTCsI7OLuv_62P5wdInG02LSoGIc3htN4Q/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
        setCheckboxChecked(false);
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Something went wrong.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title fade-in">
          Get In <span className="highlight">Touch</span>
        </h2>
        <div className="contact-content">
          {/* Left Info */}
          <div className="contact-info slide-in-left delay-1">
            <h3>Contact Information</h3>
            <div className="info-item">
              <FaEnvelope className="fa-icon" />
              <span>mr.raiprabhat@gmail.com</span>
            </div>
            <div className="info-item">
              <FaPhone className="fa-icon" />
              <span>+977-9842485969</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="fa-icon" />
              <span>Koshi, Nepal</span>
            </div>
            <div className="info-item">
              <FaClock className="fa-icon" />
              <span>Everyday, 8pm–11pm</span>
            </div>

            {/* Socials */}
            <div className="social-links">
              <a
                href="https://github.com/raipravat"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/mr_raipravat"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://t.me/raipravat101"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
              <a
                href="https://wa.me/9779842485969"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Map iframe */}
            <div className="map-container fade-in delay-2">
              <iframe
                title="Itahari, Nepal Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.769267177233!2d87.26807071503365!3d26.66413598324207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5b8d548d8eea7%3A0x1a2b8264b1bf21d0!2sItahari%20Sub-Metropolitan%20City%2C%20Itahari%2045630%2C%20Nepal!5e0!3m2!1sen!2sus!4v1691676722443!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="contact-form"
            id="contactForm"
          >
            <div className="form-group fade-in delay-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                required
              />
            </div>
            <div className="form-group fade-in delay-3">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="email"
                required
              />
            </div>
            <div className="form-group fade-in delay-4">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="form-group fade-in delay-5">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>

            {/* Terms checkbox */}
            <div className=" fade-in delay-5" style={{ marginBottom: "1rem" }}>
              <label>
                <input
                  type="checkbox"
                  checked={checkboxChecked}
                  onChange={() => setCheckboxChecked(!checkboxChecked)}
                  required
                />{" "}
                I agree to the terms and conditions
              </label>
            </div>

            {/* No visible reCAPTCHA widget for v3 */}

            <div className="button-wrapper">
              <button
                type="submit"
                className="submit-btn fade-in delay-5"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
