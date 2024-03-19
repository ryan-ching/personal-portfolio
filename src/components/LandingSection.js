import React from "react";
import { Avatar, Heading, VStack, HStack, Text, Button} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from "../images/profilePic.png";
import emailLogo from "../images/emailLogo.png";
import githubLogo from "../images/githubLogo.png";
import linkedinLogo from "../images/linkedinLogo.png";
const greeting = "Hello, I am Ryan!";
const languages1 = "Languages (Proficient): HTML, CSS, JavaScript, React, Python, Java, C++";
const languages2 = "Languages (Familiar): Java, C, C#, JavaScript, MATLAB, Swift";
const libraries = "Libraries: React, Node.js, PyTorch, SciPy, Pandas, DGL"
const tools = "Tools: Git, Jupyter Notebooks, LaTeX, Vim"
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
// TODO: Add resume download option
const socials = [
  {
    icon: emailLogo,
    url: "mailto: hello@example.com",
    title: "Email Me"
  },
  {
    icon: githubLogo,
    url: "https://github.com/ryan-ching",
    title: "Github"
  },
  {
    icon: linkedinLogo,
    url: "https://www.linkedin.com/in/ching-ryan/",
    title: "Linkedin"
  },
];

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#000000"
  >
    <VStack spacing={4}>
      <Avatar size="3xl" name="Ryan" src={profilePic} />
      <Heading as="h1" size="2xl" color="white">
        {greeting}
      </Heading>
      <Text fontSize="2xl" color="white" align="center">
        I am a recent graduate from the University of Washington (June 2023) where I studied Electrical 
        and Computer Engineering. I am currently seeking full time roles in Software Engineering! This
        website is a highlight of some of my projects and experiences. 
        This website was built using React and Chakra UI.
      </Text>
    </VStack>
    <HStack spacing={10} paddingTop={10}>
      <VStack spacing={2}>
        <Heading as="h2" size="md" color="white">{languages1}</Heading>
        <Heading as="h2" size="md" color="white">{languages2}</Heading>
      </VStack> 
      <VStack spacing={2}>
        <Heading as="h2" size="md" color="white">{libraries}</Heading>
        <Heading as="h2" size="md" color="white">{tools}</Heading>
      </VStack>
    </HStack>
    <HStack spacing={4} paddingTop={10}>
      {socials.map((social) => (
        <a
          key={social.url}
          href={social.url}
          target="_blank"
          rel="noreferrer"
        >
          <Button colorScheme="white" variant='outline' size="lg">{social.title}</Button>
        </a>
      ))}
    </HStack>
    
  </FullScreenSection>
);

export default LandingSection;
