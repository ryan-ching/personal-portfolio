import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack, Image} from "@chakra-ui/react";
import Card from "./Card";
import uwLogo from "../images/uw_logo.png";

const degrees = [
  {
    school: "University of Washington",
    title: "Master of Science in Electrical and Computer Engineering",
    date: "January 2022 - June 2023",
    concentraion: "Machine Learning",
    img: uwLogo,
  },
  {
    school: "University of Washington",
    title: "Master of Science in Electrical and Computer Engineering",
    date: "September 2018 - June 2022",
    concentraion: "Embedded Computing Systems",
    img: uwLogo,
  },
];

const EducationSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <VStack>
        <Heading as="h1" id="education-section">
          Education
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2,minmax(0,1fr))"
          gridGap={8}
        >
          {degrees.map((degree, index) => (
            <div key={index}>
                <Image src={degree.img} alt="uwLogo" /> 
                <Heading as="h2" size="lg" color="white">{degree.title}</Heading>
                <Heading as="h2" size="lg" color="white">{degree.school}</Heading>
                <Heading as="h2" size="lg" color="white">{degree.date}</Heading>
                <Heading as="h2" size="lg" color="white">{degree.concentration}</Heading>
            </div>
          ))}
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default EducationSection;
