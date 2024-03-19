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

import "./Header.css";




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
    <Tabs isFitted variant='enclosed' style={{ backgroundColor: 'black', color: 'white'}}>
      <TabList>
        <Tab _selected={{color: 'black', bg:"white"}}>About Me</Tab>
        <Tab _selected={{color: 'black', bg:"white"}}>Education</Tab>
        <Tab _selected={{color: 'black', bg:"white"}}>Projects</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <LandingSection />
          <ContactMeSection />
        </TabPanel>
        <TabPanel>
          <EducationSection />
        </TabPanel>
        <TabPanel>
          <ProjectsSection />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Header;
