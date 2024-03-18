import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import LandingSection from "./LandingSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import EducationSection from "./EducationSection";
import emailLogo from "../images/emailLogo.png";
import githubLogo from "../images/githubLogo.png";
import linkedinLogo from "../images/linkedinLogo.png";
import "./Header.css";


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
    url: "https://www.linkedin.com/in/ching-ryan/",
  },
];

const Header = () => {
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
    <Tabs>
      <TabList>
        <Tab>About Me</Tab>
        <Tab>Education</Tab>
        <Tab>Projects</Tab>
        <Tab>Contact Me</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <LandingSection />
        </TabPanel>
        <TabPanel>
          <EducationSection />
        </TabPanel>
        <TabPanel>
          <ProjectsSection />
        </TabPanel>
        <TabPanel>
          <ContactMeSection />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Header;
