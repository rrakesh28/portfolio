import React from "react";
import "./about.css";
import ME from "../../assets/me1.jpg";
import { FaAward } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experinece</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Projects</h5>
            </article>
          </div>

          <p>
            Basically, I'm a programmer with a prior experience of working as an
            intern for the project called TeachForIndia's Cloudkakshaa.
          </p>
          <p>
            I love to speak about my teachnical experiences, feel free to reach
            out to me
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
