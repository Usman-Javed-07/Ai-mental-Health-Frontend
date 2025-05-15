/* eslint-disable no-unused-vars */
import styles from "../components/css/Contact.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_k92klwt", // Replace with your EmailJS service ID
        "template_mv432ha", // Replace with your EmailJS template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
          to_email: "usmandeveloper07@gmail.com",
        },
        "gdoXkAfr08-uKcK0y" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactHeading}>Contact Us</h2>
        <p>
          We&apos;d love to hear from you! Feel free to reach out using the form
          below.
        </p>
        <div className={styles.contactUsSection}>
          <form className={styles.contactForm} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={styles.inputField}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={styles.inputField}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className={styles.textArea}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
          <div className={styles.contactImage}>
            <img src="./contact.jpg" alt="contact image" />
          </div>
        </div>

        <div className={styles.contactDetails}>
          <h3>Our Contact Information</h3>
          <p>
            <strong>Email:</strong> support@mindcare.com
          </p>
          <p>
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p>
            <strong>Address:</strong> NFC Institute of Engineering and Technology
          </p>
        </div>

        <div className={styles.faqSection}>
          <h3>Frequently Asked Questions</h3>
          <details>
            <summary>How do I schedule a session?</summary>
            <p className={styles.summaryPara}>
              Our AI therapist is available 24/7. Simply start a chat and get
              assistance instantly.
            </p>
          </details>
          <details>
            <summary>Is my data secure?</summary>
            <p className={styles.summaryPara}>
              Yes! We use encryption to protect all user data.
            </p>
          </details>
        </div>

        <div className={styles.mapContainer}>
          <h3>Find Us Here</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27517.671012984053!2d71.539191!3d30.221040!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzAlMTMnMTUuNyJOIDcxJzMyJzIwLjciRQ!5e0!3m2!1sen!2s!4v1638573804256!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className={styles.socialMedia}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a className={styles.fbIcon} href="#">
              <FaFacebook />
            </a>
            <a className={styles.twitIcon} href="#">
              <FaXTwitter />
            </a>
            <a className={styles.instaIcon} href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Contact;
