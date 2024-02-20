import React, { useEffect, useRef } from "react";
import githubLogo from "../images/githubLogo.png";
import linkedinLogo from "../images/linkedinLogo.png";
import emailLogo from "../images/emailLogo.png";
import "./components.css";
// TODO: Add resume and transcript
const socials = [
  {
    icon: emailLogo,
    url: "mailto: ching.ryan123@gmail.com",
  },
  {
    icon: githubLogo,
    url: "https://github.com/ryan-ching",
  },
  {
    icon: linkedinLogo,
    url: "https://www.linkedin.com/in/ching-ryan",
  },
];

const Header = ({ isHidden }) => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className={isHidden ? "header-container-hidden" : "header-container"}>
      <h1>Ryan Ching</h1>
      {socials.map((social, index) => (
        <a key={index} href={social.url} target="_blank" rel="noreferrer">
          <img className="social-icon" src={social.icon} alt="social icon" />
        </a>
      ))}
      <a key="4" href={"./projects"} target="_blank" rel="noreferrer">
        <h1>Projects</h1>
      </a>
      <a key="5" href={"./contact"} target="_blank" rel="noreferrer">
        <h1>Contact Me</h1>
      </a>
    </div>
  );
};
export default Header;
