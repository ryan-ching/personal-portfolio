import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profileImg from "../images/profileImg.png";
const greeting = "Hello, I am Ryan!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar size="2xl" name="Pete" src={profileImg} />
      <Heading as="h1" size="2xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="lg" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" size="lg" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
