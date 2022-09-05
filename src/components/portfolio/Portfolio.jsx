import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/cloudkakshaa .png";
import IMG2 from "../../assets/start-card.png";
import IMG3 from "../../assets/design-appearl.jpg";
import IMG4 from "../../assets/tip-calculator.jpg";
import IMG5 from "../../assets/interative-card-form.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>CloudKakshaa</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rakeshrepos/teachforindia"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://cloudkakshaa.org"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Stats preview card</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rakeshrepos/stats-preview-card"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://frontend-stat-preview-card.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Base apparel coming soon master</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rakeshrepos/base-apparel-coming-sson-master"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://preeminent-sable-ac6077.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Tip Calculator</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rakeshrepos/tip-calculator"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://frontend-tip-calculator.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Interactive Card form</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rakeshrepos/frontend-mentor-interactive-card-form"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://frontend-interactive-card-form.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
