import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Switch } from '@chakra-ui/react'
import LandingSection from "./LandingSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import EducationSection from "./EducationSection";




const Header = () => {
  // const { isOpen, onToggle } = useDisclosure();

  return (
    <Tabs variant='soft-rounded' style={{ backgroundColor: 'black', color: 'white'}}>
    <TabList style={{padding: '2vh'}}>
      <Tab _selected={{color: 'black', bg:"white"}} _hover={{color: 'white'}}>About Me</Tab>
      <Tab _selected={{color: 'black', bg:"white"}} _hover={{color: 'white'}}>Projects</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
          <LandingSection />
          <EducationSection />
          {/* <ContactMeSection /> */}
      </TabPanel>
      <TabPanel>
        <ProjectsSection />
      </TabPanel>
    </TabPanels>
  </Tabs>
  );
};
export default Header;
