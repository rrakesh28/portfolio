import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        RAKESH REBBAVARAPU
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <div className="footer__socials">
          <a href="https://linkedin.com/in/rakeshrebbavarapu" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com/rakeshrepos" target="_blank">
            <AiFillGithub />
          </a>
          <a href="https://instagram.com/theamigoooooo" target="_blank">
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="footer__copyright"></div>
    </footer>
  );
};

export default Footer;
