import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wscwisw",
        "template_ztg84xr",
        form.current,
        "KsJuIHP-8v263P5y5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__options-icon" />
            <h4>Email</h4>
            <h5>rebbavarapurakesh@gmail.com</h5>
            <a href="mailto:rebbavarapurakesh@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__options-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 72880 71875</h5>
            <a href="wa.me/+917288071875" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="You Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="You Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
