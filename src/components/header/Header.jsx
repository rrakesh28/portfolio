import React from "react";
import "./header.css";
import CTA from "./CTA.jsx";
import HeaderSocial from "./HeaderSocials";
import Typewriter from "typewriter-effect";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rakesh Rebbavarapu</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />

        <HeaderSocial />
        <div className="info">
          <Typewriter
            options={{
              strings: [
                "Hello Amigo!, I'm Rakesh Rebbavarapu",
                "I am a passionate Software Developer. I love building beautiful user interfaces and solving complex problems with simpler code.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
export default Header;
