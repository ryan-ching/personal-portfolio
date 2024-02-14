import React, { useEffect, useRef } from "react";
import githubLogo from "../images/githubLogo.png";
import linkedinLogo from "../images/linkedinLogo.png";
import emailLogo from "../images/emailLogo.png";
import "./components.css";

const socials = [
  {
    icon: emailLogo,
    url: "mailto: hello@example.com",
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

const Header = () => {
  return (
    <div className="header-container">
      <h1>Ryan Ching</h1>
      {socials.map((social, index) => (
        <a key={index} href={social.url} target="_blank" rel="noreferrer">
          <img className="social-icon" src={social.icon} alt="social icon" />
        </a>
      ))}
    </div>
  );
};
export default Header;
