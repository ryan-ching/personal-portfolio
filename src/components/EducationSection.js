import React from "react";
import FullScreenSection from "./FullScreenSection";
import {
  Box,
  Heading,
  VStack,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import Card from "./Card";
import uwLogo from "../images/uw_logo.png";
import courseraLogo from "../images/courseraLogo.png";

//TODO: Fix the scaling on the education section when changing window size
const degrees = [
  {
    school: "University of Washington",
    degree: "M.S.",
    major: "Electrical and Computer Engineering",
    date: "January 2022 - June 2023",
    concentraion: "Machine Learning",
    img: uwLogo,
  },
  {
    school: "University of Washington",
    degree: "B.S.",
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
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])
  return (
    <FullScreenSection
      backgroundColor="#000000"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <VStack minWidth="75vh">
        <Heading as="h1" id="education-section" padding="10%">Education</Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(1,minmax(0,1fr))"
          gridGap={8}
        >
          {degrees.map((degree, index) => (
            <Box key={index} display="grid" gridTemplateColumns="auto 1fr" alignItems="left" gap={4}>
              <Box boxsize="sm" maxWidth={width <= 768 ? '50px' : '100px'}>
                <Image src={degree.img} alt="uwLogo"/> 
              </Box>
              <Box boxsize="lg" maxWidth="100%">
                <Heading as="h2" size="lg" color="white" justifyContent="space-between"><span>{degree.major}</span> - <span>{degree.degree}</span></Heading>
                <Heading as="h2" size="m" color="white" >{degree.school}</Heading>
                <Heading as="h2" size="m" color="white" >{degree.date}</Heading>
                <Heading as="h2" size="m" color="white">{degree.status}</Heading>
              </Box>
            </Box>
          ))}
        </Box>
        <Heading as="h1" id="self-learning-section" padding="10%">Self Learning</Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(1,minmax(0,1fr))"
          gridGap={8}
        >
          {selfLearning.map((course, index) => (
            <Box key={index} display="grid" gridTemplateColumns="auto 1fr" alignItems="left" gap={4}>
            <Box boxsize="sm" maxWidth={width <= 768 ? '50px' : '100px'}>
              <Image src={course.img} alt="courseraLogo"/> 
            </Box>
            <Box boxsize="lg" maxWidth="100%">
              <Heading as="h2" size="lg" color="white">{course.title}</Heading>
              <Heading as="h2" size="m" color="white">{course.source}</Heading>
              <Heading as="h2" size="m" color="white">{course.date}</Heading>
              <Heading as="h2" size="m" color="white">{course.status}</Heading>
            </Box>
          </Box>
          ))}
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default EducationSection;
