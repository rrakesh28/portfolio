import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
