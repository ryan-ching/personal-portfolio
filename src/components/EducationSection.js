import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack, Image} from "@chakra-ui/react";
import Card from "./Card";
import uwLogo from "../images/uw_logo.png";
import courseraLogo from "../images/courseraLogo.png";
const degrees = [
  {
    school: "University of Washington",
    degree: "M.S",
    major: "Electrical and Computer Engineering",
    date: "January 2022 - June 2023",
    concentraion: "Machine Learning",
    img: uwLogo,
  },
  {
    school: "University of Washington",
    degree: "B.S",
    major: "Electrical and Computer Engineering",
    date: "September 2018 - June 2022",
    concentraion: "Embedded Computing Systems",
    img: uwLogo,
  },
];

const selfLearning = [
  {
    source: "Coursera",
    title: "Meta Front-End Developer Professional Certificate",
    status: "In Progress (6/9 Courses Complete)",
    date: "January 2024 - Present",
    img: courseraLogo,
  }
]
const EducationSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#000000"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <VStack>
        <Heading as="h1" id="education-section">Education</Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(1,minmax(0,1fr))"
          gridGap={8}
        >
          {degrees.map((degree, index) => (
            <Box key={index}>
                <Image src={degree.img} alt="uwLogo" /> 
                <Heading as="h2" size="lg" color="white">{degree.major}</Heading>
                <Heading as="h2" size="lg" color="white">{degree.degree}</Heading>
                <Heading as="h2" size="lg" color="white">{degree.school}</Heading>
                <Heading as="h2" size="lg" color="white">{degree.date}</Heading>
                <Heading as="h2" size="lg" color="white">{degree.concentration}</Heading>
            </Box>
          ))}
        </Box>
        <Heading as="h1" id="self-learning-section">Self Learning</Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(1,minmax(0,1fr))"
          gridGap={8}
        >
          {selfLearning.map((course, index) => (
            <Box key={index}>
                <Image src={course.img} alt="uwLogo" /> 
                <Heading as="h2" size="lg" color="white">{course.title}</Heading>
                <Heading as="h2" size="lg" color="white">{course.source}</Heading>
                <Heading as="h2" size="lg" color="white">{course.status}</Heading>
                <Heading as="h2" size="lg" color="white">{course.date}</Heading>
            </Box>
          ))}
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default EducationSection;
