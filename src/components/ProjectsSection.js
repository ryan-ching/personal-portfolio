import React from "react";
import FullScreenSection from "./FullScreenSection";
import {
  HStack, 
  VStack,
  Box,
  Checkbox,
  Heading,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from '@chakra-ui/react'
import Card from "./Card";
import {projects} from "./Projects";
// Add a sorting function to sort projects by date
// add a vertical navigation bar
// 3 Drop down menu for project types
const ProjectsSection = () => {
  const [selectTag, setSelectTag] = React.useState("All");
  const typeTag = ["Internship", "School", "Research", "Personal"]
  const fieldTag = ["Machine Learning", "Embedded Systems", "Web Development"]
  const languageTag = ["Python", "SystemVerilog", "Java", "Javascript", "React", "C", "C#"] 
  const allTags = [...typeTag, ...fieldTag, ...languageTag]
    const toggleTag = (tag) => {
      if (selectTag.includes(tag)) {
        setSelectTag(selectTag.filter((t) => t !== tag));
      } else {
        setSelectTag([...selectTag, tag]);
      }
    };
  
  const filteredProjects = selectTag.length
    ? projects.filter((project) => project.tags.some((tag) => selectTag.includes(tag)))
    : projects;

  return (
    <FullScreenSection
      backgroundColor= "#000000"
      isDarkBackground
      p={8}
      spacing={8}
    >
      <VStack alignItems="center">
        <Heading as="h2">Type</Heading>
        <HStack>
          {Array.from(typeTag).map((tag) => (
            <Button key={tag} backgroundColor="white" variant="solid" onChange={() => toggleTag(tag)} isChecked={selectTag.includes(tag)}>
              {tag}
            </Button>
          ))}
        </HStack>
        <Heading as="h2">Field</Heading>
        <HStack>
          {Array.from(fieldTag).map((tag) => (
            <Button key={tag} backgroundColor="white" variant="solid" onChange={() => toggleTag(tag)} isChecked={selectTag.includes(tag)}>
              {tag}
            </Button>
          ))}
        </HStack>
        <Heading as="h2">Language</Heading>
        <HStack>
          {Array.from(languageTag).map((tag) => (
            <Button key={tag} backgroundColor="white" variant="solid" onChange={() => toggleTag(tag)} isChecked={selectTag.includes(tag)}>
              {tag}
            </Button>
          ))}
        </HStack>
      </VStack>
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        {projects
            .slice()
            .sort((a,b) => b.year - a.year)
            .map((project) => (
                <Card
                  title={project.title}
                  date={project.date}
                  description={project.description}
                  imageSrc={project.getImageSrc()}
                  tags={project.tags}
                />
          ))}
      </Box>
        
    </FullScreenSection>
  );
};

export default ProjectsSection;
